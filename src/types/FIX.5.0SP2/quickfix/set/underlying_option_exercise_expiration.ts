import { IUnderlyingOptionExerciseExpirationDateBusinessCenterGrp } from './underlying_option_exercise_expiration_date_business_center_grp'
import { IUnderlyingOptionExerciseExpirationDateGrp } from './underlying_option_exercise_expiration_date_grp'

export interface IUnderlyingOptionExerciseExpiration {
  UnderlyingOptionExerciseExpirationDateBusinessDayConvention?: number// [1] 41846 (Int)
  UnderlyingOptionExerciseExpirationDateBusinessCenterGrp?: IUnderlyingOptionExerciseExpirationDateBusinessCenterGrp// [2] NoUnderlyingOptionExerciseExpirationDateBusinessCenters.41844, UnderlyingOptionExerciseExpirationDateBusinessCenter.41845
  UnderlyingOptionExerciseExpirationDateGrp?: IUnderlyingOptionExerciseExpirationDateGrp// [3] NoUnderlyingOptionExerciseExpirationDates.41856, UnderlyingOptionExerciseExpirationDate.41857, UnderlyingOptionExerciseExpirationDateType.41858
  UnderlyingOptionExerciseExpirationDateRelativeTo?: number// [4] 41847 (Int)
  UnderlyingOptionExerciseExpirationDateOffsetPeriod?: number// [5] 41848 (Int)
  UnderlyingOptionExerciseExpirationDateOffsetUnit?: string// [6] 41849 (String)
  UnderlyingOptionExerciseExpirationFrequencyPeriod?: number// [7] 41850 (Int)
  UnderlyingOptionExerciseExpirationFrequencyUnit?: string// [8] 41851 (String)
  UnderlyingOptionExerciseExpirationRollConvention?: string// [9] 41852 (String)
  UnderlyingOptionExerciseExpirationDateOffsetDayType?: number// [10] 41853 (Int)
  UnderlyingOptionExerciseExpirationTime?: string// [11] 41854 (String)
  UnderlyingOptionExerciseExpirationTimeBusinessCenter?: string// [12] 41855 (String)
}
