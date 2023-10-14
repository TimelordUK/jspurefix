import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISecLstUpdRelSymGrp } from './set/sec_lst_upd_rel_sym_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Security List Update Report is used for reporting       *
* updates to a Contract Security Masterfile. Updates could be *
* due to Corporate Actions or other business events. Update   *
* may include additions, modifications and deletions.         *
***************************************************************
*/
export interface ISecurityListUpdateReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReportID?: number// [3] 964 (Int)
  SecurityReqID?: string// [4] 320 (String)
  SecurityResponseID?: string// [5] 322 (String)
  SecurityRequestResult?: number// [6] 560 (Int)
  TotNoRelatedSym?: number// [7] 393 (Int)
  ClearingBusinessDate?: Date// [8] 715 (LocalDate)
  SecurityUpdateAction?: string// [9] 980 (String)
  CorporateAction?: string// [10] 292 (String)
  MarketID?: string// [11] 1301 (String)
  MarketSegmentID?: string// [12] 1300 (String)
  LastFragment?: boolean// [13] 893 (Boolean)
  SecLstUpdRelSymGrp?: ISecLstUpdRelSymGrp[]// [14] ListUpdateAction.1324, Symbol.55 .. RelSymTransactTime.1504
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
  SecurityListID?: string// [16] 1465 (String)
  SecurityListRefID?: string// [17] 1466 (String)
  SecurityListDesc?: string// [18] 1467 (String)
  EncodedSecurityListDescLen?: number// [19] 1468 (Int)
  EncodedSecurityListDesc?: Buffer// [20] 1469 (RawData)
  SecurityListType?: number// [21] 1470 (Int)
  SecurityListTypeSource?: number// [22] 1471 (Int)
  TransactTime?: Date// [23] 60 (UtcTimestamp)
}
