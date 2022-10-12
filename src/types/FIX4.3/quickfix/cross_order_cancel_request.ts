import { IStandardHeader } from './set/standard_header'
import { ICrossOrderCancelRequestNoSides } from './set/cross_order_cancel_request_no_sides'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICrossOrderCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  CrossID: string// [3] 548 (String)
  OrigCrossID: string// [4] 551 (String)
  CrossType: number// [5] 549 (Int)
  CrossPrioritization: number// [6] 550 (Int)
  NoSides: ICrossOrderCancelRequestNoSides[]// [7] Side.54, OrigClOrdID.41 .. EncodedText.355
  Instrument?: IInstrument// [8] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  TransactTime: Date// [9] 60 (UtcTimestamp)
  StandardTrailer: IStandardTrailer// [10] SignatureLength.93, Signature.89, CheckSum.10
}
