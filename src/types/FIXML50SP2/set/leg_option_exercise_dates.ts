import { ILegOptionExerciseBusinessCenterGrp } from './leg_option_exercise_business_center_grp'
import { ILegOptionExerciseDateGrp } from './leg_option_exercise_date_grp'

export interface ILegOptionExerciseDates {
  LegOptionExerciseBusinessDayConvention?: number// 41493
  LegOptionExerciseEarliestDateOffsetDayType?: number// 41494
  LegOptionExerciseEarliestDateOffsetPeriod?: number// 41495
  LegOptionExerciseEarliestDateOffsetUnit?: string// 41496
  LegOptionExerciseFrequencyPeriod?: number// 41497
  LegOptionExerciseFrequencyUnit?: string// 41498
  LegOptionExerciseStartDateUnadjusted?: Date// 41499
  LegOptionExerciseStartDateRelativeTo?: number// 41500
  LegOptionExerciseStartDateOffsetPeriod?: number// 41501
  LegOptionExerciseStartDateOffsetUnit?: string// 41502
  LegOptionExerciseStartDateOffsetDayType?: number// 41503
  LegOptionExerciseStartDateAdjusted?: Date// 41504
  LegOptionExerciseSkip?: number// 41505
  LegOptionExerciseNominationDeadline?: Date// 41506
  LegOptionExerciseFirstDateUnadjusted?: Date// 41507
  LegOptionExerciseLastDateUnadjusted?: Date// 41508
  LegOptionExerciseEarliestTime?: string// 41509
  LegOptionExerciseLatestTime?: string// 41510
  LegOptionExerciseTimeBusinessCenter?: string// 41511
  LegOptionExerciseBusinessCenterGrp?: ILegOptionExerciseBusinessCenterGrp[]
  LegOptionExerciseDateGrp?: ILegOptionExerciseDateGrp[]
}
