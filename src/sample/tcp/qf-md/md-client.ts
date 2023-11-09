import { MsgView } from '../../../buffer'
import { AsciiSession } from '../../../transport'
import { MsgType } from '../../../types'
import { IJsFixLogger, IJsFixConfig } from '../../../config'

import { MDFactory } from './md-factory'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../../runtime'

@injectable()
export class MDClient extends AsciiSession {
  private readonly logger: IJsFixLogger
  private readonly fixLog: IJsFixLogger

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    super(config)
    this.logReceivedMsgs = true
    this.fixLog = config.logFactory.plain(`jsfix.${config?.description?.application?.name}.txt`)
    this.logger = config.logFactory.logger(`${this.me}:MDClient`)
  }

  protected onApplicationMsg (_: string, view: MsgView): void {
    this.logger.info(`${view.toJson()}`)
  }

  protected onStopped (): void {
    this.logger.info('stopped')
  }

  protected onDecoded (_: string, txt: string): void {
    this.fixLog.info(txt)
  }

  protected onEncoded (_: string, txt: string): void {
    this.fixLog.info(txt)
  }

  protected onReady (view: MsgView): void {
    this.logger.info('ready')
    const logoutSeconds = 32
    this.logger.info(`will logout after ${logoutSeconds}`)
    const mdr = MDFactory.BidOfferRequest('EUR/USD')
    this.send(MsgType.MarketDataRequest, mdr)
    setTimeout(() => {
      this.done()
    }, logoutSeconds * 1000)
  }

  protected onLogon (view: MsgView, user: string, password: string): boolean {
    return true
  }
}
