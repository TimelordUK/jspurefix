import { IReturnRateValuationDateGrp } from './return_rate_valuation_date_grp'
import { IReturnRateValuationDateBusinessCenterGrp } from './return_rate_valuation_date_business_center_grp'

export interface IReturnRateDateGrpNoReturnRateDates {
  ReturnRateDateMode?: number// [1] 42710 (Int)
  ReturnRateValuationDateGrp?: IReturnRateValuationDateGrp// [2] NoReturnRateValuationDates.42772, ReturnRateValuationDate.42773, ReturnRateValuationDateType.42774
  ReturnRateValuationDateRelativeTo?: number// [3] 42711 (Int)
  ReturnRateValuationDateOffsetPeriod?: number// [4] 42712 (Int)
  ReturnRateValuationDateOffsetUnit?: string// [5] 42713 (String)
  ReturnRateValuationDateOffsetDayType?: number// [6] 42714 (Int)
  ReturnRateValuationStartDateUnadjusted?: Date// [7] 42715 (LocalDate)
  ReturnRateValuationStartDateRelativeTo?: number// [8] 42716 (Int)
  ReturnRateValuationStartDateOffsetPeriod?: number// [9] 42717 (Int)
  ReturnRateValuationStartDateOffsetUnit?: string// [10] 42718 (String)
  ReturnRateValuationStartDateOffsetDayType?: number// [11] 42719 (Int)
  ReturnRateValuationStartDateAdjusted?: Date// [12] 42720 (LocalDate)
  ReturnRateValuationEndDateUnadjusted?: Date// [13] 42721 (LocalDate)
  ReturnRateValuationEndDateRelativeTo?: number// [14] 42722 (Int)
  ReturnRateValuationEndDateOffsetPeriod?: number// [15] 42723 (Int)
  ReturnRateValuationEndDateOffsetUnit?: string// [16] 42724 (String)
  ReturnRateValuationEndDateOffsetDayType?: number// [17] 42725 (Int)
  ReturnRateValuationEndDateAdjusted?: Date// [18] 42726 (LocalDate)
  ReturnRateValuationFrequencyPeriod?: number// [19] 42727 (Int)
  ReturnRateValuationFrequencyUnit?: string// [20] 42728 (String)
  ReturnRateValuationFrequencyRollConvention?: string// [21] 42729 (String)
  ReturnRateValuationDateBusinessDayConvention?: number// [22] 42730 (Int)
  ReturnRateValuationDateBusinessCenterGrp?: IReturnRateValuationDateBusinessCenterGrp// [23] NoReturnRateValuationDateBusinessCenters.42770, ReturnRateValuationDateBusinessCenter.42771
}
