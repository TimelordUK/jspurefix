import { IUnderlyingPaymentStubStartDate } from './underlying_payment_stub_start_date'
import { IUnderlyingPaymentStubEndDate } from './underlying_payment_stub_end_date'

export interface IUnderlyingPaymentStubGrp {
  UnderlyingPaymentStubType?: number// 40709
  UnderlyingPaymentStubLength?: number// 40710
  UnderlyingPaymentStubRate?: number// 40711
  UnderlyingPaymentStubFixedAmount?: number// 40712
  UnderlyingPaymentStubFixedCurrency?: string// 40713
  UnderlyingPaymentStubIndex?: string// 40714
  UnderlyingPaymentStubIndexSource?: number// 40715
  UnderlyingPaymentStubIndexCurvePeriod?: number// 40716
  UnderlyingPaymentStubIndexCurveUnit?: string// 40717
  UnderlyingPaymentStubIndexRateMultiplier?: number// 40718
  UnderlyingPaymentStubIndexRateSpread?: number// 40719
  UnderlyingPaymentStubIndexRateSpreadPositionType?: number// 40720
  UnderlyingPaymentStubIndexRateTreatment?: number// 40721
  UnderlyingPaymentStubIndexCapRate?: number// 40722
  UnderlyingPaymentStubIndexCapRateBuySide?: number// 40723
  UnderlyingPaymentStubIndexCapRateSellSide?: number// 40724
  UnderlyingPaymentStubIndexFloorRate?: number// 40725
  UnderlyingPaymentStubIndexFloorRateBuySide?: number// 40726
  UnderlyingPaymentStubIndexFloorRateSellSide?: number// 40727
  UnderlyingPaymentStubIndex2?: string// 40728
  UnderlyingPaymentStubIndex2Source?: number// 40729
  UnderlyingPaymentStubIndex2CurvePeriod?: number// 40730
  UnderlyingPaymentStubIndex2CurveUnit?: string// 40731
  UnderlyingPaymentStubIndex2RateMultiplier?: number// 40732
  UnderlyingPaymentStubIndex2RateSpread?: number// 40733
  UnderlyingPaymentStubIndex2RateSpreadPositionType?: number// 40734
  UnderlyingPaymentStubIndex2RateTreatment?: number// 40735
  UnderlyingPaymentStubIndex2CapRate?: number// 40736
  UnderlyingPaymentStubIndex2FloorRate?: number// 40737
  UnderlyingPaymentStubStartDate?: IUnderlyingPaymentStubStartDate
  UnderlyingPaymentStubEndDate?: IUnderlyingPaymentStubEndDate
}
