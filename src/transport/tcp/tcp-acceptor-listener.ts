import { IJsFixConfig, IJsFixLogger } from '../../config'
import { FixAcceptor } from '../fix-acceptor'
import { TcpAcceptor } from './tcp-acceptor'
import { MsgTransport } from '../factory'
import { inject, injectable } from 'tsyringe'
import { FixSession } from '../session/fix-session'
import { DITokens } from '../../runtime/di-tokens'
import { FixEntity } from '../fix-entity'
import { ISessionRegistry, SessionRegistry } from '../session/session-registry'

@injectable()
export class TcpAcceptorListener extends FixEntity {
  private acceptor: FixAcceptor | null = null
  private resolveStart: ((value: any) => void) | null = null
  /**
   * One registry per listener, so a counterparty reconnecting onto a fresh socket
   * replaces its previous session instead of running alongside it (issue #153).
   * An application may supply its own via config.sessionRegistry.
   */
  public readonly sessionRegistry: ISessionRegistry

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    super(config)
    this.sessionRegistry = config.sessionRegistry ?? new SessionRegistry(config.logFactory)
    config.sessionRegistry = this.sessionRegistry
  }

  async start (): Promise<any> {
    return await new Promise<any>(async (resolve, reject) => {
      const logger = this.config.logFactory.logger('acceptor')
      const sessionContainer = this.config.sessionContainer
      if (!sessionContainer.isRegistered(DITokens.FixSession)) {
        reject(new Error(`application must register a DI token '${DITokens.FixSession}' - see src/sample`))
        return
      }
      logger.info('starting.')
      const acceptor: FixAcceptor = sessionContainer.resolve<FixAcceptor>(TcpAcceptor)
      this.acceptor = acceptor

      acceptor.on('transport', (t: MsgTransport) => {
        // resolve from the transport's own scope, not the listener's container, so
        // this session gets the per-connection description, buffers and message
        // factory created by TcpAcceptor.  Falls back to the listener container for
        // transports created outside the acceptor (tests, custom entities).
        const scope = t.config?.sessionContainer ?? sessionContainer
        const description = t.config?.description
        logger.info(`transport ${t.id}: creating session via DI token ${DITokens.FixSession} ` +
          `[${description?.SenderCompId ?? '?'} -> ${description?.TargetCompID ?? '?'}]`)
        const acceptorSession = scope.resolve<FixSession>(DITokens.FixSession)
        this.emit('session', acceptorSession, t)
        // Run the session but do NOT close the listener when it ends.
        // The acceptor keeps listening for new connections (reconnects).
        // This matches the C# TcpAcceptorListener accept-loop pattern.
        acceptorSession.run(t).then(() => {
          logger.info(`transport ${t.id}: session ended normally, acceptor continues listening`)
          this.census(logger)
        }).catch((e: Error) => {
          logger.warning(`transport ${t.id}: session ended with error: ${e.message}, acceptor continues listening`)
          this.census(logger)
        })
      })

      acceptor.on('harvested', (tid: number, reason: string) => {
        logger.info(`transport ${tid} harvested (${reason})`)
        this.census(logger)
      })

      this.resolveStart = resolve
      acceptor.listen()
    })
  }

  /**
   * What is actually connected, and which SessionIds are claimed.  Emitted whenever
   * the population changes so "how many clients do I have, and who are they" is
   * answerable from the server log alone.
   */
  private census (logger: IJsFixLogger): void {
    const acceptor = this.acceptor as TcpAcceptor | null
    const transports = acceptor?.liveTransports() ?? []
    logger.info(`acceptor census: transports=${transports.length} [${transports.join(', ')}] ` +
      `sessions=${this.sessionRegistry.count} [${this.sessionRegistry.keys().join(', ')}]`)
  }

  /**
   * Explicitly stop the acceptor listener. Call this when the application
   * is shutting down (e.g., timeout, SIGINT). Without this call, the
   * acceptor keeps listening indefinitely — which is the correct
   * production behaviour for a FIX acceptor.
   */
  stop (): void {
    if (this.acceptor) {
      const logger = this.config.logFactory.logger('acceptor')
      logger.info('acceptor stopping')
      this.acceptor.close(() => {
        logger.info('acceptor closed.')
        if (this.resolveStart) {
          this.resolveStart(true)
          this.resolveStart = null
        }
      })
      this.acceptor = null
    }
  }
}
