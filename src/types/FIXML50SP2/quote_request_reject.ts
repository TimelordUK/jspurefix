import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IQuotReqRjctGrp } from './set/quot_req_rjct_grp'

/*
******************************************************
* QuoteRequestReject can be found in Volume 3 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface IQuoteRequestReject {
  QuoteReqID: string// [2] 131 (String)
  RFQReqID?: string// [2] 644 (String)
  QuoteRequestRejectReason: number// [2] 658 (Int)
  PrivateQuote?: boolean// [2] 1171 (Boolean)
  RespondentType?: number// [2] 1172 (Int)
  PreTradeAnonymity?: boolean// [2] 1091 (Boolean)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RootParties?: IRootParties[]// [2] ID.1117, Src.1118 .. Qual.2388
  QuotReqRjctGrp?: IQuotReqRjctGrp[]// [3] PrevClsPx.140, ReqTyp.303 .. StrkTm.443
}
