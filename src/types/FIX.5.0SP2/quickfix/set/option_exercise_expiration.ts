import { IOptionExerciseExpirationDateBusinessCenterGrp } from './option_exercise_expiration_date_business_center_grp'
import { IOptionExerciseExpirationDateGrp } from './option_exercise_expiration_date_grp'

export interface IOptionExerciseExpiration {
  OptionExerciseExpirationDateBusinessDayConvention?: number// [1] 41142 (Int)
  OptionExerciseExpirationDateBusinessCenterGrp?: IOptionExerciseExpirationDateBusinessCenterGrp// [2] NoOptionExerciseExpirationDateBusinessCenters.41140, OptionExerciseExpirationDateBusinessCenter.41141
  OptionExerciseExpirationDateGrp?: IOptionExerciseExpirationDateGrp// [3] NoOptionExerciseExpirationDates.41152, OptionExerciseExpirationDate.41153, OptionExerciseExpirationDateType.41154
  OptionExerciseExpirationDateRelativeTo?: number// [4] 41143 (Int)
  OptionExerciseExpirationDateOffsetPeriod?: number// [5] 41144 (Int)
  OptionExerciseExpirationDateOffsetUnit?: string// [6] 41145 (String)
  OptionExerciseExpirationFrequencyPeriod?: number// [7] 41146 (Int)
  OptionExerciseExpirationFrequencyUnit?: string// [8] 41147 (String)
  OptionExerciseExpirationRollConvention?: string// [9] 41148 (String)
  OptionExerciseExpirationDateOffsetDayType?: number// [10] 41149 (Int)
  OptionExerciseExpirationTime?: string// [11] 41150 (String)
  OptionExerciseExpirationTimeBusinessCenter?: string// [12] 41151 (String)
}
