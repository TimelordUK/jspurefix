import { ILegPaymentStubStartDate } from './leg_payment_stub_start_date'
import { ILegPaymentStubEndDate } from './leg_payment_stub_end_date'

export interface ILegPaymentStubGrp {
  LegPaymentStubType?: number// 40419
  LegPaymentStubLength?: number// 40420
  LegPaymentStubRate?: number// 40421
  LegPaymentStubFixedAmount?: number// 40422
  LegPaymentStubFixedCurrency?: string// 40423
  LegPaymentStubIndex?: string// 40424
  LegPaymentStubIndexSource?: number// 40425
  LegPaymentStubIndexCurvePeriod?: number// 40426
  LegPaymentStubIndexCurveUnit?: string// 40427
  LegPaymentStubIndexRateMultiplier?: number// 40428
  LegPaymentStubIndexRateSpread?: number// 40429
  LegPaymentStubIndexRateSpreadPositionType?: number// 40430
  LegPaymentStubIndexRateTreatment?: number// 40431
  LegPaymentStubIndexCapRate?: number// 40432
  LegPaymentStubIndexCapRateBuySide?: number// 40433
  LegPaymentStubIndexCapRateSellSide?: number// 40434
  LegPaymentStubIndexFloorRate?: number// 40435
  LegPaymentStubIndexFloorRateBuySide?: number// 40436
  LegPaymentStubIndexFloorRateSellSide?: number// 40437
  LegPaymentStubIndex2?: string// 40438
  LegPaymentStubIndex2Source?: number// 40439
  LegPaymentStubIndex2CurvePeriod?: number// 40440
  LegPaymentStubIndex2CurveUnit?: string// 40441
  LegPaymentStubIndex2RateMultiplier?: number// 40442
  LegPaymentStubIndex2RateSpread?: number// 40443
  LegPaymentStubIndex2RateSpreadPositionType?: number// 40444
  LegPaymentStubIndex2RateTreatment?: number// 40445
  LegPaymentStubIndex2CapRate?: number// 40446
  LegPaymentStubIndex2FloorRate?: number// 40447
  LegPaymentStubStartDate?: ILegPaymentStubStartDate
  LegPaymentStubEndDate?: ILegPaymentStubEndDate
}
