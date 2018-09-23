import { FixSession } from '../../../transport/fix-session'
import { MsgView } from '../../../buffer/msg-view'
import { IJsFixLogger } from '../../../config/js-fix-logger'
import { IJsFixConfig } from '../../../config/js-fix-config'

export class SkeletonSession extends FixSession {
  private readonly logger: IJsFixLogger
  private readonly fixLog: IJsFixLogger
  constructor (public readonly config: IJsFixConfig,
               public readonly logoutSeconds: number = 45) {
    super(config)
    this.logReceivedMsgs = true
    this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`)
    this.logger = config.logFactory.logger(`${this.me}`)
  }

  protected onApplicationMsg (msgType: string, view: MsgView): void {
    // dispatch messages
  }

  // use msgType for example to persist only trade capture messages to database
  protected onAsciiDecoded (msgType: string, txt: string): void {
    this.fixLog.info(txt)
  }

  // no delimiter substitution on transmit messages
  protected onAsciiEncoded (msgType: string, txt: string): void {
    this.fixLog.info(FixSession.asPiped(txt))
  }

  protected onLogon (view: MsgView, user: string, password: string): boolean {
    return true
  }

  protected onReady (view: MsgView): void {
    this.logger.info('onReady')
    const logoutSeconds = this.logoutSeconds
    if (this.config.description.application.type === 'initiator') {
      this.logger.info(`will logout after ${logoutSeconds}`)
      setTimeout(() => {
        this.done()
      }, logoutSeconds * 1000)
    }
  }

  protected onStopped (): void {
    this.logger.info('stopped')
  }
}
