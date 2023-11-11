import { IUnderlyingOptionExerciseExpirationDateBusinessCenterGrp } from './underlying_option_exercise_expiration_date_business_center_grp'
import { IUnderlyingOptionExerciseExpirationDateGrp } from './underlying_option_exercise_expiration_date_grp'

export interface IUnderlyingOptionExerciseExpiration {
  UnderlyingOptionExerciseExpirationDateBusinessDayConvention?: number// [1] 41846 (Int)
  UnderlyingOptionExerciseExpirationDateRelativeTo?: number// [1] 41847 (Int)
  UnderlyingOptionExerciseExpirationDateOffsetPeriod?: number// [1] 41848 (Int)
  UnderlyingOptionExerciseExpirationDateOffsetUnit?: string// [1] 41849 (String)
  UnderlyingOptionExerciseExpirationFrequencyPeriod?: number// [1] 41850 (Int)
  UnderlyingOptionExerciseExpirationFrequencyUnit?: string// [1] 41851 (String)
  UnderlyingOptionExerciseExpirationRollConvention?: string// [1] 41852 (String)
  UnderlyingOptionExerciseExpirationDateOffsetDayType?: number// [1] 41853 (Int)
  UnderlyingOptionExerciseExpirationTime?: string// [1] 41854 (String)
  UnderlyingOptionExerciseExpirationTimeBusinessCenter?: string// [1] 41855 (String)
  UnderlyingOptionExerciseExpirationDateBusinessCenterGrp?: IUnderlyingOptionExerciseExpirationDateBusinessCenterGrp[]// [1] Ctr.41845
  UnderlyingOptionExerciseExpirationDateGrp?: IUnderlyingOptionExerciseExpirationDateGrp[]// [2] Dt.41857, Typ.41858
}
