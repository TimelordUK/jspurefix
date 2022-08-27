import { IAllocAckGrpNoAllocs } from './alloc_ack_grp_no_allocs'

export interface IAllocAckGrp {
  NoAllocs?: IAllocAckGrpNoAllocs[]// [1] AllocAccount.79, AllocAcctIDSource.661 .. EncodedAllocText.361
}
