import { IStandardHeader } from './set/standard_header'
import { ISecListGrp } from './set/sec_list_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityList {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityRequestResult: number// 560
  TotNoRelatedSym?: number// 393
  LastFragment?: boolean// 893
  SecListGrp?: ISecListGrp
  StandardTrailer: IStandardTrailer
}
