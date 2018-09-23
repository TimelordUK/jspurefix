import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IPartyDetailGrp } from './set/party_detail_grp'

/*
**********************************************************
* PartyDetailsListReport can be found in Volume 3 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IPartyDetailsListReport {
  MDStatisticRptID: string// 2453
  MDStatisticReqID?: string// 2452
  MDStatisticRequestResult?: number// 2473
  TotNoParties?: number// 1512
  LastFragment?: string// 893
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  PartyDetailGrp?: IPartyDetailGrp[]
}
