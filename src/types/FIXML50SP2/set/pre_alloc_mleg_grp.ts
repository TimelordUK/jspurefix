import { INestedParties3 } from './nested_parties_3'

export interface IPreAllocMlegGrp {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [1] 661 (Int)
  AllocSettlCurrency?: string// [1] 736 (String)
  IndividualAllocID?: string// [1] 467 (String)
  AllocQty?: number// [1] 80 (Float)
  CustodialLotID?: string// [1] 1752 (String)
  VersusPurchaseDate?: Date// [1] 1753 (LocalDate)
  VersusPurchasePrice?: number// [1] 1754 (Float)
  CurrentCostBasis?: number// [1] 1755 (Float)
  NestedParties3?: INestedParties3[]// [1] ID.949, Src.950 .. Qual.2382
}
