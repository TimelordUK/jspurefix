import { ILegPaymentStubStartDate } from './leg_payment_stub_start_date'
import { ILegPaymentStubEndDate } from './leg_payment_stub_end_date'

export interface ILegPaymentStubGrpNoLegPaymentStubs {
  LegPaymentStubType?: number// [1] 40419 (Int)
  LegPaymentStubLength?: number// [2] 40420 (Int)
  LegPaymentStubStartDate?: ILegPaymentStubStartDate// [3] LegPaymentStubStartDateUnadjusted.42497, LegPaymentStubStartDateBusinessDayConvention.42498 .. LegPaymentStubStartDateAdjusted.42503
  LegPaymentStubEndDate?: ILegPaymentStubEndDate// [4] LegPaymentStubEndDateUnadjusted.42488, LegPaymentStubEndDateBusinessDayConvention.42489 .. LegPaymentStubEndDateAdjusted.42494
  LegPaymentStubRate?: number// [5] 40421 (Float)
  LegPaymentStubFixedAmount?: number// [6] 40422 (Float)
  LegPaymentStubFixedCurrency?: string// [7] 40423 (String)
  LegPaymentStubIndex?: string// [8] 40424 (String)
  LegPaymentStubIndexSource?: number// [9] 40425 (Int)
  LegPaymentStubIndexCurvePeriod?: number// [10] 40426 (Int)
  LegPaymentStubIndexCurveUnit?: string// [11] 40427 (String)
  LegPaymentStubIndexRateMultiplier?: number// [12] 40428 (Float)
  LegPaymentStubIndexRateSpread?: number// [13] 40429 (Float)
  LegPaymentStubIndexRateSpreadPositionType?: number// [14] 40430 (Int)
  LegPaymentStubIndexRateTreatment?: number// [15] 40431 (Int)
  LegPaymentStubIndexCapRate?: number// [16] 40432 (Float)
  LegPaymentStubIndexCapRateBuySide?: number// [17] 40433 (Int)
  LegPaymentStubIndexCapRateSellSide?: number// [18] 40434 (Int)
  LegPaymentStubIndexFloorRate?: number// [19] 40435 (Float)
  LegPaymentStubIndexFloorRateBuySide?: number// [20] 40436 (Int)
  LegPaymentStubIndexFloorRateSellSide?: number// [21] 40437 (Int)
  LegPaymentStubIndex2?: string// [22] 40438 (String)
  LegPaymentStubIndex2Source?: number// [23] 40439 (Int)
  LegPaymentStubIndex2CurvePeriod?: number// [24] 40440 (Int)
  LegPaymentStubIndex2CurveUnit?: string// [25] 40441 (String)
  LegPaymentStubIndex2RateMultiplier?: number// [26] 40442 (Float)
  LegPaymentStubIndex2RateSpread?: number// [27] 40443 (Float)
  LegPaymentStubIndex2RateSpreadPositionType?: number// [28] 40444 (Int)
  LegPaymentStubIndex2RateTreatment?: number// [29] 40445 (Int)
  LegPaymentStubIndex2CapRate?: number// [30] 40446 (Float)
  LegPaymentStubIndex2FloorRate?: number// [31] 40447 (Float)
}
