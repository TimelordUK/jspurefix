import { IStreamCommodity } from './stream_commodity'
import { IStreamEffectiveDate } from './stream_effective_date'
import { IStreamTerminationDate } from './stream_termination_date'
import { IStreamCalculationPeriodDates } from './stream_calculation_period_dates'
import { IPaymentStream } from './payment_stream'
import { IPaymentScheduleGrp } from './payment_schedule_grp'
import { IPaymentStubGrp } from './payment_stub_grp'
import { IDeliveryStream } from './delivery_stream'
import { IDeliveryScheduleGrp } from './delivery_schedule_grp'

export interface IStreamGrp {
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
  StreamCommodity?: IStreamCommodity
  StreamEffectiveDate?: IStreamEffectiveDate
  StreamTerminationDate?: IStreamTerminationDate
  StreamCalculationPeriodDates?: IStreamCalculationPeriodDates
  PaymentStream?: IPaymentStream
  PaymentScheduleGrp?: IPaymentScheduleGrp[]
  PaymentStubGrp?: IPaymentStubGrp[]
  DeliveryStream?: IDeliveryStream
  DeliveryScheduleGrp?: IDeliveryScheduleGrp[]
}
