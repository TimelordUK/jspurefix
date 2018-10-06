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
  StandardHeader: IStandardHeader
  QuoteReqID: string// 131
  RFQReqID?: string// 644
  ClOrdID?: string// 11
  OrderCapacity?: string// 528
  PrivateQuote?: boolean// 1171
  RespondentType?: number// 1172
  PreTradeAnonymity?: boolean// 1091
  RootParties?: IRootParties[]
  QuotReqGrp: IQuotReqGrp[]
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
  BookingType?: number// 775
  OrderRestrictions?: string// 529
}
