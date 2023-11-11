import { IAllocCommissionDataGrpNoAllocCommissions } from './alloc_commission_data_grp_no_alloc_commissions'

export interface IAllocCommissionDataGrp {
  NoAllocCommissions?: IAllocCommissionDataGrpNoAllocCommissions[]// [1] AllocCommissionAmount.2654, AllocCommissionAmountType.2655 .. EncodedAllocCommissionDesc.2666
}
