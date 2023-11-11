import { IUnderlyingPaymentStreamPaymentDateBusinessCenterGrp } from './underlying_payment_stream_payment_date_business_center_grp'
import { IUnderlyingPaymentStreamPaymentDateGrp } from './underlying_payment_stream_payment_date_grp'
import { IUnderlyingPaymentStreamFinalPricePaymentDate } from './underlying_payment_stream_final_price_payment_date'

export interface IUnderlyingPaymentStreamPaymentDates {
  UnderlyingPaymentStreamPaymentDateBusinessDayConvention?: number// [1] 40581 (Int)
  UnderlyingPaymentStreamPaymentFrequencyPeriod?: number// [1] 40583 (Int)
  UnderlyingPaymentStreamPaymentFrequencyUnit?: string// [1] 40584 (String)
  UnderlyingPaymentStreamPaymentRollConvention?: string// [1] 40585 (String)
  UnderlyingPaymentStreamFirstPaymentDateUnadjusted?: Date// [1] 40586 (LocalDate)
  UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted?: Date// [1] 40587 (LocalDate)
  UnderlyingPaymentStreamPaymentDateRelativeTo?: number// [1] 40588 (Int)
  UnderlyingPaymentStreamPaymentDateOffsetPeriod?: number// [1] 40589 (Int)
  UnderlyingPaymentStreamPaymentDateOffsetUnit?: string// [1] 40590 (String)
  UnderlyingPaymentStreamPaymentDateOffsetDayType?: number// [1] 40591 (Int)
  UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// [1] 41940 (Boolean)
  UnderlyingPaymentStreamPaymentDateBusinessCenterGrp?: IUnderlyingPaymentStreamPaymentDateBusinessCenterGrp[]// [1] Ctr.40582
  UnderlyingPaymentStreamPaymentDateGrp?: IUnderlyingPaymentStreamPaymentDateGrp[]// [2] Dt.41938, Typ.41939
  UnderlyingPaymentStreamFinalPricePaymentDate?: IUnderlyingPaymentStreamFinalPricePaymentDate// [3] DtUnadj.42949, Reltv.42950 .. Dt.42954
}
