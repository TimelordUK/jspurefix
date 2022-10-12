import { IStandardHeader } from './set/standard_header'
import { IRFQRequestNoRelatedSym } from './set/rfq_request_no_related_sym'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRFQRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RFQReqID: string// [2] 644 (String)
  NoRelatedSym: IRFQRequestNoRelatedSym[]// [3] Symbol.55, SymbolSfx.65 .. TradingSessionSubID.625
  SubscriptionRequestType?: string// [4] 263 (String)
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
