import { ILegStreamCommodity } from './leg_stream_commodity'
import { ILegStreamEffectiveDate } from './leg_stream_effective_date'
import { ILegStreamTerminationDate } from './leg_stream_termination_date'
import { ILegStreamCalculationPeriodDates } from './leg_stream_calculation_period_dates'
import { ILegPaymentStream } from './leg_payment_stream'
import { ILegPaymentScheduleGrp } from './leg_payment_schedule_grp'
import { ILegPaymentStubGrp } from './leg_payment_stub_grp'
import { ILegDeliveryStream } from './leg_delivery_stream'
import { ILegDeliveryScheduleGrp } from './leg_delivery_schedule_grp'

export interface ILegStreamGrpNoLegStreams {
  LegStreamType?: number// [1] 40242 (Int)
  LegStreamXID?: string// [2] 41700 (String)
  LegStreamDesc?: string// [3] 40243 (String)
  LegStreamVersion?: string// [4] 42583 (String)
  LegStreamVersionEffectiveDate?: Date// [5] 42584 (LocalDate)
  LegStreamPaySide?: number// [6] 40244 (Int)
  LegStreamReceiveSide?: number// [7] 40245 (Int)
  LegStreamNotionalXIDRef?: string// [8] 41702 (String)
  LegStreamNotional?: number// [9] 40246 (Float)
  LegStreamCurrency?: string// [10] 40247 (String)
  LegStreamNotionalDeterminationMethod?: string// [11] 42585 (String)
  LegStreamNotionalAdjustments?: number// [12] 42586 (Int)
  LegStreamNotionalFrequencyPeriod?: number// [13] 41703 (Int)
  LegStreamNotionalFrequencyUnit?: string// [14] 41704 (String)
  LegStreamNotionalCommodityFrequency?: number// [15] 41705 (Int)
  LegStreamNotionalUnitOfMeasure?: string// [16] 41706 (String)
  LegStreamTotalNotional?: number// [17] 41707 (Float)
  LegStreamTotalNotionalUnitOfMeasure?: string// [18] 41708 (String)
  LegStreamCommodity?: ILegStreamCommodity// [19] LegStreamCommodityBase.41648, LegStreamCommodityType.41649 .. LegStreamCommodityXIDRef.41673
  LegStreamEffectiveDate?: ILegStreamEffectiveDate// [20] LegStreamEffectiveDateUnadjusted.40249, LegStreamEffectiveDateBusinessDayConvention.40250 .. LegStreamEffectiveDateAdjusted.40256
  LegStreamTerminationDate?: ILegStreamTerminationDate// [21] LegStreamTerminationDateUnadjusted.40257, LegStreamTerminationDateBusinessDayConvention.40258 .. LegStreamTerminationDateAdjusted.40264
  LegStreamCalculationPeriodDates?: ILegStreamCalculationPeriodDates// [22] LegStreamCalculationPeriodDatesXID.41641, LegStreamCalculationPeriodDatesXIDRef.41642 .. LegStreamCalculationCorrectionUnit.41645
  LegPaymentStream?: ILegPaymentStream// [23] LegPaymentStreamType.40279, LegPaymentStreamMarketRate.40280 .. LegSettlRatePostponementCalculationAgent.40906
  LegPaymentScheduleGrp?: ILegPaymentScheduleGrp// [24] NoLegPaymentSchedules.40374, LegPaymentScheduleType.40375 .. LegPaymentScheduleInterimExchangeDateAdjusted.40413
  LegPaymentStubGrp?: ILegPaymentStubGrp// [25] NoLegPaymentStubs.40418, LegPaymentStubType.40419 .. LegPaymentStubIndex2FloorRate.40447
  LegDeliveryStream?: ILegDeliveryStream// [26] LegDeliveryStreamType.41429, LegDeliveryStreamCommoditySourceGrp.41460 .. LegDeliveryStreamRouteOrCharter.43095
  LegDeliveryScheduleGrp?: ILegDeliveryScheduleGrp// [27] NoLegDeliverySchedules.41408, LegDeliveryScheduleType.41409 .. LegDeliveryScheduleSettlTimeType.41428
  LegStreamText?: string// [28] 40248 (String)
  EncodedLegStreamTextLen?: number// [29] 40978 (Length)
  EncodedLegStreamText?: Buffer// [30] 40979 (RawData)
}
