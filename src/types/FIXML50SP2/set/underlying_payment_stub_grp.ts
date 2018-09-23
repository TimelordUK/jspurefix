import { IUnderlyingPaymentStubStartDate } from './underlying_payment_stub_start_date'
import { IUnderlyingPaymentStubEndDate } from './underlying_payment_stub_end_date'

export interface IUnderlyingPaymentStubGrp {
  UnderlyingReturnRateValuationDateType?: number// 43073
  PaymentStubLength?: number// 40874
  PaymentStubRate?: number// 40875
  UnderlyingPaymentStreamTotalFixedAmount?: number// 41905
  PaymentStubFixedCurrency?: string// 40877
  UnderlyingPaymentStreamCompoundingRateIndex?: string// 42923
  PaymentStubIndexSource?: number// 40879
  UnderlyingPaymentStreamCompoundingRateIndexCurvePeriod?: number// 42924
  UnderlyingPaymentStreamCompoundingRateIndexCurveUnit?: string// 42925
  UnderlyingPaymentStreamCompoundingRateMultiplier?: string// 42926
  UnderlyingPaymentStreamCompoundingRateSpread?: string// 42927
  UnderlyingPaymentStreamCompoundingRateSpreadPositionType?: number// 42928
  UnderlyingPaymentStreamCompoundingRateTreatment?: number// 42929
  UnderlyingPaymentStreamCompoundingCapRate?: number// 42930
  UnderlyingPaymentStreamCompoundingCapRateBuySide?: number// 42931
  UnderlyingPaymentStreamCompoundingCapRateSellSide?: number// 42932
  UnderlyingPaymentStreamCompoundingFloorRate?: number// 42933
  UnderlyingPaymentStreamCompoundingFloorRateBuySide?: number// 42934
  UnderlyingPaymentStreamCompoundingFloorRateSellSide?: number// 42935
  PaymentStubIndex2?: string// 40892
  PaymentStubIndex2Source?: number// 40893
  UnderlyingPaymentStreamRateIndex2CurvePeriod?: number// 41912
  UnderlyingPaymentStreamRateIndex2CurveUnit?: string// 41911
  PaymentStubIndex2RateMultiplier?: string// 40896
  PaymentStubIndex2RateSpread?: string// 40897
  PaymentStubIndex2RateSpreadPositionType?: number// 40898
  PaymentStubIndex2RateTreatment?: number// 40899
  PaymentStubIndex2CapRate?: number// 40900
  PaymentStubIndex2FloorRate?: number// 40901
  UnderlyingPaymentStubStartDate?: IUnderlyingPaymentStubStartDate
  UnderlyingPaymentStubEndDate?: IUnderlyingPaymentStubEndDate
}
