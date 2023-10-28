import { INestedParties } from './nested_parties'

export interface IApplIDRequestAckGrpNoApplIDs {
  RefApplID?: string// [1] 1355 (String)
  RefApplReqID?: string// [2] 1433 (String)
  ApplBegSeqNum?: number// [3] 1182 (Int)
  ApplEndSeqNum?: number// [4] 1183 (Int)
  RefApplLastSeqNum?: number// [5] 1357 (Int)
  ApplResponseError?: number// [6] 1354 (Int)
  NestedParties?: INestedParties// [7] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubIDType.805
}
