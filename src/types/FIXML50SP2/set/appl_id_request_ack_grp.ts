import { INestedParties } from './nested_parties'

export interface IApplIDRequestAckGrp {
  RefApplID?: string// 1355
  EntitlementRefID?: string// 1885
  ApplBegSeqNum?: string// 1182
  ApplEndSeqNum?: string// 1183
  RefApplLastSeqNum?: string// 1357
  ApplResponseError?: number// 1354
  NestedParties?: INestedParties[]
}
