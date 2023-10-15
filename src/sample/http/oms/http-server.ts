import { MsgView } from '../../../buffer'
import { FixmlSession } from '../../../transport/fixml'
import { IJsFixLogger, IJsFixConfig } from '../../../config'
import { INewOrderSingle, IExecutionReport } from '../../../types/FIXML50SP2'
import { OmsFactory } from './oms-factory'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../../runtime'

@injectable()
export class HttpServer extends FixmlSession {
  private readonly logger: IJsFixLogger
  private readonly fixLog: IJsFixLogger
  private readonly factory: OmsFactory = new OmsFactory('server')

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    super(config)
    this.logReceivedMsgs = true
    this.fixLog = config.logFactory.plain(`jsfix.${config?.description?.application?.name}.txt`)
    this.logger = config.logFactory.logger(`${this.me}`)
  }

  protected onApplicationMsg (msgType: string, view: MsgView): void {
    // dispatch messages
    this.logger.info(view.toJson())
    switch (msgType) {
      case 'Order': {
        const order: INewOrderSingle = view.toObject() as INewOrderSingle
        this.logger.info(`received order id ${order.ClOrdID}`)
        const fill: IExecutionReport = this.factory.fillOrder(order)
        this.send('ExecutionReport', fill)
        break
      }

      default: {
        this.logger.warning(`received unknown msgType ${msgType}`)
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

  protected onReady (view: MsgView): void {
    this.logger.info('onReady')
  }

  protected onStopped (): void {
    this.logger.info('stopped')
  }
}
