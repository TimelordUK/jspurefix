import { FixmlSession } from '../../../transport/fixml/fixml-session'
import { MsgView } from '../../../buffer/msg-view'
import { IJsFixLogger } from '../../../config/js-fix-logger'
import { IJsFixConfig } from '../../../config/js-fix-config'
import { INewOrderSingle } from '../../../types/FIXML50SP2/new_order_single'
import { IOrderQtyData } from '../../../types/FIX.5.0SP2/repo/set/order_qty_data'
import { IInstrument } from '../../../types/FIXML50SP2/set/instrument'
import {
  OrdType,
  SecurityIDSource, Side,
  TimeInForce
} from '../../../types/FIXML50SP2/enum/all-enum'

export class HttpClient extends FixmlSession {
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
  protected onDecoded (msgType: string, txt: string): void {
    this.fixLog.info(txt)
  }

  // no delimiter substitution on transmit messages
  protected onEncoded (msgType: string, txt: string): void {
    this.fixLog.info(txt)
  }

  protected onLogon (view: MsgView, user: string, password: string): boolean {
    return true
  }

  protected onReady (view: MsgView): void {
    this.logger.info('onReady')
    const logoutSeconds = this.logoutSeconds
    const req = {
      ClOrdID: '1',
      Account: 'TradersRUs',
      Side: Side.Buy,
      Price: 110.12,
      OrdType: OrdType.Limit,
      OrderQtyData: {
        OrderQty: 1000000
      } as IOrderQtyData,
      Instrument: {
        Symbol: 'IBM',
        SecurityID: '459200101',
        SecurityIDSource: SecurityIDSource.IsinNumber
      } as IInstrument,
      TimeInForce: TimeInForce.GoodTillCancelGtc
    } as INewOrderSingle
    this.send('Order', req)
    this.logger.info(`will logout after ${logoutSeconds}`)
    setTimeout(() => {
      this.done()
    }, logoutSeconds * 1000)
  }

  protected onStopped (): void {
    this.logger.info('stopped')
  }
}
