import { INestedParties } from './nested_parties'

export interface IPreAllocGrp {
  LegAccount?: string// 2680
  AllocAcctIDSource?: number// 661
  LegAllocSettlCurrency?: string// 1367
  LegIndividualAllocID?: string// 672
  RelatedTradeQuantity?: number// 1860
  LegCustodialLotID?: string// 1756
  LegVersusPurchaseDate?: Date// 1757
  LegVersusPurchasePrice?: number// 1758
  LegCurrentCostBasis?: number// 1759
  NestedParties?: INestedParties[]
}
