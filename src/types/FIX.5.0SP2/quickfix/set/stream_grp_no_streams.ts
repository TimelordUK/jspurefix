import { IStreamCommodity } from './stream_commodity'
import { IStreamEffectiveDate } from './stream_effective_date'
import { IStreamTerminationDate } from './stream_termination_date'
import { IStreamCalculationPeriodDates } from './stream_calculation_period_dates'
import { IPaymentStream } from './payment_stream'
import { IPaymentScheduleGrp } from './payment_schedule_grp'
import { IPaymentStubGrp } from './payment_stub_grp'
import { IDeliveryStream } from './delivery_stream'
import { IDeliveryScheduleGrp } from './delivery_schedule_grp'

export interface IStreamGrpNoStreams {
  StreamType?: number// [1] 40050 (Int)
  StreamXID?: string// [2] 41303 (String)
  StreamDesc?: string// [3] 40051 (String)
  StreamVersion?: string// [4] 42784 (String)
  StreamVersionEffectiveDate?: Date// [5] 42785 (LocalDate)
  StreamPaySide?: number// [6] 40052 (Int)
  StreamReceiveSide?: number// [7] 40053 (Int)
  StreamNotionalXIDRef?: string// [8] 41305 (String)
  StreamNotional?: number// [9] 40054 (Float)
  StreamCurrency?: string// [10] 40055 (String)
  StreamNotionalDeterminationMethod?: string// [11] 42786 (String)
  StreamNotionalAdjustments?: number// [12] 42787 (Int)
  StreamNotionalFrequencyPeriod?: number// [13] 41306 (Int)
  StreamNotionalFrequencyUnit?: string// [14] 41307 (String)
  StreamNotionalCommodityFrequency?: number// [15] 41308 (Int)
  StreamNotionalUnitOfMeasure?: string// [16] 41309 (String)
  StreamTotalNotional?: number// [17] 41310 (Float)
  StreamTotalNotionalUnitOfMeasure?: string// [18] 41311 (String)
  StreamCommodity?: IStreamCommodity// [19] StreamCommodityBase.41251, StreamCommodityType.41252 .. StreamCommodityXIDRef.41276
  StreamEffectiveDate?: IStreamEffectiveDate// [20] StreamEffectiveDateUnadjusted.40907, StreamEffectiveDateBusinessDayConvention.40908 .. StreamEffectiveDateAdjusted.40914
  StreamTerminationDate?: IStreamTerminationDate// [21] StreamTerminationDateUnadjusted.40065, StreamTerminationDateBusinessDayConvention.40066 .. StreamTerminationDateAdjusted.40072
  StreamCalculationPeriodDates?: IStreamCalculationPeriodDates// [22] StreamCalculationPeriodDatesXID.41244, StreamCalculationPeriodDatesXIDRef.41245 .. StreamCalculationCorrectionUnit.41248
  PaymentStream?: IPaymentStream// [23] PaymentStreamType.40738, PaymentStreamMarketRate.40739 .. SettlRatePostponementCalculationAgent.40089
  PaymentScheduleGrp?: IPaymentScheduleGrp// [24] NoPaymentSchedules.40828, PaymentScheduleType.40829 .. PaymentScheduleInterimExchangeDateAdjusted.40867
  PaymentStubGrp?: IPaymentStubGrp// [25] NoPaymentStubs.40872, PaymentStubType.40873 .. PaymentStubIndex2FloorRate.40901
  DeliveryStream?: IDeliveryStream// [26] DeliveryStreamType.41058, DeliveryStreamCommoditySourceGrp.41085 .. DeliveryStreamRouteOrCharter.43094
  DeliveryScheduleGrp?: IDeliveryScheduleGrp// [27] NoDeliverySchedules.41037, DeliveryScheduleType.41038 .. DeliveryScheduleSettlTimeType.41057
  StreamText?: string// [28] 40056 (String)
  EncodedStreamTextLen?: number// [29] 40982 (Length)
  EncodedStreamText?: Buffer// [30] 40983 (RawData)
}
