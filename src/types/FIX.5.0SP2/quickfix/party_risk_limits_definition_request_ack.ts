import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyRiskLimitsAckGrp } from './set/party_risk_limits_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyRiskLimitsDefinitionRequestAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RiskLimitRequestID: string// [2] 1666 (String)
  RiskLimitRequestResult?: number// [3] 1761 (Int)
  RiskLimitRequestStatus: number// [4] 1762 (Int)
  RequestingPartyGrp?: IRequestingPartyGrp// [5] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  PartyRiskLimitsAckGrp?: IPartyRiskLimitsAckGrp// [6] NoPartyRiskLimits.1677, ListUpdateAction.1324 .. PartyRiskLimitStatus.2355
  Text?: string// [7] 58 (String)
  EncodedTextLen?: number// [8] 354 (Length)
  EncodedText?: Buffer// [9] 355 (RawData)
  StandardTrailer: IStandardTrailer// [10] SignatureLength.93, Signature.89, CheckSum.10
}
