import { INestedParties } from './nested_parties'

export interface IPreAllocGrpNoAllocs {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocSettlCurrency?: string// [3] 736 (String)
  AllocSettlCurrencyCodeSource?: string// [4] 2927 (String)
  IndividualAllocID?: string// [5] 467 (String)
  AllocLegRefID?: string// [6] 2727 (String)
  NestedParties?: INestedParties// [7] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubIDType.805
  AllocHandlInst?: number// [8] 209 (Int)
  AllocQty?: number// [9] 80 (Float)
  CustodialLotID?: string// [10] 1752 (String)
  VersusPurchaseDate?: Date// [11] 1753 (LocalDate)
  VersusPurchasePrice?: number// [12] 1754 (Float)
  CurrentCostBasis?: number// [13] 1755 (Float)
}
