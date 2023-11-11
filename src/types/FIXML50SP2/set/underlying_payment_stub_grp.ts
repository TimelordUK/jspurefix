import { IUnderlyingPaymentStubStartDate } from './underlying_payment_stub_start_date'
import { IUnderlyingPaymentStubEndDate } from './underlying_payment_stub_end_date'

export interface IUnderlyingPaymentStubGrp {
  UnderlyingPaymentStubType?: number// [1] 40709 (Int)
  UnderlyingPaymentStubLength?: number// [1] 40710 (Int)
  UnderlyingPaymentStubRate?: number// [1] 40711 (Float)
  UnderlyingPaymentStubFixedAmount?: number// [1] 40712 (Float)
  UnderlyingPaymentStubFixedCurrency?: string// [1] 40713 (String)
  UnderlyingPaymentStubIndex?: string// [1] 40714 (String)
  UnderlyingPaymentStubIndexSource?: number// [1] 40715 (Int)
  UnderlyingPaymentStubIndexCurvePeriod?: number// [1] 40716 (Int)
  UnderlyingPaymentStubIndexCurveUnit?: string// [1] 40717 (String)
  UnderlyingPaymentStubIndexRateMultiplier?: number// [1] 40718 (Float)
  UnderlyingPaymentStubIndexRateSpread?: number// [1] 40719 (Float)
  UnderlyingPaymentStubIndexRateSpreadPositionType?: number// [1] 40720 (Int)
  UnderlyingPaymentStubIndexRateTreatment?: number// [1] 40721 (Int)
  UnderlyingPaymentStubIndexCapRate?: number// [1] 40722 (Float)
  UnderlyingPaymentStubIndexCapRateBuySide?: number// [1] 40723 (Int)
  UnderlyingPaymentStubIndexCapRateSellSide?: number// [1] 40724 (Int)
  UnderlyingPaymentStubIndexFloorRate?: number// [1] 40725 (Float)
  UnderlyingPaymentStubIndexFloorRateBuySide?: number// [1] 40726 (Int)
  UnderlyingPaymentStubIndexFloorRateSellSide?: number// [1] 40727 (Int)
  UnderlyingPaymentStubIndex2?: string// [1] 40728 (String)
  UnderlyingPaymentStubIndex2Source?: number// [1] 40729 (Int)
  UnderlyingPaymentStubIndex2CurvePeriod?: number// [1] 40730 (Int)
  UnderlyingPaymentStubIndex2CurveUnit?: string// [1] 40731 (String)
  UnderlyingPaymentStubIndex2RateMultiplier?: number// [1] 40732 (Float)
  UnderlyingPaymentStubIndex2RateSpread?: number// [1] 40733 (Float)
  UnderlyingPaymentStubIndex2RateSpreadPositionType?: number// [1] 40734 (Int)
  UnderlyingPaymentStubIndex2RateTreatment?: number// [1] 40735 (Int)
  UnderlyingPaymentStubIndex2CapRate?: number// [1] 40736 (Float)
  UnderlyingPaymentStubIndex2FloorRate?: number// [1] 40737 (Float)
  UnderlyingPaymentStubStartDate?: IUnderlyingPaymentStubStartDate// [1] DtUnadj.42993, BizDayCnvtn.42994 .. Dt.42999
  UnderlyingPaymentStubEndDate?: IUnderlyingPaymentStubEndDate// [2] DtUnadj.42984, BizDayCnvtn.42985 .. Dt.42990
}
