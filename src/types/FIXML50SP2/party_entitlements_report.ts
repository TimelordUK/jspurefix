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
  EntitlementReportID: string// 1771
  EntitlementRequestID?: string// 1770
  SecurityRequestResult?: number// 560
  TotNoParties?: number// 1512
  LastFragment?: boolean// 893
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  PartyEntitlementGrp?: IPartyEntitlementGrp[]
}
