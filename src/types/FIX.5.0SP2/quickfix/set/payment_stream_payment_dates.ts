import { IPaymentStreamPaymentDateBusinessCenterGrp } from './payment_stream_payment_date_business_center_grp'
import { IPaymentStreamPaymentDateGrp } from './payment_stream_payment_date_grp'
import { IPaymentStreamFinalPricePaymentDate } from './payment_stream_final_price_payment_date'

export interface IPaymentStreamPaymentDates {
  PaymentStreamPaymentDateBusinessDayConvention?: number// [1] 40751 (Int)
  PaymentStreamPaymentDateBusinessCenterGrp?: IPaymentStreamPaymentDateBusinessCenterGrp// [2] NoPaymentStreamPaymentDateBusinessCenters.40947, PaymentStreamPaymentDateBusinessCenter.40752
  PaymentStreamPaymentDateGrp?: IPaymentStreamPaymentDateGrp// [3] NoPaymentStreamPaymentDates.41220, PaymentStreamPaymentDate.41221, PaymentStreamPaymentDateType.41222
  PaymentStreamPaymentFrequencyPeriod?: number// [4] 40753 (Int)
  PaymentStreamPaymentFrequencyUnit?: string// [5] 40754 (String)
  PaymentStreamPaymentRollConvention?: string// [6] 40755 (String)
  PaymentStreamFirstPaymentDateUnadjusted?: Date// [7] 40756 (LocalDate)
  PaymentStreamLastRegularPaymentDateUnadjusted?: Date// [8] 40757 (LocalDate)
  PaymentStreamPaymentDateRelativeTo?: number// [9] 40758 (Int)
  PaymentStreamPaymentDateOffsetPeriod?: number// [10] 40759 (Int)
  PaymentStreamPaymentDateOffsetUnit?: string// [11] 40760 (String)
  PaymentStreamPaymentDateOffsetDayType?: number// [12] 40920 (Int)
  PaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// [13] 41223 (Boolean)
  PaymentStreamFinalPricePaymentDate?: IPaymentStreamFinalPricePaymentDate// [14] PaymentStreamFinalPricePaymentDateUnadjusted.42654, PaymentStreamFinalPricePaymentDateRelativeTo.42655 .. PaymentStreamFinalPricePaymentDateAdjusted.42659
}
