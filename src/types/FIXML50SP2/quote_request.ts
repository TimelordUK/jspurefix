import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IQuotReqGrp } from './set/quot_req_grp'

/*
************************************************
* QuoteRequest can be found in Volume 3 of the *
*                                              *
* specification                                *
************************************************
*/
export interface IQuoteRequest {
  QuoteReqID: string// [2] 131 (String)
  RFQReqID?: string// [2] 644 (String)
  ClOrdID?: string// [2] 11 (String)
  BookingType?: number// [2] 775 (Int)
  OrderCapacity?: string// [2] 528 (String)
  OrderRestrictions?: string// [2] 529 (String)
  PrivateQuote?: boolean// [2] 1171 (Boolean)
  RespondentType?: number// [2] 1172 (Int)
  PreTradeAnonymity?: boolean// [2] 1091 (Boolean)
  ComplianceID?: string// [2] 376 (String)
  ComplianceText?: string// [2] 2404 (String)
  EncodedComplianceTextLen?: number// [2] 2351 (Length)
  EncodedComplianceText?: Buffer// [2] 2352 (RawData)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RootParties?: IRootParties[]// [2] ID.1117, Src.1118 .. Qual.2388
  QuotReqGrp?: IQuotReqGrp[]// [3] PrevClsPx.140, ReqTyp.303 .. StrkTm.443
}
