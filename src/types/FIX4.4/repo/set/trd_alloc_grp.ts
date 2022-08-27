import { INestedParties2 } from './nested_parties_2'

export interface ITrdAllocGrp {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocSettlCurrency?: string// [3] 736 (String)
  IndividualAllocID?: string// [4] 467 (String)
  NestedParties2?: INestedParties2[]// [5] Nested2PartyID.757, Nested2PartyIDSource.758 .. Nested2PartySubIDType.807
  AllocQty?: number// [6] 80 (Float)
}
