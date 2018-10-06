import { IUnderlyingReturnRateValuationDateGrp } from './underlying_return_rate_valuation_date_grp'
import { IUnderlyingReturnRateValuationDateBusinessCenterGrp } from './underlying_return_rate_valuation_date_business_center_grp'

export interface IUnderlyingReturnRateDateGrp {
  UnderlyingReturnRateDateMode?: number// 43009
  UnderlyingReturnRateValuationDateRelativeTo?: number// 43010
  UnderlyingReturnRateValuationDateOffsetPeriod?: number// 43011
  UnderlyingReturnRateValuationDateOffsetUnit?: string// 43012
  UnderlyingReturnRateValuationDateOffsetDayType?: number// 43013
  UnderlyingReturnRateValuationStartDateUnadjusted?: Date// 43014
  UnderlyingReturnRateValuationStartDateRelativeTo?: number// 43015
  UnderlyingReturnRateValuationStartDateOffsetPeriod?: number// 43016
  UnderlyingReturnRateValuationStartDateOffsetUnit?: string// 43017
  UnderlyingReturnRateValuationStartDateOffsetDayType?: number// 43018
  UnderlyingReturnRateValuationStartDateAdjusted?: Date// 43019
  UnderlyingReturnRateValuationEndDateUnadjusted?: Date// 43020
  UnderlyingReturnRateValuationEndDateRelativeTo?: number// 43021
  UnderlyingReturnRateValuationEndDateOffsetPeriod?: number// 43022
  UnderlyingReturnRateValuationEndDateOffsetUnit?: string// 43023
  UnderlyingReturnRateValuationEndDateOffsetDayType?: number// 43024
  UnderlyingReturnRateValuationEndDateAdjusted?: Date// 43025
  UnderlyingReturnRateValuationFrequencyPeriod?: number// 43026
  UnderlyingReturnRateValuationFrequencyUnit?: string// 43027
  UnderlyingReturnRateValuationFrequencyRollConvention?: string// 43028
  UnderlyingReturnRateValuationDateBusinessDayConvention?: number// 43029
  UnderlyingReturnRateValuationDateGrp?: IUnderlyingReturnRateValuationDateGrp[]
  UnderlyingReturnRateValuationDateBusinessCenterGrp?: IUnderlyingReturnRateValuationDateBusinessCenterGrp[]
}
