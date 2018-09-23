import { IStandardHeader } from './set/standard_header'
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
  StandardHeader: IStandardHeader
  SecurityReportID?: number// 964
  ClearingBusinessDate?: Date// 715
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityRequestResult?: number// 560
  TotNoRelatedSym?: number// 393
  LastFragment?: boolean// 893
  SecListGrp?: ISecListGrp[]
  StandardTrailer: IStandardTrailer
}
