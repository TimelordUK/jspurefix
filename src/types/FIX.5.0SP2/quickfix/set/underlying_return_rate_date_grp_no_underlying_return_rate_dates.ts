import { IUnderlyingReturnRateValuationDateGrp } from './underlying_return_rate_valuation_date_grp'
import { IUnderlyingReturnRateValuationDateBusinessCenterGrp } from './underlying_return_rate_valuation_date_business_center_grp'

export interface IUnderlyingReturnRateDateGrpNoUnderlyingReturnRateDates {
  UnderlyingReturnRateDateMode?: number// [1] 43009 (Int)
  UnderlyingReturnRateValuationDateGrp?: IUnderlyingReturnRateValuationDateGrp// [2] NoUnderlyingReturnRateValuationDates.43071, UnderlyingReturnRateValuationDate.43072, UnderlyingReturnRateValuationDateType.43073
  UnderlyingReturnRateValuationDateRelativeTo?: number// [3] 43010 (Int)
  UnderlyingReturnRateValuationDateOffsetPeriod?: number// [4] 43011 (Int)
  UnderlyingReturnRateValuationDateOffsetUnit?: string// [5] 43012 (String)
  UnderlyingReturnRateValuationDateOffsetDayType?: number// [6] 43013 (Int)
  UnderlyingReturnRateValuationStartDateUnadjusted?: Date// [7] 43014 (LocalDate)
  UnderlyingReturnRateValuationStartDateRelativeTo?: number// [8] 43015 (Int)
  UnderlyingReturnRateValuationStartDateOffsetPeriod?: number// [9] 43016 (Int)
  UnderlyingReturnRateValuationStartDateOffsetUnit?: string// [10] 43017 (String)
  UnderlyingReturnRateValuationStartDateOffsetDayType?: number// [11] 43018 (Int)
  UnderlyingReturnRateValuationStartDateAdjusted?: Date// [12] 43019 (LocalDate)
  UnderlyingReturnRateValuationEndDateUnadjusted?: Date// [13] 43020 (LocalDate)
  UnderlyingReturnRateValuationEndDateRelativeTo?: number// [14] 43021 (Int)
  UnderlyingReturnRateValuationEndDateOffsetPeriod?: number// [15] 43022 (Int)
  UnderlyingReturnRateValuationEndDateOffsetUnit?: string// [16] 43023 (String)
  UnderlyingReturnRateValuationEndDateOffsetDayType?: number// [17] 43024 (Int)
  UnderlyingReturnRateValuationEndDateAdjusted?: Date// [18] 43025 (LocalDate)
  UnderlyingReturnRateValuationFrequencyPeriod?: number// [19] 43026 (Int)
  UnderlyingReturnRateValuationFrequencyUnit?: string// [20] 43027 (String)
  UnderlyingReturnRateValuationFrequencyRollConvention?: string// [21] 43028 (String)
  UnderlyingReturnRateValuationDateBusinessDayConvention?: number// [22] 43029 (Int)
  UnderlyingReturnRateValuationDateBusinessCenterGrp?: IUnderlyingReturnRateValuationDateBusinessCenterGrp// [23] NoUnderlyingReturnRateValuationDateBusinessCenters.43069, UnderlyingReturnRateValuationDateBusinessCenter.43070
}
