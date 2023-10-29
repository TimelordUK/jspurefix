import { ILegOptionExerciseExpirationDateBusinessCenterGrp } from './leg_option_exercise_expiration_date_business_center_grp'
import { ILegOptionExerciseExpirationDateGrp } from './leg_option_exercise_expiration_date_grp'

export interface ILegOptionExerciseExpiration {
  LegOptionExerciseExpirationDateBusinessDayConvention?: number// [1] 41517 (Int)
  LegOptionExerciseExpirationDateBusinessCenterGrp?: ILegOptionExerciseExpirationDateBusinessCenterGrp// [2] NoLegOptionExerciseExpirationDateBusinessCenters.41515, LegOptionExerciseExpirationDateBusinessCenter.41516
  LegOptionExerciseExpirationDateGrp?: ILegOptionExerciseExpirationDateGrp// [3] NoLegOptionExerciseExpirationDates.41527, LegOptionExerciseExpirationDate.41528, LegOptionExerciseExpirationDateType.41529
  LegOptionExerciseExpirationDateRelativeTo?: number// [4] 41518 (Int)
  LegOptionExerciseExpirationDateOffsetPeriod?: number// [5] 41519 (Int)
  LegOptionExerciseExpirationDateOffsetUnit?: string// [6] 41520 (String)
  LegOptionExerciseExpirationFrequencyPeriod?: number// [7] 41521 (Int)
  LegOptionExerciseExpirationFrequencyUnit?: string// [8] 41522 (String)
  LegOptionExerciseExpirationRollConvention?: string// [9] 41523 (String)
  LegOptionExerciseExpirationDateOffsetDayType?: number// [10] 41524 (Int)
  LegOptionExerciseExpirationTime?: string// [11] 41525 (String)
  LegOptionExerciseExpirationTimeBusinessCenter?: string// [12] 41526 (String)
}
