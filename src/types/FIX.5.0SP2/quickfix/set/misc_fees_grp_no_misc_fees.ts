import { IMiscFeesSubGrp } from './misc_fees_sub_grp'

export interface IMiscFeesGrpNoMiscFees {
  MiscFeeAmt?: number// [1] 137 (Float)
  MiscFeeCurr?: string// [2] 138 (String)
  MiscFeeType?: string// [3] 139 (String)
  MiscFeeQualifier?: number// [4] 2712 (Int)
  MiscFeesSubGrp?: IMiscFeesSubGrp// [5] NoMiscFeeSubTypes.2633, MiscFeeSubType.2634 .. EncodedMiscFeeSubTypeDesc.2638
  MiscFeeBasis?: number// [6] 891 (Int)
  MiscFeeRate?: number// [7] 2216 (Float)
  MiscFeeAmountDue?: number// [8] 2217 (Float)
  MiscFeeDesc?: string// [9] 2713 (String)
}
