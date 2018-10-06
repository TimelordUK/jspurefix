import { IUnderlyingPaymentStreamPaymentDateBusinessCenterGrp } from './underlying_payment_stream_payment_date_business_center_grp'
import { IUnderlyingPaymentStreamPaymentDateGrp } from './underlying_payment_stream_payment_date_grp'
import { IUnderlyingPaymentStreamFinalPricePaymentDate } from './underlying_payment_stream_final_price_payment_date'

export interface IUnderlyingPaymentStreamPaymentDates {
  UnderlyingPaymentStreamPaymentDateBusinessDayConvention?: number// 40581
  UnderlyingPaymentStreamPaymentFrequencyPeriod?: number// 40583
  UnderlyingPaymentStreamPaymentFrequencyUnit?: string// 40584
  UnderlyingPaymentStreamPaymentRollConvention?: string// 40585
  UnderlyingPaymentStreamFirstPaymentDateUnadjusted?: Date// 40586
  UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted?: Date// 40587
  UnderlyingPaymentStreamPaymentDateRelativeTo?: number// 40588
  UnderlyingPaymentStreamPaymentDateOffsetPeriod?: number// 40589
  UnderlyingPaymentStreamPaymentDateOffsetUnit?: string// 40590
  UnderlyingPaymentStreamPaymentDateOffsetDayType?: number// 40591
  UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// 41940
  UnderlyingPaymentStreamPaymentDateBusinessCenterGrp?: IUnderlyingPaymentStreamPaymentDateBusinessCenterGrp[]
  UnderlyingPaymentStreamPaymentDateGrp?: IUnderlyingPaymentStreamPaymentDateGrp[]
  UnderlyingPaymentStreamFinalPricePaymentDate?: IUnderlyingPaymentStreamFinalPricePaymentDate
}
