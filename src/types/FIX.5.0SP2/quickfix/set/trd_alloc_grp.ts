import { ITrdAllocGrpNoAllocs } from './trd_alloc_grp_no_allocs'

export interface ITrdAllocGrp {
  NoAllocs?: ITrdAllocGrpNoAllocs[]// [1] AllocAccount.79, AllocAcctIDSource.661 .. EncodedAllocCommissionDesc.2666
}
