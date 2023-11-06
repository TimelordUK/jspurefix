import { IPaymentStreamPaymentDateBusinessCenterGrp } from './payment_stream_payment_date_business_center_grp'
import { IPaymentStreamPaymentDateGrp } from './payment_stream_payment_date_grp'
import { IPaymentStreamFinalPricePaymentDate } from './payment_stream_final_price_payment_date'

export interface IPaymentStreamPaymentDates {
  PaymentStreamPaymentDateBusinessDayConvention?: number// [1] 40751 (Int)
  PaymentStreamPaymentFrequencyPeriod?: number// [1] 40753 (Int)
  PaymentStreamPaymentFrequencyUnit?: string// [1] 40754 (String)
  PaymentStreamPaymentRollConvention?: string// [1] 40755 (String)
  PaymentStreamFirstPaymentDateUnadjusted?: Date// [1] 40756 (LocalDate)
  PaymentStreamLastRegularPaymentDateUnadjusted?: Date// [1] 40757 (LocalDate)
  PaymentStreamPaymentDateRelativeTo?: number// [1] 40758 (Int)
  PaymentStreamPaymentDateOffsetPeriod?: number// [1] 40759 (Int)
  PaymentStreamPaymentDateOffsetUnit?: string// [1] 40760 (String)
  PaymentStreamPaymentDateOffsetDayType?: number// [1] 40920 (Int)
  PaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// [1] 41223 (Boolean)
  PaymentStreamPaymentDateBusinessCenterGrp?: IPaymentStreamPaymentDateBusinessCenterGrp[]// [1] Ctr.40752
  PaymentStreamPaymentDateGrp?: IPaymentStreamPaymentDateGrp[]// [2] Dt.41221, Typ.41222
  PaymentStreamFinalPricePaymentDate?: IPaymentStreamFinalPricePaymentDate// [3] DtUnadj.42654, Reltv.42655 .. Dt.42659
}
