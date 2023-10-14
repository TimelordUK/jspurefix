import { INestedParties } from './nested_parties'

export interface IPreAllocGrp {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocSettlCurrency?: string// [3] 736 (String)
  IndividualAllocID?: string// [4] 467 (String)
  NestedParties?: INestedParties[]// [5] NestedPartyID.524, NestedPartyIDSource.525 .. NestedPartySubIDType.805
  AllocQty?: number// [6] 80 (Float)
}
