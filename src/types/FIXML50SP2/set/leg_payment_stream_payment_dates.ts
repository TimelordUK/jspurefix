import { ILegPaymentStreamPaymentDateBusinessCenterGrp } from './leg_payment_stream_payment_date_business_center_grp'
import { ILegPaymentStreamPaymentDateGrp } from './leg_payment_stream_payment_date_grp'
import { ILegPaymentStreamFinalPricePaymentDate } from './leg_payment_stream_final_price_payment_date'

export interface ILegPaymentStreamPaymentDates {
  LegPaymentStreamPaymentDateBusinessDayConvention?: number// 40292
  LegPaymentStreamPaymentFrequencyPeriod?: number// 40294
  LegPaymentStreamPaymentFrequencyUnit?: string// 40295
  LegPaymentStreamPaymentRollConvention?: string// 40296
  LegPaymentStreamFirstPaymentDateUnadjusted?: Date// 40297
  LegPaymentStreamLastRegularPaymentDateUnadjusted?: Date// 40298
  LegPaymentStreamPaymentDateRelativeTo?: number// 40299
  LegPaymentStreamPaymentDateOffsetPeriod?: number// 40300
  LegPaymentStreamPaymentDateOffsetUnit?: string// 40301
  LegPaymentStreamPaymentDateOffsetDayType?: number// 40302
  LegPaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// 41592
  LegPaymentStreamPaymentDateBusinessCenterGrp?: ILegPaymentStreamPaymentDateBusinessCenterGrp[]
  LegPaymentStreamPaymentDateGrp?: ILegPaymentStreamPaymentDateGrp[]
  LegPaymentStreamFinalPricePaymentDate?: ILegPaymentStreamFinalPricePaymentDate
}
