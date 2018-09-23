import { IOptionExerciseExpirationDateBusinessCenterGrp } from './option_exercise_expiration_date_business_center_grp'
import { IOptionExerciseExpirationDateGrp } from './option_exercise_expiration_date_grp'

export interface IOptionExerciseExpiration {
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// 43079
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// 43080
  UnderlyingReturnRateValuationFrequencyPeriod?: number// 43026
  UnderlyingReturnRateValuationFrequencyUnit?: string// 43027
  UnderlyingReturnRateValuationFrequencyRollConvention?: string// 43028
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// 43081
  UnderlyingProvisionCashSettlValueTime?: string// 42104
  UnderlyingProvisionCashSettlValueTimeBusinessCenter?: string// 42105
  OptionExerciseExpirationDateBusinessCenterGrp?: IOptionExerciseExpirationDateBusinessCenterGrp[]
  OptionExerciseExpirationDateGrp?: IOptionExerciseExpirationDateGrp[]
}
