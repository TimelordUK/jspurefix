import { INestedParties } from './nested_parties'

export interface IApplIDRequestAckGrp {
  RefApplID?: string// [1] 1355 (String)
  ApplBegSeqNum?: number// [2] 1182 (Int)
  ApplEndSeqNum?: number// [3] 1183 (Int)
  RefApplLastSeqNum?: number// [4] 1357 (Int)
  ApplResponseError?: number// [5] 1354 (Int)
  NestedParties?: INestedParties[]// [6] NestedPartyID.524, NestedPartyIDSource.525 .. NestedPartySubIDType.805
  RefApplReqID?: string// [7] 1433 (String)
}
