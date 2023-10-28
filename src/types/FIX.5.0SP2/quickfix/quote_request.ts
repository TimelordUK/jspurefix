import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IQuotReqGrp } from './set/quot_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID: string// [2] 131 (String)
  RFQReqID?: string// [3] 644 (String)
  ClOrdID?: string// [4] 11 (String)
  BookingType?: number// [5] 775 (Int)
  OrderCapacity?: string// [6] 528 (String)
  OrderRestrictions?: string// [7] 529 (String)
  PrivateQuote?: boolean// [8] 1171 (Boolean)
  RespondentType?: number// [9] 1172 (Int)
  PreTradeAnonymity?: boolean// [10] 1091 (Boolean)
  RootParties?: IRootParties// [11] NoRootPartyIDs.1116, RootPartyID.1117 .. RootPartySubIDType.1122
  QuotReqGrp?: IQuotReqGrp// [12] NoRelatedSym.146, Symbol.55 .. StrikeTime.443
  ComplianceID?: string// [13] 376 (String)
  ComplianceText?: string// [14] 2404 (String)
  EncodedComplianceTextLen?: number// [15] 2351 (Length)
  EncodedComplianceText?: Buffer// [16] 2352 (RawData)
  Text?: string// [17] 58 (String)
  EncodedTextLen?: number// [18] 354 (Length)
  EncodedText?: Buffer// [19] 355 (RawData)
  StandardTrailer: IStandardTrailer// [20] SignatureLength.93, Signature.89, CheckSum.10
}
