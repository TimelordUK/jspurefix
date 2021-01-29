import { INestedParties2 } from './nested_parties_2'

export interface ILegPreAllocGrpNoLegAllocs {
  LegAllocAccount?: string// 671
  LegIndividualAllocID?: string// 672
  NestedParties2?: INestedParties2
  LegAllocQty?: number// 673
  LegAllocAcctIDSource?: string// 674
  LegSettlCurrency?: string// 675
}
