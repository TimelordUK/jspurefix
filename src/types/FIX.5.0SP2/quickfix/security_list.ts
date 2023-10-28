import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISecListGrp } from './set/sec_list_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityList {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReportID?: number// [3] 964 (Int)
  ClearingBusinessDate?: Date// [4] 715 (LocalDate)
  SecurityListID?: string// [5] 1465 (String)
  SecurityListRefID?: string// [6] 1466 (String)
  SecurityListDesc?: string// [7] 1467 (String)
  EncodedSecurityListDescLen?: number// [8] 1468 (Length)
  EncodedSecurityListDesc?: Buffer// [9] 1469 (RawData)
  SecurityListType?: number// [10] 1470 (Int)
  SecurityListTypeSource?: number// [11] 1471 (Int)
  SecurityReqID?: string// [12] 320 (String)
  SecurityResponseID?: string// [13] 322 (String)
  SecurityRequestResult?: number// [14] 560 (Int)
  SecurityRejectReason?: number// [15] 1607 (Int)
  TransactTime?: Date// [16] 60 (UtcTimestamp)
  TotNoRelatedSym?: number// [17] 393 (Int)
  MarketID?: string// [18] 1301 (String)
  MarketSegmentID?: string// [19] 1300 (String)
  LastFragment?: boolean// [20] 893 (Boolean)
  SecListGrp?: ISecListGrp// [21] NoRelatedSym.146, Symbol.55 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [22] SignatureLength.93, Signature.89, CheckSum.10
}
