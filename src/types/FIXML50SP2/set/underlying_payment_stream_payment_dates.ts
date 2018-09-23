import { IUnderlyingPaymentStreamPaymentDateBusinessCenterGrp } from './underlying_payment_stream_payment_date_business_center_grp'
import { IUnderlyingPaymentStreamPaymentDateGrp } from './underlying_payment_stream_payment_date_grp'
import { IUnderlyingPaymentStreamFinalPricePaymentDate } from './underlying_payment_stream_final_price_payment_date'

export interface IUnderlyingPaymentStreamPaymentDates {
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
  UnderlyingPaymentStreamPaymentDateBusinessCenterGrp?: IUnderlyingPaymentStreamPaymentDateBusinessCenterGrp[]
  UnderlyingPaymentStreamPaymentDateGrp?: IUnderlyingPaymentStreamPaymentDateGrp[]
  UnderlyingPaymentStreamFinalPricePaymentDate?: IUnderlyingPaymentStreamFinalPricePaymentDate
}
