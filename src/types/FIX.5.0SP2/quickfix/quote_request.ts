import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
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
  PrivateQuote?: boolean// [6] 1171 (Boolean)
  RespondentType?: number// [7] 1172 (Int)
  PreTradeAnonymity?: boolean// [8] 1091 (Boolean)
  RootParties?: IRootParties[]// [9] RootPartyID.1117, RootPartyIDSource.1118 .. RootPartySubIDType.1122
  QuotReqGrp: IQuotReqGrp[]// [10] Symbol.55, SymbolSfx.65 .. ReferencePage.1448
  Text?: string// [11] 58 (String)
  EncodedTextLen?: number// [12] 354 (Int)
  EncodedText?: Buffer// [13] 355 (RawData)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
  BookingType?: number// [15] 775 (Int)
  OrderRestrictions?: string// [16] 529 (String)
}
