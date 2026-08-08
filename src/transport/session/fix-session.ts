import { ElasticBuffer, MsgView } from '../../buffer'
import { IJsFixConfig, IJsFixLogger } from '../../config'
import { FixSessionState } from './fix-session-state'
import { MsgTransport } from '../factory'
import { MsgTag } from '../../types'
import { ILooseObject } from '../../collections/collection'
import { SendCallback } from '../send-callback'

import * as events from 'events'
import { SessionState } from './session-state'
import { SegmentType } from '../../buffer/segment/segment-type'

/**
 * The set of listeners this session attached to one specific transport.
 *
 * The handlers must be kept as stable references - `EventEmitter.removeListener`
 * matches on identity, so subscribing with a fresh closure and unsubscribing with
 * a method reference silently leaves the listener attached (issue #153).  Holding
 * the transport alongside the handlers also lets `unsubscribe` detach from the
 * transport it actually subscribed to, even when `this.transport` has already
 * moved on to a newer connection.
 */
interface ITransportSubscription {
  readonly transport: MsgTransport
  readonly rxOnMsg: (msgType: string, view: MsgView) => void
  readonly rxOnError: (e: Error) => void
  readonly rxOnDone: () => void
  readonly rxOnEnd: () => void
  readonly rxOnDecoded: (msgType: string, data: ElasticBuffer, ptr: number) => void
  readonly txOnError: (e: Error) => void
  readonly txOnEncoded: (msgType: string, data: string, hdr: ILooseObject) => void
}

export abstract class FixSession extends events.EventEmitter {
  public logReceivedMsgs: boolean = false
  protected timer: NodeJS.Timeout | null = null
  protected transport: MsgTransport | null = null
  private subscription: ITransportSubscription | null = null
  public manageSession: boolean = true
  public checkMsgIntegrity: boolean = false
  protected readonly me: string
  protected readonly initiator: boolean
  protected readonly acceptor: boolean
  protected readonly sessionState: FixSessionState
  /**
   * Not readonly: a wildcard acceptor does not know which counterparty it is
   * serving until the Logon arrives, and every session on that listener would
   * otherwise log under the same name.  Rebound once the identity is known.
   */
  protected sessionLogger: IJsFixLogger
  protected requestLogoutType: string
  protected respondLogoutType: string
  protected requestLogonType: string

  protected constructor (public readonly config: IJsFixConfig) {
    super()
    const description = config.description
    this.me = description?.application?.name ?? 'me'
    this.sessionState = new FixSessionState(
      {
        heartBeat: config.description.HeartBtInt,
        lastPeerMsgSeqNum: config.description.LastReceivedSeqNum
      })
    this.sessionLogger = config.logFactory.logger(`${this.me}:FixSession`)
    this.initiator = description?.application?.type === 'initiator'
    this.acceptor = !this.initiator
    this.checkMsgIntegrity = this.acceptor
    this.sessionState.compId = description.SenderCompId
  }

  stateStr (theState: SessionState): string {
    return SessionState[theState]
  }

  assignState (newState: SessionState): void {
    const currentState = this.sessionState.state
    const currentStateStr = this.stateStr(currentState)
    const logger = this.sessionLogger
    const msg = `current state ${currentStateStr} (${currentState}) moves to ${SessionState[newState]} (${newState})`
    logger.info(msg)
    this.sessionState.state = newState
  }

  public setState (state: SessionState): void {
    const logger = this.sessionLogger
    const currentState = this.sessionState.state
    const currentStateStr = this.stateStr(currentState)
    if (state === currentState) return
    switch (currentState) {
      case SessionState.ConfirmingLogout:
      case SessionState.Stopped:
        if (state !== SessionState.NetworkConnectionEstablished) {
          logger.info(`ignoring request to change state as now already in ${currentStateStr}`)
        } else {
          this.assignState(state)
        }
        break

      default: {
        this.assignState(state)
      }
    }
  }

  public getState (): SessionState {
    return this.sessionState.state
  }

  public lastSentSeqNum (): number {
    return this.sessionState.lastSentSeqNum()
  }

  public lastPeerSeqNum (): number {
    return this.sessionState.lastPeerMsgSeqNum
  }

  public sendLogon (): void {
    const lo = this.config.factory?.logon()
    if (lo) {
      this.send(this.requestLogonType, lo)
    }
  }

