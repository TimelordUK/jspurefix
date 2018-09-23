import { INestedParties2 } from './nested_parties_2'

export interface ILegPreAllocGrp {
  LegAllocAccount?: string// 671
  LegIndividualAllocID?: string// 672
  LegAllocQty?: number// 673
  LegAllocAcctIDSource?: string// 674
  LegAllocSettlCurrency?: string// 1367
  LegCustodialLotID?: string// 1756
  LegVersusPurchaseDate?: Date// 1757
  LegVersusPurchasePrice?: number// 1758
  LegCurrentCostBasis?: number// 1759
  NestedParties2?: INestedParties2[]
}
