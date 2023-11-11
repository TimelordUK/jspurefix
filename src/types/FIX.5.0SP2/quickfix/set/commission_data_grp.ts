import { ICommissionDataGrpNoCommissions } from './commission_data_grp_no_commissions'

export interface ICommissionDataGrp {
  NoCommissions?: ICommissionDataGrpNoCommissions[]// [1] CommissionAmount.2640, CommissionAmountType.2641 .. EncodedCommissionDesc.2652
}
