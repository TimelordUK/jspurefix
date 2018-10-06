import { INestedParties } from './nested_parties'

export interface IApplIDRequestGrp {
  RefApplID?: string// 1355
  ApplBegSeqNum?: number// 1182
  ApplEndSeqNum?: number// 1183
  NestedParties?: INestedParties[]
  RefApplReqID?: string// 1433
}
