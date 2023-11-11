import { IUnderlyingReturnRateValuationDateGrp } from './underlying_return_rate_valuation_date_grp'
import { IUnderlyingReturnRateValuationDateBusinessCenterGrp } from './underlying_return_rate_valuation_date_business_center_grp'

export interface IUnderlyingReturnRateDateGrp {
  UnderlyingReturnRateDateMode?: number// [1] 43009 (Int)
  UnderlyingReturnRateValuationDateRelativeTo?: number// [1] 43010 (Int)
  UnderlyingReturnRateValuationDateOffsetPeriod?: number// [1] 43011 (Int)
  UnderlyingReturnRateValuationDateOffsetUnit?: string// [1] 43012 (String)
  UnderlyingReturnRateValuationDateOffsetDayType?: number// [1] 43013 (Int)
  UnderlyingReturnRateValuationStartDateUnadjusted?: Date// [1] 43014 (LocalDate)
  UnderlyingReturnRateValuationStartDateRelativeTo?: number// [1] 43015 (Int)
  UnderlyingReturnRateValuationStartDateOffsetPeriod?: number// [1] 43016 (Int)
  UnderlyingReturnRateValuationStartDateOffsetUnit?: string// [1] 43017 (String)
  UnderlyingReturnRateValuationStartDateOffsetDayType?: number// [1] 43018 (Int)
  UnderlyingReturnRateValuationStartDateAdjusted?: Date// [1] 43019 (LocalDate)
  UnderlyingReturnRateValuationEndDateUnadjusted?: Date// [1] 43020 (LocalDate)
  UnderlyingReturnRateValuationEndDateRelativeTo?: number// [1] 43021 (Int)
  UnderlyingReturnRateValuationEndDateOffsetPeriod?: number// [1] 43022 (Int)
  UnderlyingReturnRateValuationEndDateOffsetUnit?: string// [1] 43023 (String)
  UnderlyingReturnRateValuationEndDateOffsetDayType?: number// [1] 43024 (Int)
  UnderlyingReturnRateValuationEndDateAdjusted?: Date// [1] 43025 (LocalDate)
  UnderlyingReturnRateValuationFrequencyPeriod?: number// [1] 43026 (Int)
  UnderlyingReturnRateValuationFrequencyUnit?: string// [1] 43027 (String)
  UnderlyingReturnRateValuationFrequencyRollConvention?: string// [1] 43028 (String)
  UnderlyingReturnRateValuationDateBusinessDayConvention?: number// [1] 43029 (Int)
  UnderlyingReturnRateValuationDateGrp?: IUnderlyingReturnRateValuationDateGrp[]// [1] Dt.43072, Typ.43073
  UnderlyingReturnRateValuationDateBusinessCenterGrp?: IUnderlyingReturnRateValuationDateBusinessCenterGrp[]// [2] Ctr.43070
}
