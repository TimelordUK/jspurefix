import { IJsFixConfig } from '../../config'
import { FixAcceptor } from '../fix-acceptor'
import { TcpAcceptor } from './tcp-acceptor'
import { MsgTransport } from '../factory'
import { inject, injectable } from 'tsyringe'
import { FixSession } from '../session/fix-session'
import { DITokens } from '../../runtime/di-tokens'
import { FixEntity } from '../fix-entity'

@injectable()
export class TcpAcceptorListener extends FixEntity {
  private acceptor: FixAcceptor | null = null
  private resolveStart: ((value: any) => void) | null = null

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    super(config)
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
        logger.info(`creates new transport using DI token ${DITokens.FixSession}.`)
        const acceptorSession = sessionContainer.resolve<FixSession>(DITokens.FixSession)
        this.emit('session', acceptorSession, t)
        // Run the session but do NOT close the listener when it ends.
        // The acceptor keeps listening for new connections (reconnects).
        // This matches the C# TcpAcceptorListener accept-loop pattern.
        acceptorSession.run(t).then(() => {
          logger.info('session ended normally, acceptor continues listening')
        }).catch((e: Error) => {
          logger.warning(`session ended with error: ${e.message}, acceptor continues listening`)
        })
      })

      this.resolveStart = resolve
      acceptor.listen()
    })
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
