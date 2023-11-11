import { INestedParties } from './nested_parties'

export interface IApplIDRequestGrpNoApplIDs {
  RefApplID?: string// [1] 1355 (String)
  RefApplReqID?: string// [2] 1433 (String)
  ApplBegSeqNum?: number// [3] 1182 (Int)
  ApplEndSeqNum?: number// [4] 1183 (Int)
  NestedParties?: INestedParties// [5] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubIDType.805
}
