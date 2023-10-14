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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReportID?: number// [3] 964 (Int)
  ClearingBusinessDate?: Date// [4] 715 (LocalDate)
  SecurityReqID?: string// [5] 320 (String)
  SecurityResponseID?: string// [6] 322 (String)
  SecurityRequestResult?: number// [7] 560 (Int)
  TotNoRelatedSym?: number// [8] 393 (Int)
  MarketID?: string// [9] 1301 (String)
  MarketSegmentID?: string// [10] 1300 (String)
  LastFragment?: boolean// [11] 893 (Boolean)
  SecListGrp?: ISecListGrp[]// [12] Symbol.55, SymbolSfx.65 .. RelSymTransactTime.1504
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
  SecurityListID?: string// [14] 1465 (String)
  SecurityListRefID?: string// [15] 1466 (String)
  SecurityListDesc?: string// [16] 1467 (String)
  EncodedSecurityListDescLen?: number// [17] 1468 (Int)
  EncodedSecurityListDesc?: Buffer// [18] 1469 (RawData)
  SecurityListType?: number// [19] 1470 (Int)
  SecurityListTypeSource?: number// [20] 1471 (Int)
  TransactTime?: Date// [21] 60 (UtcTimestamp)
}
