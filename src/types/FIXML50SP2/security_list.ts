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
  MDStatisticRptID?: string// 2453
  ClearingBusinessDate?: Date// 715
  SecurityListID?: string// 1465
  SecurityListRefID?: string// 1466
  SecurityListDesc?: string// 1467
  SecurityListType?: number// 1470
  SecurityListTypeSource?: number// 1471
  MDStatisticReqID?: string// 2452
  QuoteRespID?: string// 693
  MDStatisticRequestResult?: number// 2473
  SecurityRejectReason?: number// 1607
  RelSymTransactTime?: Date// 1504
  TotNoRelatedSym?: number// 393
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  LastFragment?: string// 893
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SecListGrp?: ISecListGrp[]
}
