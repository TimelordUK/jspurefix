import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISecListGrp } from './set/sec_list_grp'

/*
************************************************
* SecurityList can be found in Volume 3 of the *
*                                              *
* specification                                *
************************************************
*/
export interface ISecurityList {
  SecurityReportID?: number// 964
  ClearingBusinessDate?: Date// 715
  SecurityListID?: string// 1465
  SecurityListRefID?: string// 1466
  SecurityListDesc?: string// 1467
  SecurityListType?: number// 1470
  SecurityListTypeSource?: number// 1471
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityRequestResult?: number// 560
  SecurityRejectReason?: number// 1607
  TransactTime?: Date// 60
  TotNoRelatedSym?: number// 393
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  LastFragment?: boolean// 893
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SecListGrp?: ISecListGrp[]
}
