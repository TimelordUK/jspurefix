import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISecLstUpdRelSymGrp } from './set/sec_lst_upd_rel_sym_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityListUpdateReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReportID?: number// [3] 964 (Int)
  SecurityListID?: string// [4] 1465 (String)
  SecurityListRefID?: string// [5] 1466 (String)
  SecurityListDesc?: string// [6] 1467 (String)
  EncodedSecurityListDescLen?: number// [7] 1468 (Length)
  EncodedSecurityListDesc?: Buffer// [8] 1469 (RawData)
  SecurityListType?: number// [9] 1470 (Int)
  SecurityListTypeSource?: number// [10] 1471 (Int)
  SecurityReqID?: string// [11] 320 (String)
  SecurityResponseID?: string// [12] 322 (String)
  SecurityRequestResult?: number// [13] 560 (Int)
  TotNoRelatedSym?: number// [14] 393 (Int)
  ClearingBusinessDate?: Date// [15] 715 (LocalDate)
  SecurityUpdateAction?: string// [16] 980 (String)
  CorporateAction?: string// [17] 292 (String)
  MarketID?: string// [18] 1301 (String)
  MarketSegmentID?: string// [19] 1300 (String)
  TransactTime?: Date// [20] 60 (UtcTimestamp)
  LastFragment?: boolean// [21] 893 (Boolean)
  SecLstUpdRelSymGrp?: ISecLstUpdRelSymGrp// [22] NoRelatedSym.146, ListUpdateAction.1324 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
