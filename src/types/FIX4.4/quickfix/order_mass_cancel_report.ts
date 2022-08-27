import { IStandardHeader } from './set/standard_header'
import { IAffectedOrdGrp } from './set/affected_ord_grp'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderMassCancelReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID?: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  OrderID: string// [4] 37 (String)
  SecondaryOrderID?: string// [5] 198 (String)
  MassCancelRequestType: string// [6] 530 (String)
  MassCancelResponse: string// [7] 531 (String)
  MassCancelRejectReason?: string// [8] 532 (String)
  TotalAffectedOrders?: number// [9] 533 (Int)
  AffectedOrdGrp?: IAffectedOrdGrp// [10] NoAffectedOrders.534, OrigClOrdID.41 .. AffectedSecondaryOrderID.536
  TradingSessionID?: string// [11] 336 (String)
  TradingSessionSubID?: string// [12] 625 (String)
  Instrument?: IInstrument// [13] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UnderlyingInstrument?: IUnderlyingInstrument// [14] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  Side?: string// [15] 54 (String)
  TransactTime?: Date// [16] 60 (UtcTimestamp)
  Text?: string// [17] 58 (String)
  EncodedTextLen?: number// [18] 354 (Length)
  EncodedText?: Buffer// [19] 355 (RawData)
  StandardTrailer: IStandardTrailer// [20] SignatureLength.93, Signature.89, CheckSum.10
}
