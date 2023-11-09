import { MsgView } from '../../../buffer'
import { AsciiSession } from '../../../transport'
import { IJsFixLogger, IJsFixConfig } from '../../../config'
import { ILooseObject } from '../../../collections/collection'
import { FixMsgStoreRecord } from '../../../store'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../../runtime'

@injectable()
export class SkeletonSession extends AsciiSession {
  private readonly logger: IJsFixLogger
  private readonly fixLog: IJsFixLogger

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig,
    @inject('logoutSeconds') public readonly logoutSeconds: number,
    @inject('useInMemoryStore') public useInMemoryStore: boolean) {
    super(config)
    this.logReceivedMsgs = true
    this.fixLog = config.logFactory.plain(`jsfix.${config?.description?.application?.name}.txt`)
    this.logger = config.logFactory.logger(`${this.me}`)
  }

  protected onApplicationMsg (msgType: string, view: MsgView): void {
    // dispatch messages
    if (this.useInMemoryStore) {
      const rec = FixMsgStoreRecord.toMsgStoreRecord(view)
      this.store?.put(rec).then(r => {
        this.logger.info(`store state ${JSON.stringify(r, null, 4)}`)
        this.dispatch(msgType, view)
      }).catch(e => {
        this.logger.error(e)
      })
    } else {
      this.dispatch(msgType, view)
    }
  }

  private dispatch (msgType: string, view: MsgView): void {
    const o = view.toObject()
    switch (msgType) {
      default: {
        this.logger.info(`received message type ${msgType} ${JSON.stringify(o, null, 4)}`)
        break
      }
    }
  }

  public sendMessage (msgType: string, obj: ILooseObject): void {
    this.send(msgType, obj)
  }

  protected onDecoded (msgType: string, txt: string): void {
    this.fixLog.info(txt)
  }

  protected onEncoded (msgType: string, txt: string): void {
    this.fixLog.info(txt)
  }

  protected onLogon (view: MsgView, user: string, password: string): boolean {
    this.logger.info(`peer logs in user ${user}`)
    return true
  }

  protected onReady (view: MsgView): void {
    this.logger.info('onReady')
    const logoutSeconds = this.logoutSeconds
    const t = this.config?.description?.application?.type
    switch (t) {
      case 'initiator': {
        this.logger.info(`will logout after ${logoutSeconds}`)
        setTimeout(() => {
          this.done()
        }, logoutSeconds * 1000)
        break
      }

      case 'acceptor': {
        this.logger.info('acceptor is ready for requests')
        break
      }

      default: {
        this.logger.warning(`unknown type ${t}`)
        break
      }
    }
  }

  protected onStopped (): void {
    this.logger.info('stopped')
  }
}
