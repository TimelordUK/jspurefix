import { INestedParties2 } from './nested_parties_2'

export interface ILegPreAllocGrp {
  LegAllocAccount?: string// 671
  LegIndividualAllocID?: string// 672
  NestedParties2?: INestedParties2[]
  LegAllocQty?: number// 673
  LegAllocAcctIDSource?: string// 674
  LegAllocSettlCurrency?: string// 1367
}
