import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISecListGrp } from './set/sec_list_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Security List message is used to return a list of        *
* securities that matches the criteria specified in a Security *
* List Request.                                                *
****************************************************************
*/
export interface ISecurityList {
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SecurityReportID?: number// 964
  ClearingBusinessDate?: Date// 715
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityRequestResult?: number// 560
  TotNoRelatedSym?: number// 393
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  LastFragment?: boolean// 893
  SecListGrp?: ISecListGrp[]
  StandardTrailer: IStandardTrailer
  SecurityListID?: string// 1465
  SecurityListRefID?: string// 1466
  SecurityListDesc?: string// 1467
  EncodedSecurityListDescLen?: number// 1468
  EncodedSecurityListDesc?: Buffer// 1469
  SecurityListType?: number// 1470
  SecurityListTypeSource?: number// 1471
  TransactTime?: Date// 60
}
