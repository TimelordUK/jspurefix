import { IOptionExerciseExpirationDateBusinessCenterGrp } from './option_exercise_expiration_date_business_center_grp'
import { IOptionExerciseExpirationDateGrp } from './option_exercise_expiration_date_grp'

export interface IOptionExerciseExpiration {
  OptionExerciseExpirationDateBusinessDayConvention?: number// 41142
  OptionExerciseExpirationDateRelativeTo?: number// 41143
  OptionExerciseExpirationDateOffsetPeriod?: number// 41144
  OptionExerciseExpirationDateOffsetUnit?: string// 41145
  OptionExerciseExpirationFrequencyPeriod?: number// 41146
  OptionExerciseExpirationFrequencyUnit?: string// 41147
  OptionExerciseExpirationRollConvention?: string// 41148
  OptionExerciseExpirationDateOffsetDayType?: number// 41149
  OptionExerciseExpirationTime?: string// 41150
  OptionExerciseExpirationTimeBusinessCenter?: string// 41151
  OptionExerciseExpirationDateBusinessCenterGrp?: IOptionExerciseExpirationDateBusinessCenterGrp[]
  OptionExerciseExpirationDateGrp?: IOptionExerciseExpirationDateGrp[]
}
