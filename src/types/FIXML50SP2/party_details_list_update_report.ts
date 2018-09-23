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
  MDStatisticRptID: string// 2453
  MDStatisticReqID?: string// 2452
  TotNoParties?: number// 1512
  LastFragment?: string// 893
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyDetailsUpdateGrp?: IPartyDetailsUpdateGrp[]
}
