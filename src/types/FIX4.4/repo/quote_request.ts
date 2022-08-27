import { IStandardHeader } from './set/standard_header'
import { IQuotReqGrp } from './set/quot_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* In some markets it is the practice to request quotes from  *
* brokers prior to placement of an order. The quote request  *
* message is used for this purpose. This message is commonly *
* referred to as an Request For Quote (RFQ)                  *
**************************************************************
*/
export interface IQuoteRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID: string// [2] 131 (String)
  RFQReqID?: string// [3] 644 (String)
  ClOrdID?: string// [4] 11 (String)
  OrderCapacity?: string// [5] 528 (String)
  QuotReqGrp: IQuotReqGrp[]// [6] Symbol.55, SymbolSfx.65 .. PartySubIDType.803
  Text?: string// [7] 58 (String)
  EncodedTextLen?: number// [8] 354 (Int)
  EncodedText?: Buffer// [9] 355 (RawData)
  StandardTrailer: IStandardTrailer// [10] SignatureLength.93, Signature.89, CheckSum.10
}
