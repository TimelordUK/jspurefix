import { INestedParties } from './nested_parties'

export interface IApplIDRequestGrp {
  RefApplID?: string// [1] 1355 (String)
  ApplBegSeqNum?: number// [2] 1182 (Int)
  ApplEndSeqNum?: number// [3] 1183 (Int)
  NestedParties?: INestedParties[]// [4] NestedPartyID.524, NestedPartyIDSource.525 .. NestedPartySubIDType.805
  RefApplReqID?: string// [5] 1433 (String)
}
