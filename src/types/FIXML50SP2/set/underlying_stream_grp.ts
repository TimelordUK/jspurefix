import { IUnderlyingStreamCommodity } from './underlying_stream_commodity'
import { IUnderlyingStreamEffectiveDate } from './underlying_stream_effective_date'
import { IUnderlyingStreamTerminationDate } from './underlying_stream_termination_date'
import { IUnderlyingStreamCalculationPeriodDates } from './underlying_stream_calculation_period_dates'
import { IUnderlyingPaymentStream } from './underlying_payment_stream'
import { IUnderlyingPaymentScheduleGrp } from './underlying_payment_schedule_grp'
import { IUnderlyingPaymentStubGrp } from './underlying_payment_stub_grp'
import { IUnderlyingDeliveryStream } from './underlying_delivery_stream'
import { IUnderlyingDeliveryScheduleGrp } from './underlying_delivery_schedule_grp'

export interface IUnderlyingStreamGrp {
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
  UnderlyingStreamCommodity?: IUnderlyingStreamCommodity
  UnderlyingStreamEffectiveDate?: IUnderlyingStreamEffectiveDate
  UnderlyingStreamTerminationDate?: IUnderlyingStreamTerminationDate
  UnderlyingStreamCalculationPeriodDates?: IUnderlyingStreamCalculationPeriodDates
  UnderlyingPaymentStream?: IUnderlyingPaymentStream
  UnderlyingPaymentScheduleGrp?: IUnderlyingPaymentScheduleGrp[]
  UnderlyingPaymentStubGrp?: IUnderlyingPaymentStubGrp[]
  UnderlyingDeliveryStream?: IUnderlyingDeliveryStream
  UnderlyingDeliveryScheduleGrp?: IUnderlyingDeliveryScheduleGrp[]
}
