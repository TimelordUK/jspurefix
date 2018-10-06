import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyDetailsUpdateGrp } from './set/party_details_update_grp'

/*
****************************************************************
* PartyDetailsListUpdateReport can be found in Volume 3 of the *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IPartyDetailsListUpdateReport {
  PartyDetailsListReportID: string// 1510
  PartyDetailsListRequestID?: string// 1505
  TotNoParties?: number// 1512
  LastFragment?: boolean// 893
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyDetailsUpdateGrp?: IPartyDetailsUpdateGrp[]
}
