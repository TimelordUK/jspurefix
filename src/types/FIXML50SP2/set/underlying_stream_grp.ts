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
  UnderlyingStreamType?: number// [1] 40541 (Int)
  UnderlyingStreamXID?: string// [1] 42016 (String)
  UnderlyingStreamDesc?: string// [1] 40542 (String)
  UnderlyingStreamVersion?: string// [1] 43083 (String)
  UnderlyingStreamVersionEffectiveDate?: Date// [1] 43084 (LocalDate)
  UnderlyingStreamPaySide?: number// [1] 40543 (Int)
  UnderlyingStreamReceiveSide?: number// [1] 40544 (Int)
  UnderlyingStreamNotionalXIDRef?: string// [1] 42018 (String)
  UnderlyingStreamNotional?: number// [1] 40545 (Float)
  UnderlyingStreamCurrency?: string// [1] 40546 (String)
  UnderlyingStreamNotionalDeterminationMethod?: string// [1] 43085 (String)
  UnderlyingStreamNotionalAdjustments?: number// [1] 43086 (Int)
  UnderlyingStreamNotionalFrequencyPeriod?: number// [1] 42019 (Int)
  UnderlyingStreamNotionalFrequencyUnit?: string// [1] 42020 (String)
  UnderlyingStreamNotionalCommodityFrequency?: number// [1] 42021 (Int)
  UnderlyingStreamNotionalUnitOfMeasure?: string// [1] 42022 (String)
  UnderlyingStreamTotalNotional?: number// [1] 42023 (Float)
  UnderlyingStreamTotalNotionalUnitOfMeasure?: string// [1] 42024 (String)
  UnderlyingStreamText?: string// [1] 40547 (String)
  EncodedUnderlyingStreamTextLen?: number// [1] 40988 (Length)
  EncodedUnderlyingStreamText?: Buffer// [1] 40989 (RawData)
  UnderlyingStreamCommodity?: IUnderlyingStreamCommodity// [1] Base.41964, CmdtyTyp.41965 .. XIDRef.41989
  UnderlyingStreamEffectiveDate?: IUnderlyingStreamEffectiveDate// [2] DtUnadj.40057, BizDayCnvtn.40058 .. Dt.40064
  UnderlyingStreamTerminationDate?: IUnderlyingStreamTerminationDate// [3] DtUnadj.40548, BizDayCnvtn.40549 .. Dt.40555
  UnderlyingStreamCalculationPeriodDates?: IUnderlyingStreamCalculationPeriodDates// [4] XID.41957, XIDRef.41958 .. CrrctnUnit.41961
  UnderlyingPaymentStream?: IUnderlyingPaymentStream// [5] Typ.40568, MktRt.40569 .. CmpndgFixedRt.42900
  UnderlyingPaymentScheduleGrp?: IUnderlyingPaymentScheduleGrp[]// [6] Typ.40665, XID.41881 .. IntrmExchDt.40703
  UnderlyingPaymentStubGrp?: IUnderlyingPaymentStubGrp[]// [7] Typ.40709, Lngth.40710 .. FlrRt2.40737
  UnderlyingDeliveryStream?: IUnderlyingDeliveryStream// [8] Typ.41777, Ppln.41778 .. ElctngSide.41799
  UnderlyingDeliveryScheduleGrp?: IUnderlyingDeliveryScheduleGrp[]// [9] Typ.41757, XID.41758 .. Holidays.41769
}
