import { IExecAllocGrpNoExecs } from './exec_alloc_grp_no_execs'

export interface IExecAllocGrp {
  NoExecs?: IExecAllocGrpNoExecs[]// [1] LastQty.32, ExecID.17 .. LastCapacity.29
}
