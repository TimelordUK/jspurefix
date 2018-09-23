import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISecLstUpdRelSymGrp } from './set/sec_lst_upd_rel_sym_grp'

/*
************************************************************
* SecurityListUpdateReport can be found in Volume 3 of the *
*                                                          *
* specification                                            *
************************************************************
*/
export interface ISecurityListUpdateReport {
  MDStatisticRptID?: string// 2453
  SecurityListID?: string// 1465
  SecurityListRefID?: string// 1466
  SecurityListDesc?: string// 1467
  SecurityListType?: number// 1470
  SecurityListTypeSource?: number// 1471
  MDStatisticReqID?: string// 2452
  QuoteRespID?: string// 693
  MDStatisticRequestResult?: number// 2473
  TotNoRelatedSym?: number// 393
  ClearingBusinessDate?: Date// 715
  SecurityUpdateAction?: string// 980
  CorporateAction?: string// 292
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  RelSymTransactTime?: Date// 1504
  LastFragment?: string// 893
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SecLstUpdRelSymGrp?: ISecLstUpdRelSymGrp[]
}
