import { IMiscFeesSubGrp } from './misc_fees_sub_grp'

export interface IMiscFeesGrp {
  MiscFeeAmt?: number// [1] 137 (Float)
  MiscFeeCurr?: string// [1] 138 (String)
  MiscFeeType?: string// [1] 139 (String)
  MiscFeeBasis?: number// [1] 891 (Int)
  MiscFeeRate?: number// [1] 2216 (Float)
  MiscFeeAmountDue?: number// [1] 2217 (Float)
  MiscFeesSubGrp?: IMiscFeesSubGrp[]// [1] Typ.2634, Amt.2635 .. EncDesc.2638
}
