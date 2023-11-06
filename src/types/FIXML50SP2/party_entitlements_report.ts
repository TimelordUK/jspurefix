import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IPartyEntitlementGrp } from './set/party_entitlement_grp'

/*
***********************************************************
* PartyEntitlementsReport can be found in Volume 3 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface IPartyEntitlementsReport {
  EntitlementReportID: string// [2] 1771 (String)
  EntitlementRequestID?: string// [2] 1770 (String)
  SecurityRequestResult?: number// [2] 560 (Int)
  TotNoParties?: number// [2] 1512 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  PartyEntitlementGrp?: IPartyEntitlementGrp[]// [3] Stat.1883
}