  private async waitPromise (): Promise<number> {
    const logger = this.sessionLogger
    if (this.initiator) {
      // Hook for subclasses to reset sequences when ResetSeqNumFlag=Y is configured —
      // must run after the store is loaded, before sendLogon stamps a seq num.
      await this.onPreLogon()
    }
    return await new Promise<any>((resolve, reject) => {
      if (this.initiator) {
        logger.debug(`initiator sending logon state = ${this.stateString()}`)
        this.sendLogon()
        this.setState(SessionState.InitiationLogonSent)
      } else {
        logger.debug(`acceptor waits for logon state = ${this.stateString()}`)
        this.setState(SessionState.WaitingForALogon)
      }

      // Use named handlers and detach BOTH when the promise settles.  Only one of
      // 'error'/'done' fires per run; without removing the sibling the unfired
      // listener would leak on every reconnect (issue #146).  `once` alone is not
      // enough for the same reason — the sibling never fires, so never self-detaches.
      const cleanup = (): void => {
        this.removeListener('error', onError)
        this.removeListener('done', onDone)
      }
      const onError = (e: Error): void => {
        cleanup()
        // read the logger now, not the one captured when the run started - a
        // wildcard acceptor rebinds it once it knows which peer it is serving
        this.sessionLogger.error(e)
        reject(e)
      }
      const onDone = (): void => {
        cleanup()
        resolve(this.transport?.id)
      }

      this.on('error', onError)
      this.on('done', onDone)
    })
  }

  public async run (transport: MsgTransport): Promise<number> {
    const logger = this.sessionLogger
    if (this.transport) {
      logger.info(`reset from previous transport. state ${this.stateString()}`)
      this.reset()
    }
    this.transport = transport
    this.subscribe()
    return await this.waitPromise()
  }

  protected expectedEndState (): boolean {
    switch (this.sessionState.state) {
      case SessionState.Stopped:
      case SessionState.ConfirmingLogout:
        return true

      default:
        return false
    }
  }

  protected rxOnEnd (): void {
    const logger = this.sessionLogger
    logger.info(`rx end received sessionState = [${this.sessionState.toString()}]`)
    const expectedState = this.expectedEndState()
    if (expectedState) {
      logger.info(`rx receives end state = ${this.stateString()} - stop session`)
      this.stop()
    } else {
      this.setState(SessionState.DetectBrokenNetworkConnection)
      const e = new Error(`unexpected state - transport failed? = ${this.stateString()}`)
      logger.info(`rx error ${e.message}`)
      this.terminate(e)
    }
  }

  protected rxOnMsg (msgType: string, view: MsgView): void {
    const logger = this.sessionLogger

    if (this.logReceivedMsgs) {
      const name = view.segment.type !== SegmentType.Unknown ? view?.segment?.set?.name : 'unknown'
      logger.info(`${msgType}: ${name}`)
      logger.info(`${view.toString()}`)
    }
    this.sessionState.lastReceivedAt = new Date()
    if (this.manageSession) {
      this.onMsg(msgType, view)
    } else {
      this.checkForwardMsg(msgType, view)
    }
  }

  protected rxOnDone (): void {
    const logger = this.sessionLogger
    logger.info('rx done received')
    this.done()
  }

  protected rxOnError (e: Error): void {
    const logger = this.sessionLogger
    logger.warning(`rx error event: ${e.message} ${JSON.stringify(e)}`)
    this.terminate(e)
  }

  protected rxOnDecoded (msgType: string, data: ElasticBuffer, ptr: number): void {
    const logger = this.sessionLogger
    logger.debug(`rx: [${msgType}] ${ptr} bytes`)
    this.onDecoded(msgType, data.toString(ptr))
  }

  protected txOnError (e: Error): void {
    const logger = this.sessionLogger
    logger.warning(`tx error event: ${e.message} ${JSON.stringify(e)}`)
    this.terminate(e)
  }

  protected txOnEncoded (msgType: string, data: string, hdr: ILooseObject): void {
    const logger = this.sessionLogger
    this.sessionState.lastHeader = hdr
    logger.debug(`tx: [${msgType}] ${data.length} bytes seqNo = ${this.lastSentSeqNum()}`)
    this.onEncoded(msgType, data)
  }

  /**
   * true when the event which has just fired came from the transport this session
   * is currently running.  A half open socket can keep emitting long after the peer
   * has reconnected on a fresh connection - those events must not be allowed to drive
   * the live session (issue #153).
   */
  private isCurrentTransport (transport: MsgTransport, event: string): boolean {
    if (this.subscription?.transport === transport && this.transport === transport) {
      return true
    }
    const current = this.transport?.id ?? 'none'
    this.sessionLogger.warning(`ignoring '${event}' from stale transport ${transport.id} - current transport is ${current}`)
    return false
  }

