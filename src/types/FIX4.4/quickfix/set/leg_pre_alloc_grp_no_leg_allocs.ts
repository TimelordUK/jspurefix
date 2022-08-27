import { INestedParties2 } from './nested_parties_2'

export interface ILegPreAllocGrpNoLegAllocs {
  LegAllocAccount?: string// [1] 671 (String)
  LegIndividualAllocID?: string// [2] 672 (String)
  NestedParties2?: INestedParties2// [3] NoNested2PartyIDs.756, Nested2PartyID.757 .. Nested2PartySubIDType.807
  LegAllocQty?: number// [4] 673 (Float)
  LegAllocAcctIDSource?: string// [5] 674 (String)
  LegSettlCurrency?: string// [6] 675 (String)
}
