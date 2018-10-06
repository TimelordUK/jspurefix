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
  PartyDetailsListReportID: string// 1510
  PartyDetailsListRequestID?: string// 1505
  MDStatisticRequestResult?: number// 2473
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
  PartyDetailGrp?: IPartyDetailGrp[]
}
