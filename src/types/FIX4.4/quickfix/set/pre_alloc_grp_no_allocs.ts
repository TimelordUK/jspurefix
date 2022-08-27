import { INestedParties } from './nested_parties'

export interface IPreAllocGrpNoAllocs {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocSettlCurrency?: string// [3] 736 (String)
  IndividualAllocID?: string// [4] 467 (String)
  NestedParties?: INestedParties// [5] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubIDType.805
  AllocQty?: number// [6] 80 (Float)
}
