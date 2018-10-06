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
  LegStreamType?: number// 40242
  LegStreamXID?: string// 41700
  LegStreamDesc?: string// 40243
  LegStreamVersion?: string// 42583
  LegStreamVersionEffectiveDate?: Date// 42584
  LegStreamPaySide?: number// 40244
  LegStreamReceiveSide?: number// 40245
  LegStreamNotionalXIDRef?: string// 41702
  LegStreamNotional?: number// 40246
  LegStreamCurrency?: string// 40247
  LegStreamNotionalDeterminationMethod?: string// 42585
  LegStreamNotionalAdjustments?: number// 42586
  LegStreamNotionalFrequencyPeriod?: number// 41703
  LegStreamNotionalFrequencyUnit?: string// 41704
  LegStreamNotionalCommodityFrequency?: number// 41705
  LegStreamNotionalUnitOfMeasure?: string// 41706
  LegStreamTotalNotional?: number// 41707
  LegStreamTotalNotionalUnitOfMeasure?: string// 41708
  LegStreamText?: string// 40248
  EncodedLegStreamTextLen?: number// 40978
  EncodedLegStreamText?: Buffer// 40979
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
