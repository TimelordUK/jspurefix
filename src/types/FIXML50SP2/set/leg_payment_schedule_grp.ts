import { ILegPaymentScheduleRateSourceGrp } from './leg_payment_schedule_rate_source_grp'
import { ILegPaymentScheduleFixingDateBusinessCenterGrp } from './leg_payment_schedule_fixing_date_business_center_grp'
import { ILegPaymentScheduleFixingDayGrp } from './leg_payment_schedule_fixing_day_grp'
import { ILegPaymentScheduleInterimExchangeDateBusinessCenterGrp } from './leg_payment_schedule_interim_exchange_date_business_center_grp'

export interface ILegPaymentScheduleGrp {
  LegPaymentScheduleType?: number// 40375
  LegPaymentScheduleXID?: string// 41533
  LegPaymentScheduleXIDRef?: string// 41534
  LegPaymentScheduleStubType?: number// 40376
  LegPaymentScheduleStartDateUnadjusted?: Date// 40377
  LegPaymentScheduleEndDateUnadjusted?: Date// 40378
  LegPaymentSchedulePaySide?: number// 40379
  LegPaymentScheduleReceiveSide?: number// 40380
  LegPaymentScheduleNotional?: number// 40381
  LegPaymentScheduleCurrency?: string// 40382
  LegPaymentScheduleRate?: number// 40383
  LegPaymentScheduleRateMultiplier?: number// 40384
  LegPaymentScheduleRateSpread?: number// 40385
  LegPaymentScheduleRateCurrency?: string// 41535
  LegPaymentScheduleRateUnitOfMeasure?: string// 41536
  LegPaymentScheduleRateConversionFactor?: number// 41537
  LegPaymentScheduleRateSpreadType?: number// 41538
  LegPaymentScheduleRateSpreadPositionType?: number// 40386
  LegPaymentScheduleRateTreatment?: number// 40387
  LegPaymentScheduleFixedAmount?: number// 40388
  LegPaymentScheduleFixedCurrency?: string// 40389
  LegPaymentScheduleSettlPeriodPrice?: number// 41539
  LegPaymentScheduleSettlPeriodPriceCurrency?: string// 41540
  LegPaymentScheduleSettlPeriodPriceUnitOfMeasure?: string// 41541
  LegPaymentScheduleStepUnitOfMeasure?: string// 41542
  LegPaymentScheduleStepFrequencyPeriod?: number// 40390
  LegPaymentScheduleStepFrequencyUnit?: string// 40391
  LegPaymentScheduleStepOffsetValue?: number// 40392
  LegPaymentScheduleStepRate?: number// 40393
  LegPaymentScheduleStepOffsetRate?: number// 40394
  LegPaymentScheduleStepRelativeTo?: number// 40395
  LegPaymentScheduleFixingDateUnadjusted?: Date// 40396
  LegPaymentScheduleWeight?: number// 40397
  LegPaymentScheduleFixingDateRelativeTo?: number// 40398
  LegPaymentScheduleFixingDateBusinessDayConvention?: number// 40399
  LegPaymentScheduleFixingDateOffsetPeriod?: number// 40401
  LegPaymentScheduleFixingDateOffsetUnit?: string// 40402
  LegPaymentScheduleFixingDateOffsetDayType?: number// 40403
  LegPaymentScheduleFixingDayDistribution?: number// 41543
  LegPaymentScheduleFixingDayCount?: number// 41544
  LegPaymentScheduleFixingDateAdjusted?: Date// 40404
  LegPaymentScheduleFixingLagPeriod?: number// 41545
  LegPaymentScheduleFixingLagUnit?: string// 41546
  LegPaymentScheduleFixingFirstObservationDateOffsetPeriod?: number// 41547
  LegPaymentScheduleFixingFirstObservationDateOffsetUnit?: string// 41548
  LegPaymentScheduleFixingTime?: string// 40405
  LegPaymentScheduleFixingTimeBusinessCenter?: string// 40406
  LegPaymentScheduleInterimExchangePaymentDateRelativeTo?: number// 40407
  LegPaymentScheduleInterimExchangeDatesBusinessDayConvention?: number// 40408
  LegPaymentScheduleInterimExchangeDatesOffsetPeriod?: number// 40410
  LegPaymentScheduleInterimExchangeDatesOffsetUnit?: string// 40411
  LegPaymentScheduleInterimExchangeDatesOffsetDayType?: number// 40412
  LegPaymentScheduleInterimExchangeDateAdjusted?: Date// 40413
  LegPaymentScheduleRateSourceGrp?: ILegPaymentScheduleRateSourceGrp[]
  LegPaymentScheduleFixingDateBusinessCenterGrp?: ILegPaymentScheduleFixingDateBusinessCenterGrp[]
  LegPaymentScheduleFixingDayGrp?: ILegPaymentScheduleFixingDayGrp[]
  LegPaymentScheduleInterimExchangeDateBusinessCenterGrp?: ILegPaymentScheduleInterimExchangeDateBusinessCenterGrp[]
}
