import { IUnderlyingPaymentStreamPaymentDateBusinessCenterGrp } from './underlying_payment_stream_payment_date_business_center_grp'
import { IUnderlyingPaymentStreamPaymentDateGrp } from './underlying_payment_stream_payment_date_grp'
import { IUnderlyingPaymentStreamFinalPricePaymentDate } from './underlying_payment_stream_final_price_payment_date'

export interface IUnderlyingPaymentStreamPaymentDates {
  UnderlyingPaymentStreamPaymentDateBusinessDayConvention?: number// [1] 40581 (Int)
  UnderlyingPaymentStreamPaymentDateBusinessCenterGrp?: IUnderlyingPaymentStreamPaymentDateBusinessCenterGrp// [2] NoUnderlyingPaymentStreamPaymentDateBusinessCenters.40969, UnderlyingPaymentStreamPaymentDateBusinessCenter.40582
  UnderlyingPaymentStreamPaymentDateGrp?: IUnderlyingPaymentStreamPaymentDateGrp// [3] NoUnderlyingPaymentStreamPaymentDates.41937, UnderlyingPaymentStreamPaymentDate.41938, UnderlyingPaymentStreamPaymentDateType.41939
  UnderlyingPaymentStreamPaymentFrequencyPeriod?: number// [4] 40583 (Int)
  UnderlyingPaymentStreamPaymentFrequencyUnit?: string// [5] 40584 (String)
  UnderlyingPaymentStreamPaymentRollConvention?: string// [6] 40585 (String)
  UnderlyingPaymentStreamFirstPaymentDateUnadjusted?: Date// [7] 40586 (LocalDate)
  UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted?: Date// [8] 40587 (LocalDate)
  UnderlyingPaymentStreamPaymentDateRelativeTo?: number// [9] 40588 (Int)
  UnderlyingPaymentStreamPaymentDateOffsetPeriod?: number// [10] 40589 (Int)
  UnderlyingPaymentStreamPaymentDateOffsetUnit?: string// [11] 40590 (String)
  UnderlyingPaymentStreamPaymentDateOffsetDayType?: number// [12] 40591 (Int)
  UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// [13] 41940 (Boolean)
  UnderlyingPaymentStreamFinalPricePaymentDate?: IUnderlyingPaymentStreamFinalPricePaymentDate// [14] UnderlyingPaymentStreamFinalPricePaymentDateUnadjusted.42949, UnderlyingPaymentStreamFinalPricePaymentDateRelativeTo.42950 .. UnderlyingPaymentStreamFinalPricePaymentDateAdjusted.42954
}
