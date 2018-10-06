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
  UnderlyingStreamType?: number// 40541
  UnderlyingStreamXID?: string// 42016
  UnderlyingStreamDesc?: string// 40542
  UnderlyingStreamVersion?: string// 43083
  UnderlyingStreamVersionEffectiveDate?: Date// 43084
  UnderlyingStreamPaySide?: number// 40543
  UnderlyingStreamReceiveSide?: number// 40544
  UnderlyingStreamNotionalXIDRef?: string// 42018
  UnderlyingStreamNotional?: number// 40545
  UnderlyingStreamCurrency?: string// 40546
  UnderlyingStreamNotionalDeterminationMethod?: string// 43085
  UnderlyingStreamNotionalAdjustments?: number// 43086
  UnderlyingStreamNotionalFrequencyPeriod?: number// 42019
  UnderlyingStreamNotionalFrequencyUnit?: string// 42020
  UnderlyingStreamNotionalCommodityFrequency?: number// 42021
  UnderlyingStreamNotionalUnitOfMeasure?: string// 42022
  UnderlyingStreamTotalNotional?: number// 42023
  UnderlyingStreamTotalNotionalUnitOfMeasure?: string// 42024
  UnderlyingStreamText?: string// 40547
  EncodedUnderlyingStreamTextLen?: number// 40988
  EncodedUnderlyingStreamText?: Buffer// 40989
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
