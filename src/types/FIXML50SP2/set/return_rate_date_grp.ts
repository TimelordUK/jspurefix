import { IReturnRateValuationDateGrp } from './return_rate_valuation_date_grp'
import { IReturnRateValuationDateBusinessCenterGrp } from './return_rate_valuation_date_business_center_grp'

export interface IReturnRateDateGrp {
  ReturnRateDateMode?: number// [1] 42710 (Int)
  ReturnRateValuationDateRelativeTo?: number// [1] 42711 (Int)
  ReturnRateValuationDateOffsetPeriod?: number// [1] 42712 (Int)
  ReturnRateValuationDateOffsetUnit?: string// [1] 42713 (String)
  ReturnRateValuationDateOffsetDayType?: number// [1] 42714 (Int)
  ReturnRateValuationStartDateUnadjusted?: Date// [1] 42715 (LocalDate)
  ReturnRateValuationStartDateRelativeTo?: number// [1] 42716 (Int)
  ReturnRateValuationStartDateOffsetPeriod?: number// [1] 42717 (Int)
  ReturnRateValuationStartDateOffsetUnit?: string// [1] 42718 (String)
  ReturnRateValuationStartDateOffsetDayType?: number// [1] 42719 (Int)
  ReturnRateValuationStartDateAdjusted?: Date// [1] 42720 (LocalDate)
  ReturnRateValuationEndDateUnadjusted?: Date// [1] 42721 (LocalDate)
  ReturnRateValuationEndDateRelativeTo?: number// [1] 42722 (Int)
  ReturnRateValuationEndDateOffsetPeriod?: number// [1] 42723 (Int)
  ReturnRateValuationEndDateOffsetUnit?: string// [1] 42724 (String)
  ReturnRateValuationEndDateOffsetDayType?: number// [1] 42725 (Int)
  ReturnRateValuationEndDateAdjusted?: Date// [1] 42726 (LocalDate)
  ReturnRateValuationFrequencyPeriod?: number// [1] 42727 (Int)
  ReturnRateValuationFrequencyUnit?: string// [1] 42728 (String)
  ReturnRateValuationFrequencyRollConvention?: string// [1] 42729 (String)
  ReturnRateValuationDateBusinessDayConvention?: number// [1] 42730 (Int)
  ReturnRateValuationDateGrp?: IReturnRateValuationDateGrp[]// [1] Dt.42773, Typ.42774
  ReturnRateValuationDateBusinessCenterGrp?: IReturnRateValuationDateBusinessCenterGrp[]// [2] Ctr.42771
}
