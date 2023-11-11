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
  SecurityReportID?: number// [2] 964 (Int)
  SecurityListID?: string// [2] 1465 (String)
  SecurityListRefID?: string// [2] 1466 (String)
  SecurityListDesc?: string// [2] 1467 (String)
  SecurityListType?: number// [2] 1470 (Int)
  SecurityListTypeSource?: number// [2] 1471 (Int)
  SecurityReqID?: string// [2] 320 (String)
  SecurityResponseID?: string// [2] 322 (String)
  SecurityRequestResult?: number// [2] 560 (Int)
  TotNoRelatedSym?: number// [2] 393 (Int)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  SecurityUpdateAction?: string// [2] 980 (String)
  CorporateAction?: string// [2] 292 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  LastFragment?: boolean// [2] 893 (Boolean)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecLstUpdRelSymGrp?: ISecLstUpdRelSymGrp[]// [3] ListUpdActn.1324, Ccy.15 .. EncTxt.355
}
