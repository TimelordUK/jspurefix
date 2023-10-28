import { IUnderlyingPaymentStubStartDate } from './underlying_payment_stub_start_date'
import { IUnderlyingPaymentStubEndDate } from './underlying_payment_stub_end_date'

export interface IUnderlyingPaymentStubGrpNoUnderlyingPaymentStubs {
  UnderlyingPaymentStubType?: number// [1] 40709 (Int)
  UnderlyingPaymentStubLength?: number// [2] 40710 (Int)
  UnderlyingPaymentStubStartDate?: IUnderlyingPaymentStubStartDate// [3] UnderlyingPaymentStubStartDateUnadjusted.42993, UnderlyingPaymentStubStartDateBusinessDayConvention.42994 .. UnderlyingPaymentStubStartDateAdjusted.42999
  UnderlyingPaymentStubEndDate?: IUnderlyingPaymentStubEndDate// [4] UnderlyingPaymentStubEndDateUnadjusted.42984, UnderlyingPaymentStubEndDateBusinessDayConvention.42985 .. UnderlyingPaymentStubEndDateAdjusted.42990
  UnderlyingPaymentStubRate?: number// [5] 40711 (Float)
  UnderlyingPaymentStubFixedAmount?: number// [6] 40712 (Float)
  UnderlyingPaymentStubFixedCurrency?: string// [7] 40713 (String)
  UnderlyingPaymentStubIndex?: string// [8] 40714 (String)
  UnderlyingPaymentStubIndexSource?: number// [9] 40715 (Int)
  UnderlyingPaymentStubIndexCurvePeriod?: number// [10] 40716 (Int)
  UnderlyingPaymentStubIndexCurveUnit?: string// [11] 40717 (String)
  UnderlyingPaymentStubIndexRateMultiplier?: number// [12] 40718 (Float)
  UnderlyingPaymentStubIndexRateSpread?: number// [13] 40719 (Float)
  UnderlyingPaymentStubIndexRateSpreadPositionType?: number// [14] 40720 (Int)
  UnderlyingPaymentStubIndexRateTreatment?: number// [15] 40721 (Int)
  UnderlyingPaymentStubIndexCapRate?: number// [16] 40722 (Float)
  UnderlyingPaymentStubIndexCapRateBuySide?: number// [17] 40723 (Int)
  UnderlyingPaymentStubIndexCapRateSellSide?: number// [18] 40724 (Int)
  UnderlyingPaymentStubIndexFloorRate?: number// [19] 40725 (Float)
  UnderlyingPaymentStubIndexFloorRateBuySide?: number// [20] 40726 (Int)
  UnderlyingPaymentStubIndexFloorRateSellSide?: number// [21] 40727 (Int)
  UnderlyingPaymentStubIndex2?: string// [22] 40728 (String)
  UnderlyingPaymentStubIndex2Source?: number// [23] 40729 (Int)
  UnderlyingPaymentStubIndex2CurvePeriod?: number// [24] 40730 (Int)
  UnderlyingPaymentStubIndex2CurveUnit?: string// [25] 40731 (String)
  UnderlyingPaymentStubIndex2RateMultiplier?: number// [26] 40732 (Float)
  UnderlyingPaymentStubIndex2RateSpread?: number// [27] 40733 (Float)
  UnderlyingPaymentStubIndex2RateSpreadPositionType?: number// [28] 40734 (Int)
  UnderlyingPaymentStubIndex2RateTreatment?: number// [29] 40735 (Int)
  UnderlyingPaymentStubIndex2CapRate?: number// [30] 40736 (Float)
  UnderlyingPaymentStubIndex2FloorRate?: number// [31] 40737 (Float)
}
