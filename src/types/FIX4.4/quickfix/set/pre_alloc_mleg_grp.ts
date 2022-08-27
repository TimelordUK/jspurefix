import { IPreAllocMlegGrpNoAllocs } from './pre_alloc_mleg_grp_no_allocs'

export interface IPreAllocMlegGrp {
  NoAllocs?: IPreAllocMlegGrpNoAllocs[]// [1] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
}
