import { FixmlSession } from '../../../transport/fixml'
import { MsgView } from '../../../buffer'
import { IJsFixLogger, IJsFixConfig } from '../../../config'
import { OmsFactory } from './oms-factory'
import { IExecutionReport, Side } from '../../../types/FIXML50SP2'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../../runtime'

@injectable()
export class HttpClient extends FixmlSession {
  private readonly logger: IJsFixLogger
  private readonly fixLog: IJsFixLogger
  private readonly factory: OmsFactory = new OmsFactory('TradersRUs')
  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig,
    @inject('logoutSeconds') public readonly logoutSeconds: number = 45) {
    super(config)
    this.logReceivedMsgs = true
    this.fixLog = config.logFactory.plain(`jsfix.${config?.description?.application?.name}.txt`)
    this.logger = config.logFactory.logger(`${this.me}`)
  }

  protected onApplicationMsg (msgType: string, view: MsgView): void {
    // dispatch messages
    this.logger.info(view.toJson())
    switch (msgType) {
      case 'BizMsgRej': {
        this.logger.warning('received rejection')
        break
      }

      case 'ExecRpt': {
        const fill: (IExecutionReport | null) = view.toObject() as IExecutionReport
        this.logger.info(`received execution report ${fill?.OrderQtyData?.OrderQty}@${fill.Price}`)
        break
      }
    }
  }

  // use msgType for example to persist only trade capture messages to database
  protected onDecoded (_: string, txt: string): void {
    this.fixLog.info(txt)
  }

  protected onEncoded (_: string, txt: string): void {
    this.fixLog.info(txt)
  }

  protected onLogon (view: MsgView, user: string, password: string): boolean {
    return true
  }

  protected onReady (_: MsgView): void {
    this.logger.info('onReady')
    const logoutSeconds = this.logoutSeconds
    const req = this.factory.createOrder('IBM', Side.Buy, 10000, 100.12)
    this.send('NewOrderSingle', req)
    this.logger.info(`will logout after ${logoutSeconds}`)
    setTimeout(() => {
      this.done()
    }, 11 * 1000)
  }

  protected onStopped (): void {
    this.logger.info('stopped')
  }
}
