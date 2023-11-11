import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyRiskLimitsUpdateGrp } from './set/party_risk_limits_update_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyRiskLimitsDefinitionRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RiskLimitRequestID: string// [2] 1666 (String)
  RequestingPartyGrp?: IRequestingPartyGrp// [3] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp// [4] NoPartyRiskLimits.1677, ListUpdateAction.1324 .. PartyRiskLimitStatus.2355
  Text?: string// [5] 58 (String)
  EncodedTextLen?: number// [6] 354 (Length)
  EncodedText?: Buffer// [7] 355 (RawData)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
