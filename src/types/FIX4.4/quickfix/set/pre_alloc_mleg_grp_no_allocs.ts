import { INestedParties3 } from './nested_parties_3'

export interface IPreAllocMlegGrpNoAllocs {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocSettlCurrency?: string// [3] 736 (String)
  IndividualAllocID?: string// [4] 467 (String)
  NestedParties3?: INestedParties3// [5] NoNested3PartyIDs.948, Nested3PartyID.949 .. Nested3PartySubIDType.954
  AllocQty?: number// [6] 80 (Float)
}
