import { IReturnRateValuationDateGrp } from './return_rate_valuation_date_grp'
import { IReturnRateValuationDateBusinessCenterGrp } from './return_rate_valuation_date_business_center_grp'

export interface IReturnRateDateGrp {
  ReturnRateDateMode?: number// 42710
  ReturnRateValuationDateRelativeTo?: number// 42711
  ReturnRateValuationDateOffsetPeriod?: number// 42712
  ReturnRateValuationDateOffsetUnit?: string// 42713
  ReturnRateValuationDateOffsetDayType?: number// 42714
  ReturnRateValuationStartDateUnadjusted?: Date// 42715
  ReturnRateValuationStartDateRelativeTo?: number// 42716
  ReturnRateValuationStartDateOffsetPeriod?: number// 42717
  ReturnRateValuationStartDateOffsetUnit?: string// 42718
  ReturnRateValuationStartDateOffsetDayType?: number// 42719
  ReturnRateValuationStartDateAdjusted?: Date// 42720
  ReturnRateValuationEndDateUnadjusted?: Date// 42721
  ReturnRateValuationEndDateRelativeTo?: number// 42722
  ReturnRateValuationEndDateOffsetPeriod?: number// 42723
  ReturnRateValuationEndDateOffsetUnit?: string// 42724
  ReturnRateValuationEndDateOffsetDayType?: number// 42725
  ReturnRateValuationEndDateAdjusted?: Date// 42726
  ReturnRateValuationFrequencyPeriod?: number// 42727
  ReturnRateValuationFrequencyUnit?: string// 42728
  ReturnRateValuationFrequencyRollConvention?: string// 42729
  ReturnRateValuationDateBusinessDayConvention?: number// 42730
  ReturnRateValuationDateGrp?: IReturnRateValuationDateGrp[]
  ReturnRateValuationDateBusinessCenterGrp?: IReturnRateValuationDateBusinessCenterGrp[]
}