  protected unsubscribe (): void {
    const logger = this.sessionLogger
    const subscription = this.subscription
    if (!subscription) {
      logger.debug('unsubscribe called with no active subscription')
      return
    }
    const transport = subscription.transport
    logger.info(`unsubscribe transport ${transport.id} sessionState = [${this.sessionState.toString()}]`)
    const rx = transport.receiver
    const tx = transport.transmitter

    rx?.removeListener('msg', subscription.rxOnMsg)
    rx?.removeListener('error', subscription.rxOnError)
    rx?.removeListener('done', subscription.rxOnDone)
    rx?.removeListener('end', subscription.rxOnEnd)
    rx?.removeListener('decoded', subscription.rxOnDecoded)
    tx?.removeListener('error', subscription.txOnError)
    tx?.removeListener('encoded', subscription.txOnEncoded)
    this.subscription = null
    logger.debug(`unsubscribe complete - rx listeners now ${rx?.listenerCount('msg') ?? 0} msg, ${rx?.listenerCount('end') ?? 0} end`)
  }

  protected subscribe (): void {
    const transport = this.transport
    if (!transport) {
      this.sessionLogger.warning('subscribe called with no transport')
      return
    }
    // detach from any previous transport before attaching to this one
    if (this.subscription) {
      this.unsubscribe()
    }
    const inst = this
    const subscription: ITransportSubscription = {
      transport,
      rxOnMsg: (msgType: string, view: MsgView) => {
        if (inst.isCurrentTransport(transport, 'msg')) inst.rxOnMsg(msgType, view)
      },
      rxOnError: (e: Error) => {
        if (inst.isCurrentTransport(transport, 'error')) inst.rxOnError(e)
      },
      rxOnDone: () => {
        if (inst.isCurrentTransport(transport, 'done')) inst.rxOnDone()
      },
      rxOnEnd: () => {
        if (inst.isCurrentTransport(transport, 'end')) inst.rxOnEnd()
      },
      rxOnDecoded: (msgType: string, data: ElasticBuffer, ptr: number) => {
        if (inst.isCurrentTransport(transport, 'decoded')) inst.rxOnDecoded(msgType, data, ptr)
      },
      txOnError: (e: Error) => {
        if (inst.isCurrentTransport(transport, 'tx error')) inst.txOnError(e)
      },
      txOnEncoded: (msgType: string, data: string, hdr: ILooseObject) => {
        if (inst.isCurrentTransport(transport, 'encoded')) inst.txOnEncoded(msgType, data, hdr)
      }
    }
    const rx = transport.receiver
    const tx = transport.transmitter
    rx?.on('msg', subscription.rxOnMsg)
    rx?.on('error', subscription.rxOnError)
    rx?.on('done', subscription.rxOnDone)
    rx?.on('end', subscription.rxOnEnd)
    rx?.on('decoded', subscription.rxOnDecoded)
    tx?.on('error', subscription.txOnError)
    tx?.on('encoded', subscription.txOnEncoded)
    this.subscription = subscription
    this.sessionLogger.info(`subscribed to transport ${transport.id}`)
  }

  protected validStateApplicationMsg (): boolean {
    switch (this.sessionState.state) {
      case SessionState.Idle:
      case SessionState.InitiateConnection:
      case SessionState.InitiationLogonSent:
      case SessionState.WaitingForALogon:
      case SessionState.HandleResendRequest:
      case SessionState.AwaitingProcessingResponseToTestRequest:
      case SessionState.AwaitingProcessingResponseToResendRequest:
        return false
      default:
        return true
    }
  }

  protected stateString (): string {
    return SessionState[this.sessionState.state]
  }

  protected checkForwardMsg (msgType: string, view: MsgView): void {
    this.sessionLogger.info(`forwarding msgType = '${msgType}' to application`)
    this.setState(SessionState.ActiveNormalSession)
    this.onApplicationMsg(msgType, view)
  }

  private stopTimer (): void {
    if (this.timer) {
      this.sessionLogger.info('stopTimer')
      clearInterval(this.timer)
      this.timer = null
    }
  }

