import { INewOrderSingle } from '../../../types/FIXML50SP2/new_order_single'
import {
  ExecType,
  OrdStatus,
  OrdType,
  SecurityIDSource,
  Side,
  TimeInForce
} from '../../../types/FIXML50SP2/enum/all-enum'
import { IOrderQtyData } from '../../../types/FIX.5.0SP2/repo/set/order_qty_data'
import { IInstrument } from '../../../types/FIXML50SP2/set/instrument'
import { IExecutionReport } from '../../../types/FIXML50SP2/execution_report'

export class OmsFactory {
  private id: number = 1
  private execId: number = 1
  constructor (public readonly account: string) {
  }

  public createOrder (symbol: string, side: Side, qty: number, price: number): INewOrderSingle {
    const id: number = this.id++
    return {
      ClOrdID: `Cli${id}`,
      Account: this.account,
      Side: side,
      Price: price,
      OrdType: OrdType.Limit,
      OrderQtyData: {
        OrderQty: qty
      } as IOrderQtyData,
      Instrument: {
        Symbol: symbol,
        SecurityID: '459200101',
        SecurityIDSource: SecurityIDSource.IsinNumber
      } as IInstrument,
      TimeInForce: TimeInForce.GoodTillCancelGtc
    } as INewOrderSingle
  }

  public fillOrder (order: INewOrderSingle): IExecutionReport {
    const id: number = this.execId++
    return {
      TransactTime: new Date(),
      AvgPx: order.Price,
      LeavesQty: 0,
      LastPx: order.Price,
      ExecType: ExecType.OrderStatus,
      OrdStatus: OrdStatus.Filled,
      ExecID: `exec${id}`,
      Side: order.Side,
      Price: order.Price,
      OrdType: OrdType.Limit,
      OrderQtyData: {
        OrderQty: order.OrderQtyData.OrderQty
      } as IOrderQtyData,
      Instrument: {
        Symbol: order.Instrument.Symbol,
        SecurityID: order.Instrument.SecurityID,
        SecurityIDSource: SecurityIDSource.IsinNumber
      } as IInstrument
    } as IExecutionReport
  }
}
