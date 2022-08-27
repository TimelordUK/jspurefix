import { IStandardHeader } from './set/standard_header'
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
  QuotReqRjctGrp: IQuotReqRjctGrp[]// [5] Symbol.55, SymbolSfx.65 .. PartySubIDType.803
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Int)
  EncodedText?: Buffer// [8] 355 (RawData)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
