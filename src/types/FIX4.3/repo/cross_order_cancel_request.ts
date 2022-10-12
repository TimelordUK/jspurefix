import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IOrderQtyData } from './set/order_qty_data'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* Used to fully cancel the remaining open quantity of a cross *
* order.                                                      *
***************************************************************
*/
export interface ICrossOrderCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrderID?: string// [2] 37 (String)
  Side: string// [3] 54 (String)
  OrigClOrdID: string// [4] 41 (String)
  ClOrdID: string// [5] 11 (String)
  Parties?: IParties[]// [6] 
  OrderQtyData: IOrderQtyData// [7] OrderQty.38, CashOrderQty.152
  ComplianceID?: string// [8] 376 (String)
  Text?: string// [9] 58 (String)
  EncodedTextLen?: number// [10] 354 (Int)
  EncodedText?: Buffer// [11] 355 (RawData)
  Instrument: IInstrument// [12] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  TransactTime: Date// [13] 60 (UtcTimestamp)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
