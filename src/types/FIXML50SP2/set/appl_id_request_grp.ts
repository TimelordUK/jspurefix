import { INestedParties } from './nested_parties'

export interface IApplIDRequestGrp {
  RefApplID?: string// 1355
  RefApplReqID?: string// 1433
  ApplBegSeqNum?: number// 1182
  ApplEndSeqNum?: number// 1183
  NestedParties?: INestedParties[]
}
