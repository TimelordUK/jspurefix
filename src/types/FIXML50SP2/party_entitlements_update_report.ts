import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyEntitlementUpdateGrp } from './set/party_entitlement_update_grp'

/*
*************************************************************
* PartyEntitlementsUpdateReport can be found in Volume 3 of *
* the                                                       *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IPartyEntitlementsUpdateReport {
  EntitlementReportID: string// [2] 1771 (String)
  EntitlementRequestID?: string// [2] 1770 (String)
  TotNoParties?: number// [2] 1512 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  RequestingPartyGrp?: IRequestingPartyGrp[]// [3] ID.1658, Src.1659 .. Qual.2338
  PartyEntitlementUpdateGrp?: IPartyEntitlementUpdateGrp[]// [4] ListUpdActn.1324, Stat.1883, RefID.1885
}
