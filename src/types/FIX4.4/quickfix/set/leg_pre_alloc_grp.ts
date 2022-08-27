import { ILegPreAllocGrpNoLegAllocs } from './leg_pre_alloc_grp_no_leg_allocs'

export interface ILegPreAllocGrp {
  NoLegAllocs?: ILegPreAllocGrpNoLegAllocs[]// [1] LegAllocAccount.671, LegIndividualAllocID.672 .. LegSettlCurrency.675
}
