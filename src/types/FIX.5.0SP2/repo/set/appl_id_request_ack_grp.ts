import { INestedParties } from './nested_parties'

export interface IApplIDRequestAckGrp {
  RefApplID?: string// 1355
  ApplBegSeqNum?: number// 1182
  ApplEndSeqNum?: number// 1183
  RefApplLastSeqNum?: number// 1357
  ApplResponseError?: number// 1354
  NestedParties?: INestedParties[]
  RefApplReqID?: string// 1433
}
