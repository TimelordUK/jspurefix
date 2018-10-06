import { INestedParties3 } from './nested_parties_3'

export interface IPreAllocMlegGrp {
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  AllocSettlCurrency?: string// 736
  IndividualAllocID?: string// 467
  AllocQty?: number// 80
  CustodialLotID?: string// 1752
  VersusPurchaseDate?: Date// 1753
  VersusPurchasePrice?: number// 1754
  CurrentCostBasis?: number// 1755
  NestedParties3?: INestedParties3[]
}