  protected terminate (error: Error): void {
    if (this.sessionState.state === SessionState.Stopped) return
    this.sessionLogger.error(error)
    this.stopTimer()
    this.unsubscribe()
    if (this.transport) {
      this.sessionLogger.info(`terminate: kill transport ${this.transport.id}`)
      this.transport.end()
    }
    this.transport = null
    this.setState(SessionState.Stopped)
    this.onSessionStopping()
    this.emit('error', error)
    this.onStopped(error)
  }

  protected peerLogout (view: MsgView): void {
    const msg = view.getString(MsgTag.Text)
    const state = this.sessionState.state
    switch (state) {
      case SessionState.WaitingLogoutConfirm: {
        this.sessionLogger.info(`peer confirms logout Text = '${msg}'`)
        this.stop()
        break
      }

      case SessionState.InitiationLogonResponse:
      case SessionState.ActiveNormalSession:
      case SessionState.InitiationLogonReceived: {
        this.setState(SessionState.ConfirmingLogout)
        this.sessionLogger.info(`peer initiates logout Text = '${msg}'`)
        this.sessionLogout()
      }
    }
  }

  /**
   * @param callback optional, invoked once the message has been encoded and handed to
   * the transport, or as soon as that fails.  Without it a send is fire and forget:
   * nothing tells the caller which sequence number the message went out under, and a
   * message dropped because the session is down, or refused by the encoder, goes
   * unanswered.  See https://github.com/TimelordUK/jspurefix/issues/86
   */
  protected send (msgType: string, obj: ILooseObject, callback: SendCallback | null = null): void {
    const state = this.sessionState.state
    switch (state) {
      case SessionState.Stopped: {
        const msg = `can't send in state ${this.stateString()}`
        this.sessionLogger.warning(msg)
        // the message is dropped either way - but a caller that asked to be told is
        // now told, instead of watching for a log line
        callback?.(new Error(msg), { msgType, header: null, encoded: null })
        break
      }

      default: {
        this.sessionState.LastSentAt = new Date()
        const transmitter = this.transport?.transmitter
        if (!transmitter) {
          const msg = `no transport to send ${msgType} on`
          this.sessionLogger.warning(msg)
          callback?.(new Error(msg), { msgType, header: null, encoded: null })
          break
        }
        transmitter.send(msgType, obj, callback)
        break
      }
    }
  }

  protected sendLogout (msg: string): void {
    const factory = this.config.factory
    this.sessionLogger.info(`sending logout with ${msg}`)
    const lo = factory?.logout(this.requestLogoutType, msg)
    if (lo) {
      this.send(this.requestLogoutType, lo)
    }
  }

  protected sessionLogout (): void {
    const sessionState = this.sessionState
    if (sessionState.logoutSentAt) {
      return
    }

    switch (sessionState.state) {
      case SessionState.ActiveNormalSession:
      case SessionState.InitiationLogonResponse:
      case SessionState.InitiationLogonReceived: {
        // this instance initiates logout
        this.setState(SessionState.WaitingLogoutConfirm)
        sessionState.logoutSentAt = new Date()
        const msg = `${this.me} initiate logout`
        this.sessionLogger.info(msg)
        this.sendLogout(msg)
        break
      }

      case SessionState.ConfirmingLogout: {
        // this instance responds to log out
        this.setState(SessionState.ConfirmingLogout)
        sessionState.logoutSentAt = new Date()
        const msg = `${this.me} confirming logout`
        this.sessionLogger.info(msg)
        this.sendLogout(msg)
        break
      }

      default: {
        this.sessionLogger.info(`sessionLogout ignored as in state ${sessionState.state}`)
      }
    }
  }

  public done (): void {
    switch (this.sessionState.state) {
      case SessionState.InitiationLogonResponse:
      case SessionState.ActiveNormalSession:
      case SessionState.InitiationLogonReceived: {
        this.sessionLogout()
        break
      }

      case SessionState.Stopped:
        this.sessionLogger.info('done. session is now stopped')
        break

      default: {
        this.stop()
        break
      }
    }
    this.sessionLogger.info(`done. check logout sequence state ${this.stateString()}`)
  }

  public reset (resetSeqNum?: number | null): void {
    this.stopTimer()
    // unsubscribe from old transport before clearing reference
    this.unsubscribe()
    // reset parser to clear any partial message state from dropped connection
    const receiver: any = this.transport?.receiver
    if (receiver?.reset) {
      receiver.reset()
    }
    this.transport = null
    const resetFlag = this.config.description.ResetSeqNumFlag
    const seqNum = resetFlag ? 0 : resetSeqNum ?? this.sessionState.lastPeerMsgSeqNum
    this.sessionState.reset(seqNum) // from header def ... eventually
    this.onPrepareForReconnect()
    this.setState(SessionState.NetworkConnectionEstablished)
  }

