import { ILegStreamCommodity } from './leg_stream_commodity'
import { ILegStreamEffectiveDate } from './leg_stream_effective_date'
import { ILegStreamTerminationDate } from './leg_stream_termination_date'
import { ILegStreamCalculationPeriodDates } from './leg_stream_calculation_period_dates'
import { ILegPaymentStream } from './leg_payment_stream'
import { ILegPaymentScheduleGrp } from './leg_payment_schedule_grp'
import { ILegPaymentStubGrp } from './leg_payment_stub_grp'
import { ILegDeliveryStream } from './leg_delivery_stream'
import { ILegDeliveryScheduleGrp } from './leg_delivery_schedule_grp'

export interface ILegStreamGrp {
  UnderlyingReturnRateValuationDateType?: number// 43073
  UnderlyingDividendPeriodXID?: string// 42881
  PaymentDesc?: string// 43087
  UnderlyingStreamVersion?: string// 43083
  UnderlyingStreamVersionEffectiveDate?: Date// 43084
  PaymentSchedulePaySide?: number// 40833
  PaymentScheduleReceiveSide?: number// 40834
  UnderlyingStreamNotionalXIDRef?: string// 42018
  UnderlyingProtectionTermNotional?: number// 42069
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingStreamNotionalDeterminationMethod?: string// 43085
  UnderlyingStreamNotionalAdjustments?: number// 43086
  UnderlyingStreamNotionalFrequencyPeriod?: number// 42019
  UnderlyingStreamNotionalFrequencyUnit?: string// 42020
  UnderlyingStreamNotionalCommodityFrequency?: number// 42021
  UnderlyingStreamNotionalUnitOfMeasure?: string// 42022
  UnderlyingStreamTotalNotional?: number// 42023
  UnderlyingStreamTotalNotionalUnitOfMeasure?: string// 42024
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  LegStreamCommodity?: ILegStreamCommodity
  LegStreamEffectiveDate?: ILegStreamEffectiveDate
  LegStreamTerminationDate?: ILegStreamTerminationDate
  LegStreamCalculationPeriodDates?: ILegStreamCalculationPeriodDates
  LegPaymentStream?: ILegPaymentStream
  LegPaymentScheduleGrp?: ILegPaymentScheduleGrp[]
  LegPaymentStubGrp?: ILegPaymentStubGrp[]
  LegDeliveryStream?: ILegDeliveryStream
  LegDeliveryScheduleGrp?: ILegDeliveryScheduleGrp[]
}
