import { IMiscFeesSubGrp } from './misc_fees_sub_grp'

export interface IMiscFeesGrp {
  UnderlyingMakeWholeAmount?: number// 42889
  MiscFeeCurr?: string// 138
  UnderlyingReturnRateValuationDateType?: number// 43073
  AllocCommissionBasis?: string// 2656
  PaymentStubRate?: number// 40875
  MiscFeeAmountDue?: number// 2217
  MiscFeesSubGrp?: IMiscFeesSubGrp[]
}
