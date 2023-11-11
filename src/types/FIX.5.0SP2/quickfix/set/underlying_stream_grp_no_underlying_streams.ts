import { IUnderlyingStreamCommodity } from './underlying_stream_commodity'
import { IUnderlyingStreamEffectiveDate } from './underlying_stream_effective_date'
import { IUnderlyingStreamTerminationDate } from './underlying_stream_termination_date'
import { IUnderlyingStreamCalculationPeriodDates } from './underlying_stream_calculation_period_dates'
import { IUnderlyingPaymentStream } from './underlying_payment_stream'
import { IUnderlyingPaymentScheduleGrp } from './underlying_payment_schedule_grp'
import { IUnderlyingPaymentStubGrp } from './underlying_payment_stub_grp'
import { IUnderlyingDeliveryStream } from './underlying_delivery_stream'
import { IUnderlyingDeliveryScheduleGrp } from './underlying_delivery_schedule_grp'

export interface IUnderlyingStreamGrpNoUnderlyingStreams {
  UnderlyingStreamType?: number// [1] 40541 (Int)
  UnderlyingStreamXID?: string// [2] 42016 (String)
  UnderlyingStreamDesc?: string// [3] 40542 (String)
  UnderlyingStreamVersion?: string// [4] 43083 (String)
  UnderlyingStreamVersionEffectiveDate?: Date// [5] 43084 (LocalDate)
  UnderlyingStreamPaySide?: number// [6] 40543 (Int)
  UnderlyingStreamReceiveSide?: number// [7] 40544 (Int)
  UnderlyingStreamNotionalXIDRef?: string// [8] 42018 (String)
  UnderlyingStreamNotional?: number// [9] 40545 (Float)
  UnderlyingStreamCurrency?: string// [10] 40546 (String)
  UnderlyingStreamNotionalDeterminationMethod?: string// [11] 43085 (String)
  UnderlyingStreamNotionalAdjustments?: number// [12] 43086 (Int)
  UnderlyingStreamNotionalFrequencyPeriod?: number// [13] 42019 (Int)
  UnderlyingStreamNotionalFrequencyUnit?: string// [14] 42020 (String)
  UnderlyingStreamNotionalCommodityFrequency?: number// [15] 42021 (Int)
  UnderlyingStreamNotionalUnitOfMeasure?: string// [16] 42022 (String)
  UnderlyingStreamTotalNotional?: number// [17] 42023 (Float)
  UnderlyingStreamTotalNotionalUnitOfMeasure?: string// [18] 42024 (String)
  UnderlyingStreamCommodity?: IUnderlyingStreamCommodity// [19] UnderlyingStreamCommodityBase.41964, UnderlyingStreamCommodityType.41965 .. UnderlyingStreamCommodityXIDRef.41989
  UnderlyingStreamEffectiveDate?: IUnderlyingStreamEffectiveDate// [20] UnderlyingStreamEffectiveDateUnadjusted.40057, UnderlyingStreamEffectiveDateBusinessDayConvention.40058 .. UnderlyingStreamEffectiveDateAdjusted.40064
  UnderlyingStreamTerminationDate?: IUnderlyingStreamTerminationDate// [21] UnderlyingStreamTerminationDateUnadjusted.40548, UnderlyingStreamTerminationDateBusinessDayConvention.40549 .. UnderlyingStreamTerminationDateAdjusted.40555
  UnderlyingStreamCalculationPeriodDates?: IUnderlyingStreamCalculationPeriodDates// [22] UnderlyingStreamCalculationPeriodDatesXID.41957, UnderlyingStreamCalculationPeriodDatesXIDRef.41958 .. UnderlyingStreamCalculationCorrectionUnit.41961
  UnderlyingPaymentStream?: IUnderlyingPaymentStream// [23] UnderlyingPaymentStreamType.40568, UnderlyingPaymentStreamMarketRate.40569 .. UnderlyingSettlRatePostponementCalculationAgent.40663
  UnderlyingPaymentScheduleGrp?: IUnderlyingPaymentScheduleGrp// [24] NoUnderlyingPaymentSchedules.40664, UnderlyingPaymentScheduleType.40665 .. UnderlyingPaymentScheduleInterimExchangeDateAdjusted.40703
  UnderlyingPaymentStubGrp?: IUnderlyingPaymentStubGrp// [25] NoUnderlyingPaymentStubs.40708, UnderlyingPaymentStubType.40709 .. UnderlyingPaymentStubIndex2FloorRate.40737
  UnderlyingDeliveryStream?: IUnderlyingDeliveryStream// [26] UnderlyingDeliveryStreamType.41777, UnderlyingDeliveryStreamCommoditySourceGrp.41808 .. UnderlyingDeliveryStreamRouteOrCharter.43096
  UnderlyingDeliveryScheduleGrp?: IUnderlyingDeliveryScheduleGrp// [27] NoUnderlyingDeliverySchedules.41756, UnderlyingDeliveryScheduleType.41757 .. UnderlyingDeliveryScheduleSettlTimeType.41776
  UnderlyingStreamText?: string// [28] 40547 (String)
  EncodedUnderlyingStreamTextLen?: number// [29] 40988 (Length)
  EncodedUnderlyingStreamText?: Buffer// [30] 40989 (RawData)
}
