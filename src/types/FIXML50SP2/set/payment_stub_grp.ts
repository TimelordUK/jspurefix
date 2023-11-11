import { IPaymentStubStartDate } from './payment_stub_start_date'
import { IPaymentStubEndDate } from './payment_stub_end_date'

export interface IPaymentStubGrp {
  PaymentStubType?: number// [1] 40873 (Int)
  PaymentStubLength?: number// [1] 40874 (Int)
  PaymentStubRate?: number// [1] 40875 (Float)
  PaymentStubFixedAmount?: number// [1] 40876 (Float)
  PaymentStubFixedCurrency?: string// [1] 40877 (String)
  PaymentStubIndex?: string// [1] 40878 (String)
  PaymentStubIndexSource?: number// [1] 40879 (Int)
  PaymentStubIndexCurvePeriod?: number// [1] 40880 (Int)
  PaymentStubIndexCurveUnit?: string// [1] 40881 (String)
  PaymentStubIndexRateMultiplier?: number// [1] 40882 (Float)
  PaymentStubIndexRateSpread?: number// [1] 40883 (Float)
  PaymentStubIndexRateSpreadPositionType?: number// [1] 40884 (Int)
  PaymentStubIndexRateTreatment?: number// [1] 40885 (Int)
  PaymentStubIndexCapRate?: number// [1] 40886 (Float)
  PaymentStubIndexCapRateBuySide?: number// [1] 40887 (Int)
  PaymentStubIndexCapRateSellSide?: number// [1] 40888 (Int)
  PaymentStubIndexFloorRate?: number// [1] 40889 (Float)
  PaymentStubIndexFloorRateBuySide?: number// [1] 40890 (Int)
  PaymentStubIndexFloorRateSellSide?: number// [1] 40891 (Int)
  PaymentStubIndex2?: string// [1] 40892 (String)
  PaymentStubIndex2Source?: number// [1] 40893 (Int)
  PaymentStubIndex2CurvePeriod?: number// [1] 40894 (Int)
  PaymentStubIndex2CurveUnit?: string// [1] 40895 (String)
  PaymentStubIndex2RateMultiplier?: number// [1] 40896 (Float)
  PaymentStubIndex2RateSpread?: number// [1] 40897 (Float)
  PaymentStubIndex2RateSpreadPositionType?: number// [1] 40898 (Int)
  PaymentStubIndex2RateTreatment?: number// [1] 40899 (Int)
  PaymentStubIndex2CapRate?: number// [1] 40900 (Float)
  PaymentStubIndex2FloorRate?: number// [1] 40901 (Float)
  PaymentStubStartDate?: IPaymentStubStartDate// [1] DtUnadj.42698, BizDayCnvtn.42699 .. Dt.42704
  PaymentStubEndDate?: IPaymentStubEndDate// [2] DtUnadj.42689, BizDayCnvtn.42690 .. Dt.42695
}
