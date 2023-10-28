import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IRFQReqGrp } from './set/rfq_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRFQRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RFQReqID: string// [2] 644 (String)
  Parties?: IParties// [3] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  RFQReqGrp?: IRFQReqGrp// [4] NoRelatedSym.146, Symbol.55 .. TradingSessionSubID.625
  SubscriptionRequestType?: string// [5] 263 (String)
  PrivateQuote?: boolean// [6] 1171 (Boolean)
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
