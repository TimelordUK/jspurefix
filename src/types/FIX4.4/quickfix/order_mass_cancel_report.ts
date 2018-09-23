import { IAffectedOrdGrp } from './set/affected_ord_grp'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'

export interface IOrderMassCancelReport {
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  OrderID: string// 37
  SecondaryOrderID?: string// 198
  MassCancelRequestType: string// 530
  MassCancelResponse: string// 531
  MassCancelRejectReason?: string// 532
  TotalAffectedOrders?: number// 533
  AffectedOrdGrp?: IAffectedOrdGrp
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
  Side?: string// 54
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
