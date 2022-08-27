import { IStandardHeader } from './set/standard_header'
import { IRFQReqGrp } from './set/rfq_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRFQRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RFQReqID: string// [2] 644 (String)
  RFQReqGrp?: IRFQReqGrp// [3] NoRelatedSym.146, Symbol.55 .. TradingSessionSubID.625
  SubscriptionRequestType?: string// [4] 263 (String)
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
