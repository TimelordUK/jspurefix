import { IMiscFeesSubGrp } from './misc_fees_sub_grp'

export interface IMiscFeesGrp {
  MiscFeeAmt?: number// 137
  MiscFeeCurr?: string// 138
  MiscFeeType?: string// 139
  MiscFeeBasis?: number// 891
  MiscFeeRate?: number// 2216
  MiscFeeAmountDue?: number// 2217
  MiscFeesSubGrp?: IMiscFeesSubGrp[]
}
