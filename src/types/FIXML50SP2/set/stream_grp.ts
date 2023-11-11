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
  StreamType?: number// [1] 40050 (Int)
  StreamXID?: string// [1] 41303 (String)
  StreamDesc?: string// [1] 40051 (String)
  StreamVersion?: string// [1] 42784 (String)
  StreamVersionEffectiveDate?: Date// [1] 42785 (LocalDate)
  StreamPaySide?: number// [1] 40052 (Int)
  StreamReceiveSide?: number// [1] 40053 (Int)
  StreamNotionalXIDRef?: string// [1] 41305 (String)
  StreamNotional?: number// [1] 40054 (Float)
  StreamCurrency?: string// [1] 40055 (String)
  StreamNotionalDeterminationMethod?: string// [1] 42786 (String)
  StreamNotionalAdjustments?: number// [1] 42787 (Int)
  StreamNotionalFrequencyPeriod?: number// [1] 41306 (Int)
  StreamNotionalFrequencyUnit?: string// [1] 41307 (String)
  StreamNotionalCommodityFrequency?: number// [1] 41308 (Int)
  StreamNotionalUnitOfMeasure?: string// [1] 41309 (String)
  StreamTotalNotional?: number// [1] 41310 (Float)
  StreamTotalNotionalUnitOfMeasure?: string// [1] 41311 (String)
  StreamText?: string// [1] 40056 (String)
  EncodedStreamTextLen?: number// [1] 40982 (Length)
  EncodedStreamText?: Buffer// [1] 40983 (RawData)
  StreamCommodity?: IStreamCommodity// [1] Base.41251, CmdtyTyp.41252 .. XIDRef.41276
  StreamEffectiveDate?: IStreamEffectiveDate// [2] DtUnadj.40907, BizDayCnvtn.40908 .. Dt.40914
  StreamTerminationDate?: IStreamTerminationDate// [3] DtUnadj.40065, BizDayCnvtn.40066 .. Dt.40072
  StreamCalculationPeriodDates?: IStreamCalculationPeriodDates// [4] XID.41244, XIDRef.41245 .. CrrctnUnit.41248
  PaymentStream?: IPaymentStream// [5] Typ.40738, MktRt.40739 .. CmpndgFixedRt.42605
  PaymentScheduleGrp?: IPaymentScheduleGrp[]// [6] Typ.40829, XID.41164 .. IntrmExchDt.40867
  PaymentStubGrp?: IPaymentStubGrp[]// [7] Typ.40873, Lngth.40874 .. FlrRt2.40901
  DeliveryStream?: IDeliveryStream// [8] Typ.41058, Ppln.41059 .. ElctngSide.41080
  DeliveryScheduleGrp?: IDeliveryScheduleGrp[]// [9] Typ.41038, XID.41039 .. Holidays.41050
}
