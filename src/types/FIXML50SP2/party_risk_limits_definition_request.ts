import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyRiskLimitsUpdateGrp } from './set/party_risk_limits_update_grp'

/*
****************************************************************
* PartyRiskLimitsDefinitionRequest can be found in Volume 3 of *
* the                                                          *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IPartyRiskLimitsDefinitionRequest {
  RiskLimitRequestID: string// [2] 1666 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RequestingPartyGrp?: IRequestingPartyGrp[]// [2] ID.1658, Src.1659 .. Qual.2338
  PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp[]// [3] ListUpdActn.1324, ID.1670 .. PtyRiskLmtStat.2355
}
