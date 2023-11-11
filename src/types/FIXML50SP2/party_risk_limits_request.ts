import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRequestedPartyRoleGrp } from './set/requested_party_role_grp'
import { IRequestedRiskLimitTypesGrp } from './set/requested_risk_limit_types_grp'
import { IRiskInstrumentScopeGrp } from './set/risk_instrument_scope_grp'

/*
**********************************************************
* PartyRiskLimitsRequest can be found in Volume 3 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IPartyRiskLimitsRequest {
  RiskLimitRequestID: string// [2] 1666 (String)
  RiskLimitRequestType?: number// [2] 1760 (Int)
  SubscriptionRequestType?: string// [2] 263 (String)
  RiskLimitPlatform?: string// [2] 1533 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RequestingPartyGrp?: IRequestingPartyGrp[]// [2] ID.1658, Src.1659 .. Qual.2338
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  RequestedPartyRoleGrp?: IRequestedPartyRoleGrp[]// [4] R.1509, Qual.2386
  RequestedRiskLimitTypesGrp?: IRequestedRiskLimitTypesGrp[]// [5] Typ.139
  RiskInstrumentScopeGrp?: IRiskInstrumentScopeGrp[]// [6] Oper.1535, Sym.1536 .. SettlTyp.63
}
