import { IAllocGrpNoAllocs } from './alloc_grp_no_allocs'

export interface IAllocGrp {
  NoAllocs?: IAllocGrpNoAllocs[]// [1] AllocAccount.79, AllocAcctIDSource.661 .. TradeAllocAmtReason.1850
}
