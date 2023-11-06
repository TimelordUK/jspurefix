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
  LegStreamType?: number// [1] 40242 (Int)
  LegStreamXID?: string// [1] 41700 (String)
  LegStreamDesc?: string// [1] 40243 (String)
  LegStreamVersion?: string// [1] 42583 (String)
  LegStreamVersionEffectiveDate?: Date// [1] 42584 (LocalDate)
  LegStreamPaySide?: number// [1] 40244 (Int)
  LegStreamReceiveSide?: number// [1] 40245 (Int)
  LegStreamNotionalXIDRef?: string// [1] 41702 (String)
  LegStreamNotional?: number// [1] 40246 (Float)
  LegStreamCurrency?: string// [1] 40247 (String)
  LegStreamNotionalDeterminationMethod?: string// [1] 42585 (String)
  LegStreamNotionalAdjustments?: number// [1] 42586 (Int)
  LegStreamNotionalFrequencyPeriod?: number// [1] 41703 (Int)
  LegStreamNotionalFrequencyUnit?: string// [1] 41704 (String)
  LegStreamNotionalCommodityFrequency?: number// [1] 41705 (Int)
  LegStreamNotionalUnitOfMeasure?: string// [1] 41706 (String)
  LegStreamTotalNotional?: number// [1] 41707 (Float)
  LegStreamTotalNotionalUnitOfMeasure?: string// [1] 41708 (String)
  LegStreamText?: string// [1] 40248 (String)
  EncodedLegStreamTextLen?: number// [1] 40978 (Length)
  EncodedLegStreamText?: Buffer// [1] 40979 (RawData)
  LegStreamCommodity?: ILegStreamCommodity// [1] Base.41648, CmdtyTyp.41649 .. XIDRef.41673
  LegStreamEffectiveDate?: ILegStreamEffectiveDate// [2] DtUnadj.40249, BizDayCnvtn.40250 .. Dt.40256
  LegStreamTerminationDate?: ILegStreamTerminationDate// [3] DtUnadj.40257, BizDayCnvtn.40258 .. Dt.40264
  LegStreamCalculationPeriodDates?: ILegStreamCalculationPeriodDates// [4] XID.41641, XIDRef.41642 .. CrrctnUnit.41645
  LegPaymentStream?: ILegPaymentStream// [5] Typ.40279, MktRt.40280 .. CmpndgFixedRt.42404
  LegPaymentScheduleGrp?: ILegPaymentScheduleGrp[]// [6] Typ.40375, XID.41533 .. IntrmExchDt.40413
  LegPaymentStubGrp?: ILegPaymentStubGrp[]// [7] Typ.40419, Lngth.40420 .. FlrRt2.40447
  LegDeliveryStream?: ILegDeliveryStream// [8] Typ.41429, Ppln.41430 .. ElctngSide.41451
  LegDeliveryScheduleGrp?: ILegDeliveryScheduleGrp[]// [9] Typ.41409, XID.41410 .. Holidays.41421
}
