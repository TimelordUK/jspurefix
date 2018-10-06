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
  StreamType?: number// 40050
  StreamXID?: string// 41303
  StreamDesc?: string// 40051
  StreamVersion?: string// 42784
  StreamVersionEffectiveDate?: Date// 42785
  StreamPaySide?: number// 40052
  StreamReceiveSide?: number// 40053
  StreamNotionalXIDRef?: string// 41305
  StreamNotional?: number// 40054
  StreamCurrency?: string// 40055
  StreamNotionalDeterminationMethod?: string// 42786
  StreamNotionalAdjustments?: number// 42787
  StreamNotionalFrequencyPeriod?: number// 41306
  StreamNotionalFrequencyUnit?: string// 41307
  StreamNotionalCommodityFrequency?: number// 41308
  StreamNotionalUnitOfMeasure?: string// 41309
  StreamTotalNotional?: number// 41310
  StreamTotalNotionalUnitOfMeasure?: string// 41311
  StreamText?: string// 40056
  EncodedStreamTextLen?: number// 40982
  EncodedStreamText?: Buffer// 40983
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
