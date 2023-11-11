import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IQuotSetAckGrp } from './set/quot_set_ack_grp'
import { IThrottleResponse } from './set/throttle_response'

/*
************************************************
* MassQuoteAck can be found in Volume 3 of the *
*                                              *
* specification                                *
************************************************
*/
export interface IMassQuoteAck {
  QuoteReqID?: string// [2] 131 (String)
  QuoteID?: string// [2] 117 (String)
  QuoteStatus: number// [2] 297 (Int)
  OrdRejReason?: number// [2] 103 (Int)
  QuoteResponseLevel?: number// [2] 301 (Int)
  QuoteType?: number// [2] 537 (Int)
  QuoteCancelType?: number// [2] 298 (Int)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  ComplianceID?: string// [2] 376 (String)
  ComplianceText?: string// [2] 2404 (String)
  EncodedComplianceTextLen?: number// [2] 2351 (Length)
  EncodedComplianceText?: Buffer// [2] 2352 (RawData)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  TargetParties?: ITargetParties[]// [3] ID.1462, Src.1463 .. Qual.1818
  QuotSetAckGrp?: IQuotSetAckGrp[]// [4] SetID.302, ValidTil.367 .. LastFragment.893
  ThrottleResponse?: IThrottleResponse// [5] ThrttlInst.1685, ThrttlStat.1609, ThrttlCntInd.1686
}
