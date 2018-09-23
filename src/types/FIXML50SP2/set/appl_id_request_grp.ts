import { INestedParties } from './nested_parties'

export interface IApplIDRequestGrp {
  RefApplID?: string// 1355
  EntitlementRefID?: string// 1885
  ApplBegSeqNum?: string// 1182
  ApplEndSeqNum?: string// 1183
  NestedParties?: INestedParties[]
}
