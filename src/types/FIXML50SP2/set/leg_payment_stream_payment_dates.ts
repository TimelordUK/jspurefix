import { ILegPaymentStreamPaymentDateBusinessCenterGrp } from './leg_payment_stream_payment_date_business_center_grp'
import { ILegPaymentStreamPaymentDateGrp } from './leg_payment_stream_payment_date_grp'
import { ILegPaymentStreamFinalPricePaymentDate } from './leg_payment_stream_final_price_payment_date'

export interface ILegPaymentStreamPaymentDates {
  LegPaymentStreamPaymentDateBusinessDayConvention?: number// [1] 40292 (Int)
  LegPaymentStreamPaymentFrequencyPeriod?: number// [1] 40294 (Int)
  LegPaymentStreamPaymentFrequencyUnit?: string// [1] 40295 (String)
  LegPaymentStreamPaymentRollConvention?: string// [1] 40296 (String)
  LegPaymentStreamFirstPaymentDateUnadjusted?: Date// [1] 40297 (LocalDate)
  LegPaymentStreamLastRegularPaymentDateUnadjusted?: Date// [1] 40298 (LocalDate)
  LegPaymentStreamPaymentDateRelativeTo?: number// [1] 40299 (Int)
  LegPaymentStreamPaymentDateOffsetPeriod?: number// [1] 40300 (Int)
  LegPaymentStreamPaymentDateOffsetUnit?: string// [1] 40301 (String)
  LegPaymentStreamPaymentDateOffsetDayType?: number// [1] 40302 (Int)
  LegPaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// [1] 41592 (Boolean)
  LegPaymentStreamPaymentDateBusinessCenterGrp?: ILegPaymentStreamPaymentDateBusinessCenterGrp[]// [1] Ctr.40293
  LegPaymentStreamPaymentDateGrp?: ILegPaymentStreamPaymentDateGrp[]// [2] Dt.41590, Typ.41591
  LegPaymentStreamFinalPricePaymentDate?: ILegPaymentStreamFinalPricePaymentDate// [3] DtUnadj.42453, Reltv.42454 .. Dt.42458
}
