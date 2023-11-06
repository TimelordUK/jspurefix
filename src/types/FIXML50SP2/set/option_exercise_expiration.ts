import { IOptionExerciseExpirationDateBusinessCenterGrp } from './option_exercise_expiration_date_business_center_grp'
import { IOptionExerciseExpirationDateGrp } from './option_exercise_expiration_date_grp'

export interface IOptionExerciseExpiration {
  OptionExerciseExpirationDateBusinessDayConvention?: number// [1] 41142 (Int)
  OptionExerciseExpirationDateRelativeTo?: number// [1] 41143 (Int)
  OptionExerciseExpirationDateOffsetPeriod?: number// [1] 41144 (Int)
  OptionExerciseExpirationDateOffsetUnit?: string// [1] 41145 (String)
  OptionExerciseExpirationFrequencyPeriod?: number// [1] 41146 (Int)
  OptionExerciseExpirationFrequencyUnit?: string// [1] 41147 (String)
  OptionExerciseExpirationRollConvention?: string// [1] 41148 (String)
  OptionExerciseExpirationDateOffsetDayType?: number// [1] 41149 (Int)
  OptionExerciseExpirationTime?: string// [1] 41150 (String)
  OptionExerciseExpirationTimeBusinessCenter?: string// [1] 41151 (String)
  OptionExerciseExpirationDateBusinessCenterGrp?: IOptionExerciseExpirationDateBusinessCenterGrp[]// [1] Ctr.41141
  OptionExerciseExpirationDateGrp?: IOptionExerciseExpirationDateGrp[]// [2] Dt.41153, Typ.41154
}
