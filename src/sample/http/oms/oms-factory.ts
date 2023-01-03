import {
  INewOrderSingle,
  ExecType,
  OrdStatus,
  OrdType,
  SecurityIDSource,
  Side,
  TimeInForce,
  IOrderQtyData,
  IInstrument,
  IExecutionReport
} from '../../../types/FIXML50SP2'

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
      ClOrdID: order.ClOrdID,
      OrdType: order.OrdType,
      TransactTime: new Date(),
      AvgPx: order.Price,
      LeavesQty: 0,
      LastPx: order.Price,
      ExecType: ExecType.OrderStatus,
      OrdStatus: OrdStatus.Filled,
      ExecID: `exec${id}`,
      Side: order.Side,
      Price: order.Price,
      OrderQtyData: {
        OrderQty: order?.OrderQtyData?.OrderQty
      } as IOrderQtyData,
      Instrument: {
        Symbol: order?.Instrument?.Symbol,
        SecurityID: order?.Instrument?.SecurityID,
        SecurityIDSource: SecurityIDSource.IsinNumber
      } as IInstrument
    } as IExecutionReport
  }
}
