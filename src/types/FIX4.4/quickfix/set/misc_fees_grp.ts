import { IMiscFeesGrpNoMiscFees } from './misc_fees_grp_no_misc_fees'

export interface IMiscFeesGrp {
  NoMiscFees?: IMiscFeesGrpNoMiscFees[]// [1] MiscFeeAmt.137, MiscFeeCurr.138 .. MiscFeeBasis.891
}
