import { FixmlSession } from '../../../transport/fixml/fixml-session'
import { MsgView } from '../../../buffer/msg-view'
import { IJsFixLogger } from '../../../config/js-fix-logger'
import { IJsFixConfig } from '../../../config/js-fix-config'
import { INewOrderSingle } from '../../../types/FIXML50SP2/new_order_single'
import { IExecutionReport } from '../../../types/FIXML50SP2/execution_report'
import { OmsFactory } from './oms-factory'

export class HttpServer extends FixmlSession {
  private readonly logger: IJsFixLogger
  private readonly fixLog: IJsFixLogger
  private readonly factory: OmsFactory = new OmsFactory('server')
  constructor (public readonly config: IJsFixConfig) {
    super(config)
    this.logReceivedMsgs = true
    this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`)
    this.logger = config.logFactory.logger(`${this.me}`)
  }

  protected onApplicationMsg (msgType: string, view: MsgView): void {
    // dispatch messages
    this.logger.info(view.toJson())
    switch (msgType) {
      case 'Order': {
        const order: INewOrderSingle = view.toObject()
        this.logger.info(`received order id ${order.ClOrdID}`)
        const fill: IExecutionReport = this.factory.fillOrder(order)
        this.send('ExecutionReport', fill)
      }
    }
  }

  // use msgType for example to persist only trade capture messages to database
  protected onDecoded (msgType: string, txt: string): void {
    this.fixLog.info(txt)
  }

  protected onEncoded (msgType: string, txt: string): void {
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
