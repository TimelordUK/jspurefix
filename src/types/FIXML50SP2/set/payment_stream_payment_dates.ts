import { IPaymentStreamPaymentDateBusinessCenterGrp } from './payment_stream_payment_date_business_center_grp'
import { IPaymentStreamPaymentDateGrp } from './payment_stream_payment_date_grp'
import { IPaymentStreamFinalPricePaymentDate } from './payment_stream_final_price_payment_date'

export interface IPaymentStreamPaymentDates {
  PaymentStreamPaymentDateBusinessDayConvention?: number// 40751
  PaymentStreamPaymentFrequencyPeriod?: number// 40753
  PaymentStreamPaymentFrequencyUnit?: string// 40754
  PaymentStreamPaymentRollConvention?: string// 40755
  PaymentStreamFirstPaymentDateUnadjusted?: Date// 40756
  PaymentStreamLastRegularPaymentDateUnadjusted?: Date// 40757
  PaymentStreamPaymentDateRelativeTo?: number// 40758
  PaymentStreamPaymentDateOffsetPeriod?: number// 40759
  PaymentStreamPaymentDateOffsetUnit?: string// 40760
  PaymentStreamPaymentDateOffsetDayType?: number// 40920
  PaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// 41223
  PaymentStreamPaymentDateBusinessCenterGrp?: IPaymentStreamPaymentDateBusinessCenterGrp[]
  PaymentStreamPaymentDateGrp?: IPaymentStreamPaymentDateGrp[]
  PaymentStreamFinalPricePaymentDate?: IPaymentStreamFinalPricePaymentDate
}
