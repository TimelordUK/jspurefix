import { Iheader } from './set/header'
import { ISecListGrp } from './set/sec_list_grp'
import { Itrailer } from './set/trailer'

export interface ISecurityList {
  header: Iheader
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityRequestResult: number// 560
  TotNoRelatedSym?: number// 393
  LastFragment?: boolean// 893
  SecListGrp?: ISecListGrp
  trailer: Itrailer
}
