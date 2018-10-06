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
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SecurityReportID?: number// 964
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityRequestResult?: number// 560
  TotNoRelatedSym?: number// 393
  ClearingBusinessDate?: Date// 715
  SecurityUpdateAction?: string// 980
  CorporateAction?: string// 292
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  LastFragment?: boolean// 893
  SecLstUpdRelSymGrp?: ISecLstUpdRelSymGrp[]
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