  protected onPrepareForReconnect (): void {
    // Override in subclass to reset coordinator/transient state
  }

  /**
   * Called once as the session moves to Stopped, before the application is informed
   * via onStopped.  Override to release session scoped resources - the ascii session
   * uses this to remove itself from the session registry.  Mirrors cspurefix
   * FixSession.OnSessionStopping.
   */
  protected onSessionStopping (): void {
    // Default no-op
  }

  /**
   * Called for initiators after the store is loaded but before the Logon is sent.
   * Override to reset sequences/store when ResetSeqNumFlag=Y so the Logon goes out
   * with MsgSeqNum=1 instead of the recovered sender seq num.
   */
  protected async onPreLogon (): Promise<void> {
    // Default no-op
  }

  /**
   * Stop this session on behalf of an external caller - typically the session registry
   * when a new connection for the same SessionId replaces this one, but equally an
   * application which has decided the peer is gone.  Mirrors cspurefix
   * FixSession.RequestStop.
   * @param reason recorded in the session log and carried on the emitted error
   */
  public requestStop (reason: string): void {
    this.sessionLogger.info(`requestStop: ${reason}`)
    this.stop(new Error(reason))
  }

  protected stop (error: Error | null = null): void {
    if (this.sessionState.state === SessionState.Stopped) {
      return
    }
    this.stopTimer()
    this.unsubscribe()
    this.sessionLogger.info(`stop: kill transport ${this.transport?.id ?? 'none'}`)
    this.onSessionStopping()
    this.transport?.end()
    if (error) {
      this.sessionLogger.info(`stop: emit error ${error.message}`)
      this.emit('error', error)
    } else {
      this.emit('done')
    }

    this.setState(SessionState.Stopped)
    this.onStopped(error ?? undefined)
    this.transport = null
  }

  /**
   * dispatches a message into the subclass that inherits from FixSession. The view contains
   * the parsed message which has utility methods such as toObject(). The Ascii session provides
   * an implementation to handle admin level messages such as logon, hearbeat and resest request.
   * Any application messges are dispatched via onApplicationMsg where the application can action
   * the message.
   * @param msgType the string based msg type the view represents
   * @param view container for all parsed fields representing the received message.
   * @protected
   */
  protected abstract onMsg (msgType: string, view: MsgView): void
  /**
   * the parsed txt recieved from the peer application.  Given the applicaton is
   * responible for maintaining the fix log, this can be used to persist all received
   * messages.
   * @param msgType the string based msg type the view represents
   * @param txt the received message where for Ascii, the wire SOH delimeter is replaced
   * with that specified in the config e.g. '|'
   * @protected
   */
  protected abstract onDecoded (msgType: string, txt: string): void
  /**
   * the formatted txt sent to the peer application as an outbound message.  Given the applicaton is
   * responible for maintaining the fix log, this can be used to persist all transmitted
   * messages. use msgType for example to persist only trade capture messages to database
   * @param msgType the msg type representing the message.
   * @param txt the sent message where for Ascii, the wire SOH delimeter is replaced
   * with that specified in the config e.g. '|'
   * @protected
   */
  protected abstract onEncoded (msgType: string, txt: string): void
  /**
   * typically all session level messages are handled by AsciiSession and these are
   * application level such as MarketDataRefresh. This will represent the applications main
   * work functiono where responses can be sent back to the peer. If manageSession has been set false
   * (not recommended) all messages are sent to this function
   * @param msgType the msg type representing the message.
   * @param view a wrapper containing the parsed message received.
   * @protected
   */
  protected abstract onApplicationMsg (msgType: string, view: MsgView): void
  /**
   * at this point the application is ready to send messages - peer login has been achieved
   * and the session can be considered ready to use. In the case of an initiator the application
   * may at this point send for security definitions or send market data subscriptions
   * @param view the login message causing session to be ready
   * @protected
   */
  protected abstract onReady (view: MsgView): void

  /**
   * Inform application this session has now ended - either from logout or connection dropped
   * @param error if session has been terminated via an error it is provided
   * @protected
   */
  protected abstract onStopped (error?: Error): void
  /**
   * Placeholder infomring the application of a peer login attempt.
   * @param view the login message
   * @param user extracted user from message
   * @param password extracted password from the message.
   * @protected
   */
  protected abstract onLogon (view: MsgView, user: string, password: string): boolean
}
