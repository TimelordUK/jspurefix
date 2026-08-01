import { SessionId } from '../../store/session-id'
import { IJsFixLogger } from '../../config/js-fix-logger'
import { JsFixLoggerFactory } from '../../config/js-fix-logger-factory'

/**
 * The registry only ever needs to ask a session to stop, so it is typed against
 * that capability rather than against FixSession.  IJsFixConfig carries a registry,
 * and FixSession is constructed from IJsFixConfig - depending on the concrete class
 * here would close an import cycle.
 */
export interface IStoppableSession {
  requestStop: (reason: string) => void
}

/**
 * Tracks the live session for each SessionId served by an acceptor.
 *
 * FIX allows exactly one active session per (BeginString, SenderCompID,
 * TargetCompID).  A counterparty whose socket has gone half open - no FIN, no RST,
 * so node never raises 'end' - will happily open a second connection and log on
 * again.  Without a registry the acceptor then runs two sessions for one CompID
 * pair, both writing to the same message store and both stamping sequence numbers,
 * which corrupts the store and produces sequence errors the peer cannot recover
 * from.  See https://github.com/TimelordUK/jspurefix/issues/153.
 *
 * Ported from cspurefix PureFix.Transport/Session/SessionRegistry.cs.
 */
export interface ISessionRegistry {
  /**
   * Claim this SessionId for the given session.  Any *different* session already
   * holding it is stopped first, because its transport is by definition stale.
   * @returns true when an existing session was stopped
   */
  register: (sessionId: SessionId, session: IStoppableSession) => boolean
  /**
   * Release this SessionId.  A no-op unless the registered session is this exact
   * instance - a session which has already been replaced must not evict its
   * successor on the way out.
   */
  unregister: (sessionId: SessionId, session: IStoppableSession) => void
  /** number of live sessions */
  readonly count: number
  /** the SessionId keys currently held, for logging and diagnostics */
  keys: () => string[]
  get: (sessionId: SessionId) => IStoppableSession | null
}

export const REPLACED_BY_NEW_CONNECTION =
  'replaced by new connection - stopping old session with stale transport'

export class SessionRegistry implements ISessionRegistry {
  private readonly sessions = new Map<string, IStoppableSession>()
  private readonly logger: IJsFixLogger | null

  constructor (logFactory?: JsFixLoggerFactory) {
    this.logger = logFactory?.logger('SessionRegistry') ?? null
  }

  public get count (): number {
    return this.sessions.size
  }

  public keys (): string[] {
    return Array.from(this.sessions.keys())
  }

  public get (sessionId: SessionId): IStoppableSession | null {
    return this.sessions.get(sessionId.toString()) ?? null
  }

  public register (sessionId: SessionId, session: IStoppableSession): boolean {
    const key = sessionId.toString()
    const logger = this.logger
    logger?.info(`register called for SessionId=${key}, activeSessions=${this.sessions.size}`)

    const existing = this.sessions.get(key)
    let stoppedOld = false

    if (existing && existing !== session) {
      logger?.info(`FOUND EXISTING SESSION for ${key} - this is a reconnection scenario`)
      logger?.info('stopping old session to prevent stale transport writes')
      this.sessions.set(key, session)
      // stop after re-pointing the map so the old session's unregister (which runs
      // synchronously inside requestStop) sees it is no longer the holder
      existing.requestStop(REPLACED_BY_NEW_CONNECTION)
      stoppedOld = true
      logger?.info('old session stopped, new session registered')
    } else if (existing === session) {
      logger?.debug(`same session instance already registered for ${key}`)
    } else {
      logger?.info(`no existing session found - registering new session: ${key}`)
      this.sessions.set(key, session)
    }

    logger?.info(`register complete for ${key}: stoppedOldSession=${stoppedOld}, totalActiveSessions=${this.sessions.size}`)
    return stoppedOld
  }

  public unregister (sessionId: SessionId, session: IStoppableSession): void {
    const key = sessionId.toString()
    const logger = this.logger
    logger?.info(`unregister called for SessionId=${key}`)

    if (this.sessions.get(key) === session) {
      this.sessions.delete(key)
      logger?.info(`successfully unregistered session: ${key}, remainingActiveSessions=${this.sessions.size}`)
    } else {
      // expected when a new connection has already taken this SessionId over
      logger?.info(`session NOT unregistered (already replaced by new connection or not found): ${key}`)
    }
  }
}
