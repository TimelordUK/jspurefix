import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyRiskLimitsAckGrp } from './set/party_risk_limits_ack_grp'

/*
****************************************************************
* PartyRiskLimitsDefinitionRequestAck can be found in Volume 3 *
* of the                                                       *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IPartyRiskLimitsDefinitionRequestAck {
  RiskLimitRequestID: string// [2] 1666 (String)
  SecurityRequestResult?: number// [2] 560 (Int)
  RiskLimitRequestStatus: number// [2] 1762 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RequestingPartyGrp?: IRequestingPartyGrp[]// [2] ID.1658, Src.1659 .. Qual.2338
  PartyRiskLimitsAckGrp?: IPartyRiskLimitsAckGrp[]// [3] ListUpdActn.1324, Stat.1763 .. PtyRiskLmtStat.2355
}
