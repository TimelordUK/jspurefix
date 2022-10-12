import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IOrderQtyData } from './set/order_qty_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The order cancel request message requests the cancellation *
* of all of the remaining quantity of an existing order.     *
**************************************************************
*/
export interface IOrderCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrigClOrdID: string// [2] 41 (String)
  OrderID?: string// [3] 37 (String)
  ClOrdID: string// [4] 11 (String)
  ListID?: string// [5] 66 (String)
  Account?: string// [6] 1 (String)
  Parties?: IParties[]// [7] 
  Instrument: IInstrument// [8] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Side: string// [9] 54 (String)
  TransactTime: Date// [10] 60 (UtcTimestamp)
  OrderQtyData: IOrderQtyData// [11] OrderQty.38, CashOrderQty.152
  ComplianceID?: string// [12] 376 (String)
  Text?: string// [13] 58 (String)
  EncodedTextLen?: number// [14] 354 (Int)
  EncodedText?: Buffer// [15] 355 (RawData)
  StandardTrailer: IStandardTrailer// [16] SignatureLength.93, Signature.89, CheckSum.10
}
