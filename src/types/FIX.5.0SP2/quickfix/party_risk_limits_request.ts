import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRequestedPartyRoleGrp } from './set/requested_party_role_grp'
import { IRequestedRiskLimitTypesGrp } from './set/requested_risk_limit_types_grp'
import { IRiskInstrumentScopeGrp } from './set/risk_instrument_scope_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyRiskLimitsRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RiskLimitRequestID: string// [2] 1666 (String)
  RiskLimitRequestType?: number// [3] 1760 (Int)
  SubscriptionRequestType?: string// [4] 263 (String)
  RequestingPartyGrp?: IRequestingPartyGrp// [5] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  RequestedPartyRoleGrp?: IRequestedPartyRoleGrp// [7] NoRequestedPartyRoles.1508, RequestedPartyRole.1509, RequestedPartyRoleQualifier.2386
  RequestedRiskLimitTypesGrp?: IRequestedRiskLimitTypesGrp// [8] NoRequestedRiskLimitType.1668, RiskLimitType.1530
  RiskLimitPlatform?: string// [9] 1533 (String)
  RiskInstrumentScopeGrp?: IRiskInstrumentScopeGrp// [10] NoRiskInstrumentScopes.1534, InstrumentScopeOperator.1535 .. RiskInstrumentMultiplier.1558
  Text?: string// [11] 58 (String)
  EncodedTextLen?: number// [12] 354 (Length)
  EncodedText?: Buffer// [13] 355 (RawData)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
