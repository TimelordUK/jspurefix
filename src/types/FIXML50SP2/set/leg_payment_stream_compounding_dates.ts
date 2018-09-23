import { ILegPaymentStreamCompoundingDatesBusinessCenterGrp } from './leg_payment_stream_compounding_dates_business_center_grp'
import { ILegPaymentStreamCompoundingDateGrp } from './leg_payment_stream_compounding_date_grp'
import { ILegPaymentStreamCompoundingStartDate } from './leg_payment_stream_compounding_start_date'
import { ILegPaymentStreamCompoundingEndDate } from './leg_payment_stream_compounding_end_date'

export interface ILegPaymentStreamCompoundingDates {
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// 43079
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// 43080
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// 43081
  UnderlyingPaymentStreamCompoundingPeriodSkip?: number// 42909
  UnderlyingReturnRateValuationFrequencyPeriod?: number// 43026
  UnderlyingReturnRateValuationFrequencyUnit?: string// 43027
  UnderlyingReturnRateValuationFrequencyRollConvention?: string// 43028
  UnderlyingPaymentStreamBoundsFirstDateUnadjusted?: Date// 42913
  UnderlyingPaymentStreamBoundsLastDateUnadjusted?: Date// 42914
  LegPaymentStreamCompoundingDatesBusinessCenterGrp?: ILegPaymentStreamCompoundingDatesBusinessCenterGrp[]
  LegPaymentStreamCompoundingDateGrp?: ILegPaymentStreamCompoundingDateGrp[]
  LegPaymentStreamCompoundingStartDate?: ILegPaymentStreamCompoundingStartDate
  LegPaymentStreamCompoundingEndDate?: ILegPaymentStreamCompoundingEndDate
}
