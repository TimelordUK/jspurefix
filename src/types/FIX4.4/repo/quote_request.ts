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
  StandardHeader: IStandardHeader
  QuoteReqID: string// 131
  RFQReqID?: string// 644
  ClOrdID?: string// 11
  OrderCapacity?: string// 528
  QuotReqGrp: IQuotReqGrp[]
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
