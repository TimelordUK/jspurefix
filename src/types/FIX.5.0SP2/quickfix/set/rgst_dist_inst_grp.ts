import { IRgstDistInstGrpNoDistribInsts } from './rgst_dist_inst_grp_no_distrib_insts'

export interface IRgstDistInstGrp {
  NoDistribInsts?: IRgstDistInstGrpNoDistribInsts[]// [1] DistribPaymentMethod.477, DistribPercentage.512 .. CashDistribAgentAcctName.502
}
