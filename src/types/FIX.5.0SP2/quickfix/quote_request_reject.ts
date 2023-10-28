import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IQuotReqRjctGrp } from './set/quot_req_rjct_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteRequestReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID: string// [2] 131 (String)
  RFQReqID?: string// [3] 644 (String)
  QuoteRequestRejectReason: number// [4] 658 (Int)
  PrivateQuote?: boolean// [5] 1171 (Boolean)
  RespondentType?: number// [6] 1172 (Int)
  PreTradeAnonymity?: boolean// [7] 1091 (Boolean)
  RootParties?: IRootParties// [8] NoRootPartyIDs.1116, RootPartyID.1117 .. RootPartySubIDType.1122
  QuotReqRjctGrp?: IQuotReqRjctGrp// [9] NoRelatedSym.146, Symbol.55 .. StrikeTime.443
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Length)
  EncodedText?: Buffer// [12] 355 (RawData)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
