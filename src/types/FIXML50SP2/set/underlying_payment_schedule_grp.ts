import { IUnderlyingPaymentScheduleRateSourceGrp } from './underlying_payment_schedule_rate_source_grp'
import { IUnderlyingPaymentScheduleFixingDateBusinessCenterGrp } from './underlying_payment_schedule_fixing_date_business_center_grp'
import { IUnderlyingPaymentScheduleFixingDayGrp } from './underlying_payment_schedule_fixing_day_grp'
import { IUnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp } from './underlying_payment_schedule_interim_exchange_date_business_center_grp'

export interface IUnderlyingPaymentScheduleGrp {
  UnderlyingPaymentScheduleType?: number// 40665
  UnderlyingPaymentScheduleXID?: string// 41881
  UnderlyingPaymentScheduleXIDRef?: string// 41882
  UnderlyingPaymentScheduleStubType?: number// 40666
  UnderlyingPaymentScheduleStartDateUnadjusted?: Date// 40667
  UnderlyingPaymentScheduleEndDateUnadjusted?: Date// 40668
  UnderlyingPaymentSchedulePaySide?: number// 40669
  UnderlyingPaymentScheduleReceiveSide?: number// 40670
  UnderlyingPaymentScheduleNotional?: number// 40671
  UnderlyingPaymentScheduleCurrency?: string// 40672
  UnderlyingPaymentScheduleRate?: number// 40673
  UnderlyingPaymentScheduleRateMultiplier?: number// 40674
  UnderlyingPaymentScheduleRateSpread?: number// 40675
  UnderlyingPaymentScheduleRateCurrency?: string// 41883
  UnderlyingPaymentScheduleRateUnitOfMeasure?: string// 41884
  UnderlyingPaymentScheduleRateConversionFactor?: number// 41885
  UnderlyingPaymentScheduleRateSpreadType?: number// 41886
  UnderlyingPaymentScheduleRateSpreadPositionType?: number// 40676
  UnderlyingPaymentScheduleRateTreatment?: number// 40677
  UnderlyingPaymentScheduleFixedAmount?: number// 40678
  UnderlyingPaymentScheduleFixedCurrency?: string// 40679
  UnderlyingPaymentScheduleSettlPeriodPrice?: number// 41887
  UnderlyingPaymentScheduleSettlPeriodPriceCurrency?: string// 41888
  UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure?: string// 41889
  UnderlyingPaymentScheduleStepUnitOfMeasure?: string// 41890
  UnderlyingPaymentScheduleStepFrequencyPeriod?: number// 40680
  UnderlyingPaymentScheduleStepFrequencyUnit?: string// 40681
  UnderlyingPaymentScheduleStepOffsetValue?: number// 40682
  UnderlyingPaymentScheduleStepRate?: number// 40683
  UnderlyingPaymentScheduleStepOffsetRate?: number// 40684
  UnderlyingPaymentScheduleStepRelativeTo?: number// 40685
  UnderlyingPaymentScheduleFixingDateUnadjusted?: Date// 40686
  UnderlyingPaymentScheduleWeight?: number// 40687
  UnderlyingPaymentScheduleFixingDateRelativeTo?: number// 40688
  UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn?: number// 40689
  UnderlyingPaymentScheduleFixingDateOffsetPeriod?: number// 40691
  UnderlyingPaymentScheduleFixingDateOffsetUnit?: string// 40692
  UnderlyingPaymentScheduleFixingDateOffsetDayType?: number// 40693
  UnderlyingPaymentScheduleFixingDayDistribution?: number// 41891
  UnderlyingPaymentScheduleFixingDayCount?: number// 41892
  UnderlyingPaymentScheduleFixingDateAdjusted?: Date// 40694
  UnderlyingPaymentScheduleFixingLagPeriod?: number// 41893
  UnderlyingPaymentScheduleFixingLagUnit?: string// 41894
  UnderlyingPaymentScheduleFixingFirstObservationDateOffsetPeriod?: number// 41895
  UnderlyingPaymentScheduleFixingFirstObservationDateOffsetUnit?: string// 41896
  UnderlyingPaymentScheduleFixingTime?: string// 40695
  UnderlyingPaymentScheduleFixingTimeBusinessCenter?: string// 40696
  UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo?: number// 40697
  UnderlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention?: number// 40698
  UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod?: number// 40700
  UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit?: string// 40701
  UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType?: number// 40702
  UnderlyingPaymentScheduleInterimExchangeDateAdjusted?: Date// 40703
  UnderlyingPaymentScheduleRateSourceGrp?: IUnderlyingPaymentScheduleRateSourceGrp[]
  UnderlyingPaymentScheduleFixingDateBusinessCenterGrp?: IUnderlyingPaymentScheduleFixingDateBusinessCenterGrp[]
  UnderlyingPaymentScheduleFixingDayGrp?: IUnderlyingPaymentScheduleFixingDayGrp[]
  UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp?: IUnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp[]
}
