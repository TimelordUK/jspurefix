import { IPaymentStubStartDate } from './payment_stub_start_date'
import { IPaymentStubEndDate } from './payment_stub_end_date'

export interface IPaymentStubGrpNoPaymentStubs {
  PaymentStubType?: number// [1] 40873 (Int)
  PaymentStubLength?: number// [2] 40874 (Int)
  PaymentStubStartDate?: IPaymentStubStartDate// [3] PaymentStubStartDateUnadjusted.42698, PaymentStubStartDateBusinessDayConvention.42699 .. PaymentStubStartDateAdjusted.42704
  PaymentStubEndDate?: IPaymentStubEndDate// [4] PaymentStubEndDateUnadjusted.42689, PaymentStubEndDateBusinessDayConvention.42690 .. PaymentStubEndDateAdjusted.42695
  PaymentStubRate?: number// [5] 40875 (Float)
  PaymentStubFixedAmount?: number// [6] 40876 (Float)
  PaymentStubFixedCurrency?: string// [7] 40877 (String)
  PaymentStubIndex?: string// [8] 40878 (String)
  PaymentStubIndexSource?: number// [9] 40879 (Int)
  PaymentStubIndexCurvePeriod?: number// [10] 40880 (Int)
  PaymentStubIndexCurveUnit?: string// [11] 40881 (String)
  PaymentStubIndexRateMultiplier?: number// [12] 40882 (Float)
  PaymentStubIndexRateSpread?: number// [13] 40883 (Float)
  PaymentStubIndexRateSpreadPositionType?: number// [14] 40884 (Int)
  PaymentStubIndexRateTreatment?: number// [15] 40885 (Int)
  PaymentStubIndexCapRate?: number// [16] 40886 (Float)
  PaymentStubIndexCapRateBuySide?: number// [17] 40887 (Int)
  PaymentStubIndexCapRateSellSide?: number// [18] 40888 (Int)
  PaymentStubIndexFloorRate?: number// [19] 40889 (Float)
  PaymentStubIndexFloorRateBuySide?: number// [20] 40890 (Int)
  PaymentStubIndexFloorRateSellSide?: number// [21] 40891 (Int)
  PaymentStubIndex2?: string// [22] 40892 (String)
  PaymentStubIndex2Source?: number// [23] 40893 (Int)
  PaymentStubIndex2CurvePeriod?: number// [24] 40894 (Int)
  PaymentStubIndex2CurveUnit?: string// [25] 40895 (String)
  PaymentStubIndex2RateMultiplier?: number// [26] 40896 (Float)
  PaymentStubIndex2RateSpread?: number// [27] 40897 (Float)
  PaymentStubIndex2RateSpreadPositionType?: number// [28] 40898 (Int)
  PaymentStubIndex2RateTreatment?: number// [29] 40899 (Int)
  PaymentStubIndex2CapRate?: number// [30] 40900 (Float)
  PaymentStubIndex2FloorRate?: number// [31] 40901 (Float)
}
