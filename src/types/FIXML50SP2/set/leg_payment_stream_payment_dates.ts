import { ILegPaymentStreamPaymentDateBusinessCenterGrp } from './leg_payment_stream_payment_date_business_center_grp'
import { ILegPaymentStreamPaymentDateGrp } from './leg_payment_stream_payment_date_grp'
import { ILegPaymentStreamFinalPricePaymentDate } from './leg_payment_stream_final_price_payment_date'

export interface ILegPaymentStreamPaymentDates {
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingReturnRateValuationFrequencyPeriod?: number// 43026
  UnderlyingReturnRateValuationFrequencyUnit?: string// 43027
  UnderlyingReturnRateValuationFrequencyRollConvention?: string// 43028
  UnderlyingPaymentStreamBoundsFirstDateUnadjusted?: Date// 42913
  PaymentStreamLastRegularPaymentDateUnadjusted?: Date// 40757
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// 43079
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// 43080
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// 43081
  UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator?: string// 41940
  LegPaymentStreamPaymentDateBusinessCenterGrp?: ILegPaymentStreamPaymentDateBusinessCenterGrp[]
  LegPaymentStreamPaymentDateGrp?: ILegPaymentStreamPaymentDateGrp[]
  LegPaymentStreamFinalPricePaymentDate?: ILegPaymentStreamFinalPricePaymentDate
}
