import { IPaymentScheduleRateSourceGrp } from './payment_schedule_rate_source_grp'
import { IPaymentScheduleFixingDateBusinessCenterGrp } from './payment_schedule_fixing_date_business_center_grp'
import { IPaymentScheduleFixingDayGrp } from './payment_schedule_fixing_day_grp'
import { IPaymentScheduleInterimExchangeDateBusinessCenterGrp } from './payment_schedule_interim_exchange_date_business_center_grp'

export interface IPaymentScheduleGrp {
  PaymentScheduleType?: number// 40829
  PaymentScheduleXID?: string// 41164
  PaymentScheduleXIDRef?: string// 41165
  PaymentScheduleStubType?: number// 40830
  PaymentScheduleStartDateUnadjusted?: Date// 40831
  PaymentScheduleEndDateUnadjusted?: Date// 40832
  PaymentSchedulePaySide?: number// 40833
  PaymentScheduleReceiveSide?: number// 40834
  PaymentScheduleNotional?: number// 40835
  PaymentScheduleCurrency?: string// 40836
  PaymentScheduleRate?: number// 40837
  PaymentScheduleRateMultiplier?: number// 40838
  PaymentScheduleRateSpread?: number// 40839
  PaymentScheduleRateCurrency?: string// 41166
  PaymentScheduleRateUnitOfMeasure?: string// 41167
  PaymentScheduleRateConversionFactor?: number// 41168
  PaymentScheduleRateSpreadType?: number// 41169
  PaymentScheduleRateSpreadPositionType?: number// 40840
  PaymentScheduleRateTreatment?: number// 40841
  PaymentScheduleFixedAmount?: number// 40842
  PaymentScheduleFixedCurrency?: string// 40843
  PaymentScheduleSettlPeriodPrice?: number// 41170
  PaymentScheduleSettlPeriodPriceCurrency?: string// 41171
  PaymentScheduleSettlPeriodPriceUnitOfMeasure?: string// 41172
  PaymentScheduleStepUnitOfMeasure?: string// 41173
  PaymentScheduleStepFrequencyPeriod?: number// 40844
  PaymentScheduleStepFrequencyUnit?: string// 40845
  PaymentScheduleStepOffsetValue?: number// 40846
  PaymentScheduleStepRate?: number// 40847
  PaymentScheduleStepOffsetRate?: number// 40848
  PaymentScheduleStepRelativeTo?: number// 40849
  PaymentScheduleFixingDateUnadjusted?: Date// 40850
  PaymentScheduleWeight?: number// 40851
  PaymentScheduleFixingDateRelativeTo?: number// 40852
  PaymentScheduleFixingDateBusinessDayConvention?: number// 40853
  PaymentScheduleFixingDateOffsetPeriod?: number// 40855
  PaymentScheduleFixingDateOffsetUnit?: string// 40856
  PaymentScheduleFixingDateOffsetDayType?: number// 40857
  PaymentScheduleFixingDayDistribution?: number// 41174
  PaymentScheduleFixingDayCount?: number// 41175
  PaymentScheduleFixingDateAdjusted?: Date// 40858
  PaymentScheduleFixingLagPeriod?: number// 41176
  PaymentScheduleFixingLagUnit?: string// 41177
  PaymentScheduleFixingFirstObservationDateOffsetPeriod?: number// 41178
  PaymentScheduleFixingFirstObservationDateOffsetUnit?: string// 41179
  PaymentScheduleFixingTime?: string// 40859
  PaymentScheduleFixingTimeBusinessCenter?: string// 40860
  PaymentScheduleInterimExchangePaymentDateRelativeTo?: number// 40861
  PaymentScheduleInterimExchangeDatesBusinessDayConvention?: number// 40862
  PaymentScheduleInterimExchangeDatesOffsetPeriod?: number// 40864
  PaymentScheduleInterimExchangeDatesOffsetUnit?: string// 40865
  PaymentScheduleInterimExchangeDatesOffsetDayType?: number// 40866
  PaymentScheduleInterimExchangeDateAdjusted?: Date// 40867
  PaymentScheduleRateSourceGrp?: IPaymentScheduleRateSourceGrp[]
  PaymentScheduleFixingDateBusinessCenterGrp?: IPaymentScheduleFixingDateBusinessCenterGrp[]
  PaymentScheduleFixingDayGrp?: IPaymentScheduleFixingDayGrp[]
  PaymentScheduleInterimExchangeDateBusinessCenterGrp?: IPaymentScheduleInterimExchangeDateBusinessCenterGrp[]
}
