import { ILegOptionExerciseExpirationDateBusinessCenterGrp } from './leg_option_exercise_expiration_date_business_center_grp'
import { ILegOptionExerciseExpirationDateGrp } from './leg_option_exercise_expiration_date_grp'

export interface ILegOptionExerciseExpiration {
  LegOptionExerciseExpirationDateBusinessDayConvention?: number// [1] 41517 (Int)
  LegOptionExerciseExpirationDateRelativeTo?: number// [1] 41518 (Int)
  LegOptionExerciseExpirationDateOffsetPeriod?: number// [1] 41519 (Int)
  LegOptionExerciseExpirationDateOffsetUnit?: string// [1] 41520 (String)
  LegOptionExerciseExpirationFrequencyPeriod?: number// [1] 41521 (Int)
  LegOptionExerciseExpirationFrequencyUnit?: string// [1] 41522 (String)
  LegOptionExerciseExpirationRollConvention?: string// [1] 41523 (String)
  LegOptionExerciseExpirationDateOffsetDayType?: number// [1] 41524 (Int)
  LegOptionExerciseExpirationTime?: string// [1] 41525 (String)
  LegOptionExerciseExpirationTimeBusinessCenter?: string// [1] 41526 (String)
  LegOptionExerciseExpirationDateBusinessCenterGrp?: ILegOptionExerciseExpirationDateBusinessCenterGrp[]// [1] Ctr.41516
  LegOptionExerciseExpirationDateGrp?: ILegOptionExerciseExpirationDateGrp[]// [2] Dt.41528, Typ.41529
}
