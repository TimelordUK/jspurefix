import { INewOrderSingle } from '../../../types/FIXML50SP2/new_order_single'
import { OrdType, SecurityIDSource, Side, TimeInForce } from '../../../types/FIXML50SP2/enum/all-enum'
import { IOrderQtyData } from '../../../types/FIX.5.0SP2/repo/set/order_qty_data'
import { IInstrument } from '../../../types/FIXML50SP2/set/instrument'

export class OmsFactory {
  private id: number = 1
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
}
