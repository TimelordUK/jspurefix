import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IQuotReqRjctGrp } from './set/quot_req_rjct_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
************************************************************
* The Quote Request Reject message is used to reject Quote *
* Request messages for all quoting models.                 *
************************************************************
*/
export interface IQuoteRequestReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID: string// [2] 131 (String)
  RFQReqID?: string// [3] 644 (String)
  QuoteRequestRejectReason: number// [4] 658 (Int)
  PrivateQuote?: boolean// [5] 1171 (Boolean)
  RespondentType?: number// [6] 1172 (Int)
  PreTradeAnonymity?: boolean// [7] 1091 (Boolean)
  RootParties?: IRootParties[]// [8] RootPartyID.1117, RootPartyIDSource.1118 .. RootPartySubIDType.1122
  QuotReqRjctGrp: IQuotReqRjctGrp[]// [9] Symbol.55, SymbolSfx.65 .. PartySubIDType.803
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Int)
  EncodedText?: Buffer// [12] 355 (RawData)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
