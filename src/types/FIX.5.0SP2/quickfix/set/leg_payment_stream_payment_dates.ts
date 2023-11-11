import { ILegPaymentStreamPaymentDateBusinessCenterGrp } from './leg_payment_stream_payment_date_business_center_grp'
import { ILegPaymentStreamPaymentDateGrp } from './leg_payment_stream_payment_date_grp'
import { ILegPaymentStreamFinalPricePaymentDate } from './leg_payment_stream_final_price_payment_date'

export interface ILegPaymentStreamPaymentDates {
  LegPaymentStreamPaymentDateBusinessDayConvention?: number// [1] 40292 (Int)
  LegPaymentStreamPaymentDateBusinessCenterGrp?: ILegPaymentStreamPaymentDateBusinessCenterGrp// [2] NoLegPaymentStreamPaymentDateBusinessCenters.40930, LegPaymentStreamPaymentDateBusinessCenter.40293
  LegPaymentStreamPaymentDateGrp?: ILegPaymentStreamPaymentDateGrp// [3] NoLegPaymentStreamPaymentDates.41589, LegPaymentStreamPaymentDate.41590, LegPaymentStreamPaymentDateType.41591
  LegPaymentStreamPaymentFrequencyPeriod?: number// [4] 40294 (Int)
  LegPaymentStreamPaymentFrequencyUnit?: string// [5] 40295 (String)
  LegPaymentStreamPaymentRollConvention?: string// [6] 40296 (String)
  LegPaymentStreamFirstPaymentDateUnadjusted?: Date// [7] 40297 (LocalDate)
  LegPaymentStreamLastRegularPaymentDateUnadjusted?: Date// [8] 40298 (LocalDate)
  LegPaymentStreamPaymentDateRelativeTo?: number// [9] 40299 (Int)
  LegPaymentStreamPaymentDateOffsetPeriod?: number// [10] 40300 (Int)
  LegPaymentStreamPaymentDateOffsetUnit?: string// [11] 40301 (String)
  LegPaymentStreamPaymentDateOffsetDayType?: number// [12] 40302 (Int)
  LegPaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// [13] 41592 (Boolean)
  LegPaymentStreamFinalPricePaymentDate?: ILegPaymentStreamFinalPricePaymentDate// [14] LegPaymentStreamFinalPricePaymentDateUnadjusted.42453, LegPaymentStreamFinalPricePaymentDateRelativeTo.42454 .. LegPaymentStreamFinalPricePaymentDateAdjusted.42458
}
