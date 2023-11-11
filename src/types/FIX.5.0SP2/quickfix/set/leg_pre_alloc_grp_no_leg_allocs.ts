import { INestedParties2 } from './nested_parties_2'

export interface ILegPreAllocGrpNoLegAllocs {
  LegAllocAccount?: string// [1] 671 (String)
  LegIndividualAllocID?: string// [2] 672 (String)
  NestedParties2?: INestedParties2// [3] NoNested2PartyIDs.756, Nested2PartyID.757 .. Nested2PartySubIDType.807
  LegAllocQty?: number// [4] 673 (Float)
  LegAllocAcctIDSource?: number// [5] 674 (Int)
  LegAllocSettlCurrency?: string// [6] 1367 (String)
  LegAllocSettlCurrencyCodeSource?: string// [7] 2928 (String)
  LegCustodialLotID?: string// [8] 1756 (String)
  LegVersusPurchaseDate?: Date// [9] 1757 (LocalDate)
  LegVersusPurchasePrice?: number// [10] 1758 (Float)
  LegCurrentCostBasis?: number// [11] 1759 (Float)
}
