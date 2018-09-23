import { ISecListGrp } from './set/sec_list_grp'

export interface ISecurityList {
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityRequestResult: number// 560
  TotNoRelatedSym?: number// 393
  LastFragment?: boolean// 893
  SecListGrp?: ISecListGrp
}
