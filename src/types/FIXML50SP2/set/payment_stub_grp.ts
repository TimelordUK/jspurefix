import { IPaymentStubStartDate } from './payment_stub_start_date'
import { IPaymentStubEndDate } from './payment_stub_end_date'

export interface IPaymentStubGrp {
  PaymentStubType?: number// 40873
  PaymentStubLength?: number// 40874
  PaymentStubRate?: number// 40875
  PaymentStubFixedAmount?: number// 40876
  PaymentStubFixedCurrency?: string// 40877
  PaymentStubIndex?: string// 40878
  PaymentStubIndexSource?: number// 40879
  PaymentStubIndexCurvePeriod?: number// 40880
  PaymentStubIndexCurveUnit?: string// 40881
  PaymentStubIndexRateMultiplier?: number// 40882
  PaymentStubIndexRateSpread?: number// 40883
  PaymentStubIndexRateSpreadPositionType?: number// 40884
  PaymentStubIndexRateTreatment?: number// 40885
  PaymentStubIndexCapRate?: number// 40886
  PaymentStubIndexCapRateBuySide?: number// 40887
  PaymentStubIndexCapRateSellSide?: number// 40888
  PaymentStubIndexFloorRate?: number// 40889
  PaymentStubIndexFloorRateBuySide?: number// 40890
  PaymentStubIndexFloorRateSellSide?: number// 40891
  PaymentStubIndex2?: string// 40892
  PaymentStubIndex2Source?: number// 40893
  PaymentStubIndex2CurvePeriod?: number// 40894
  PaymentStubIndex2CurveUnit?: string// 40895
  PaymentStubIndex2RateMultiplier?: number// 40896
  PaymentStubIndex2RateSpread?: number// 40897
  PaymentStubIndex2RateSpreadPositionType?: number// 40898
  PaymentStubIndex2RateTreatment?: number// 40899
  PaymentStubIndex2CapRate?: number// 40900
  PaymentStubIndex2FloorRate?: number// 40901
  PaymentStubStartDate?: IPaymentStubStartDate
  PaymentStubEndDate?: IPaymentStubEndDate
}
