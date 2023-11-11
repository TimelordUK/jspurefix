import { INestedParties2 } from './nested_parties_2'

export interface ILegPreAllocGrp {
  LegAllocAccount?: string// [1] 671 (String)
  LegIndividualAllocID?: string// [1] 672 (String)
  LegAllocQty?: number// [1] 673 (Float)
  LegAllocAcctIDSource?: string// [1] 674 (String)
  LegAllocSettlCurrency?: string// [1] 1367 (String)
  LegCustodialLotID?: string// [1] 1756 (String)
  LegVersusPurchaseDate?: Date// [1] 1757 (LocalDate)
  LegVersusPurchasePrice?: number// [1] 1758 (Float)
  LegCurrentCostBasis?: number// [1] 1759 (Float)
  NestedParties2?: INestedParties2[]// [1] ID.757, Src.758 .. Qual.2381
}
