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
  SecurityReportID?: number// 964
  SecurityListID?: string// 1465
  SecurityListRefID?: string// 1466
  SecurityListDesc?: string// 1467
  SecurityListType?: number// 1470
  SecurityListTypeSource?: number// 1471
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityRequestResult?: number// 560
  TotNoRelatedSym?: number// 393
  ClearingBusinessDate?: Date// 715
  SecurityUpdateAction?: string// 980
  CorporateAction?: string// 292
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TransactTime?: Date// 60
  LastFragment?: boolean// 893
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SecLstUpdRelSymGrp?: ISecLstUpdRelSymGrp[]
}
