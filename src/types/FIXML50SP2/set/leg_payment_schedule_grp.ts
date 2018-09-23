import { ILegPaymentScheduleRateSourceGrp } from './leg_payment_schedule_rate_source_grp'
import { ILegPaymentScheduleFixingDateBusinessCenterGrp } from './leg_payment_schedule_fixing_date_business_center_grp'
import { ILegPaymentScheduleFixingDayGrp } from './leg_payment_schedule_fixing_day_grp'
import { ILegPaymentScheduleInterimExchangeDateBusinessCenterGrp } from './leg_payment_schedule_interim_exchange_date_business_center_grp'

export interface ILegPaymentScheduleGrp {
  UnderlyingReturnRateValuationDateType?: number// 43073
  UnderlyingDividendPeriodXID?: string// 42881
  UnderlyingStreamCommoditySettlPeriodXIDRef?: string// 42015
  PaymentScheduleStubType?: number// 40830
  UnderlyingReturnRateValuationStartDateUnadjusted?: Date// 43014
  UnderlyingReturnRateValuationEndDateUnadjusted?: Date// 43020
  PaymentSchedulePaySide?: number// 40833
  PaymentScheduleReceiveSide?: number// 40834
  UnderlyingProtectionTermNotional?: number// 42069
  UnderlyingReturnRatePriceCurrency?: string// 43067
  PaymentStubRate?: number// 40875
  UnderlyingPaymentStreamCompoundingRateMultiplier?: string// 42926
  UnderlyingPaymentStreamCompoundingRateSpread?: string// 42927
  UnderlyingPaymentScheduleRateCurrency?: string// 41883
  UnderlyingPaymentScheduleRateUnitOfMeasure?: string// 41884
  UnderlyingPaymentStreamRateConversionFactor?: string// 41922
  UnderlyingPaymentStreamRateSpreadType?: number// 41923
  UnderlyingPaymentStreamCompoundingRateSpreadPositionType?: number// 42928
  UnderlyingPaymentStreamCompoundingRateTreatment?: number// 42929
  UnderlyingPaymentStreamTotalFixedAmount?: number// 41905
  PaymentStubFixedCurrency?: string// 40877
  UnderlyingPaymentScheduleSettlPeriodPrice?: number// 41887
  UnderlyingPaymentScheduleSettlPeriodPriceCurrency?: string// 41888
  UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure?: string// 41889
  UnderlyingPaymentScheduleStepUnitOfMeasure?: string// 41890
  PaymentScheduleStepFrequencyPeriod?: number// 40844
  PaymentScheduleStepFrequencyUnit?: string// 40845
  PaymentScheduleStepOffsetValue?: number// 40846
  PaymentScheduleStepRate?: number// 40847
  PaymentScheduleStepOffsetRate?: number// 40848
  PaymentScheduleStepRelativeTo?: number// 40849
  PaymentScheduleFixingDateUnadjusted?: Date// 40850
  UnderlyingComplexEventAveragingWeight?: string// 41715
  PaymentScheduleFixingDateRelativeTo?: number// 40852
  PaymentScheduleFixingDateBusinessDayConvention?: number// 40853
  PaymentScheduleFixingDateOffsetPeriod?: number// 40855
  PaymentScheduleFixingDateOffsetUnit?: string// 40856
  PaymentScheduleFixingDateOffsetDayType?: number// 40857
  UnderlyingPaymentScheduleFixingDayDistribution?: number// 41891
  UnderlyingPaymentScheduleFixingDayCount?: number// 41892
  PaymentScheduleFixingDateAdjusted?: Date// 40858
  UnderlyingPaymentScheduleFixingLagPeriod?: number// 41893
  UnderlyingPaymentScheduleFixingLagUnit?: string// 41894
  UnderlyingPaymentScheduleFixingFirstObservationDateOffsetPeriod?: number// 41895
  UnderlyingPaymentScheduleFixingFirstObservationDateOffsetUnit?: string// 41896
  UnderlyingComplexEventFixingTime?: string// 41746
  PaymentScheduleFixingTimeBusinessCenter?: string// 40860
  PaymentScheduleInterimExchangePaymentDateRelativeTo?: number// 40861
  PaymentScheduleInterimExchangeDatesBusinessDayConvention?: number// 40862
  PaymentScheduleInterimExchangeDatesOffsetPeriod?: number// 40864
  PaymentScheduleInterimExchangeDatesOffsetUnit?: string// 40865
  PaymentScheduleInterimExchangeDatesOffsetDayType?: number// 40866
  PaymentScheduleInterimExchangeDateAdjusted?: Date// 40867
  LegPaymentScheduleRateSourceGrp?: ILegPaymentScheduleRateSourceGrp[]
  LegPaymentScheduleFixingDateBusinessCenterGrp?: ILegPaymentScheduleFixingDateBusinessCenterGrp[]
  LegPaymentScheduleFixingDayGrp?: ILegPaymentScheduleFixingDayGrp[]
  LegPaymentScheduleInterimExchangeDateBusinessCenterGrp?: ILegPaymentScheduleInterimExchangeDateBusinessCenterGrp[]
}
