import { ILegPaymentStubStartDate } from './leg_payment_stub_start_date'
import { ILegPaymentStubEndDate } from './leg_payment_stub_end_date'

export interface ILegPaymentStubGrp {
  LegPaymentStubType?: number// [1] 40419 (Int)
  LegPaymentStubLength?: number// [1] 40420 (Int)
  LegPaymentStubRate?: number// [1] 40421 (Float)
  LegPaymentStubFixedAmount?: number// [1] 40422 (Float)
  LegPaymentStubFixedCurrency?: string// [1] 40423 (String)
  LegPaymentStubIndex?: string// [1] 40424 (String)
  LegPaymentStubIndexSource?: number// [1] 40425 (Int)
  LegPaymentStubIndexCurvePeriod?: number// [1] 40426 (Int)
  LegPaymentStubIndexCurveUnit?: string// [1] 40427 (String)
  LegPaymentStubIndexRateMultiplier?: number// [1] 40428 (Float)
  LegPaymentStubIndexRateSpread?: number// [1] 40429 (Float)
  LegPaymentStubIndexRateSpreadPositionType?: number// [1] 40430 (Int)
  LegPaymentStubIndexRateTreatment?: number// [1] 40431 (Int)
  LegPaymentStubIndexCapRate?: number// [1] 40432 (Float)
  LegPaymentStubIndexCapRateBuySide?: number// [1] 40433 (Int)
  LegPaymentStubIndexCapRateSellSide?: number// [1] 40434 (Int)
  LegPaymentStubIndexFloorRate?: number// [1] 40435 (Float)
  LegPaymentStubIndexFloorRateBuySide?: number// [1] 40436 (Int)
  LegPaymentStubIndexFloorRateSellSide?: number// [1] 40437 (Int)
  LegPaymentStubIndex2?: string// [1] 40438 (String)
  LegPaymentStubIndex2Source?: number// [1] 40439 (Int)
  LegPaymentStubIndex2CurvePeriod?: number// [1] 40440 (Int)
  LegPaymentStubIndex2CurveUnit?: string// [1] 40441 (String)
  LegPaymentStubIndex2RateMultiplier?: number// [1] 40442 (Float)
  LegPaymentStubIndex2RateSpread?: number// [1] 40443 (Float)
  LegPaymentStubIndex2RateSpreadPositionType?: number// [1] 40444 (Int)
  LegPaymentStubIndex2RateTreatment?: number// [1] 40445 (Int)
  LegPaymentStubIndex2CapRate?: number// [1] 40446 (Float)
  LegPaymentStubIndex2FloorRate?: number// [1] 40447 (Float)
  LegPaymentStubStartDate?: ILegPaymentStubStartDate// [1] DtUnadj.42497, BizDayCnvtn.42498 .. Dt.42503
  LegPaymentStubEndDate?: ILegPaymentStubEndDate// [2] DtUnadj.42488, BizDayCnvtn.42489 .. Dt.42494
}
