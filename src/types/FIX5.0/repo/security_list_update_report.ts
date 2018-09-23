import { IStandardHeader } from './set/standard_header'
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
  SecurityReportID?: number// 964
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityRequestResult?: number// 560
  TotNoRelatedSym?: number// 393
  ClearingBusinessDate?: Date// 715
  SecurityUpdateAction?: string// 980
  CorporateAction?: string// 292
  LastFragment?: boolean// 893
  SecLstUpdRelSymGrp?: ISecLstUpdRelSymGrp[]
  StandardTrailer: IStandardTrailer
}
