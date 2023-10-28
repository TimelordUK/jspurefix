import { INestedParties3 } from './nested_parties_3'

export interface IPreAllocMlegGrpNoAllocs {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocSettlCurrency?: string// [3] 736 (String)
  AllocSettlCurrencyCodeSource?: string// [4] 2927 (String)
  IndividualAllocID?: string// [5] 467 (String)
  AllocLegRefID?: string// [6] 2727 (String)
  NestedParties3?: INestedParties3// [7] NoNested3PartyIDs.948, Nested3PartyID.949 .. Nested3PartySubIDType.954
  AllocQty?: number// [8] 80 (Float)
  CustodialLotID?: string// [9] 1752 (String)
  VersusPurchaseDate?: Date// [10] 1753 (LocalDate)
  VersusPurchasePrice?: number// [11] 1754 (Float)
  CurrentCostBasis?: number// [12] 1755 (Float)
}
