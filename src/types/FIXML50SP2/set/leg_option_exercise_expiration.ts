import { ILegOptionExerciseExpirationDateBusinessCenterGrp } from './leg_option_exercise_expiration_date_business_center_grp'
import { ILegOptionExerciseExpirationDateGrp } from './leg_option_exercise_expiration_date_grp'

export interface ILegOptionExerciseExpiration {
  LegOptionExerciseExpirationDateBusinessDayConvention?: number// 41517
  LegOptionExerciseExpirationDateRelativeTo?: number// 41518
  LegOptionExerciseExpirationDateOffsetPeriod?: number// 41519
  LegOptionExerciseExpirationDateOffsetUnit?: string// 41520
  LegOptionExerciseExpirationFrequencyPeriod?: number// 41521
  LegOptionExerciseExpirationFrequencyUnit?: string// 41522
  LegOptionExerciseExpirationRollConvention?: string// 41523
  LegOptionExerciseExpirationDateOffsetDayType?: number// 41524
  LegOptionExerciseExpirationTime?: string// 41525
  LegOptionExerciseExpirationTimeBusinessCenter?: string// 41526
  LegOptionExerciseExpirationDateBusinessCenterGrp?: ILegOptionExerciseExpirationDateBusinessCenterGrp[]
  LegOptionExerciseExpirationDateGrp?: ILegOptionExerciseExpirationDateGrp[]
}
