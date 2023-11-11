import { ILegOptionExerciseBusinessCenterGrp } from './leg_option_exercise_business_center_grp'
import { ILegOptionExerciseDateGrp } from './leg_option_exercise_date_grp'

export interface ILegOptionExerciseDates {
  LegOptionExerciseBusinessDayConvention?: number// [1] 41493 (Int)
  LegOptionExerciseBusinessCenterGrp?: ILegOptionExerciseBusinessCenterGrp// [2] NoLegOptionExerciseBusinessCenters.41491, LegOptionExerciseBusinessCenter.41492
  LegOptionExerciseDateGrp?: ILegOptionExerciseDateGrp// [3] NoLegOptionExerciseDates.41512, LegOptionExerciseDate.41513, LegOptionExerciseDateType.41514
  LegOptionExerciseEarliestDateOffsetDayType?: number// [4] 41494 (Int)
  LegOptionExerciseEarliestDateOffsetPeriod?: number// [5] 41495 (Int)
  LegOptionExerciseEarliestDateOffsetUnit?: string// [6] 41496 (String)
  LegOptionExerciseFrequencyPeriod?: number// [7] 41497 (Int)
  LegOptionExerciseFrequencyUnit?: string// [8] 41498 (String)
  LegOptionExerciseStartDateUnadjusted?: Date// [9] 41499 (LocalDate)
  LegOptionExerciseStartDateRelativeTo?: number// [10] 41500 (Int)
  LegOptionExerciseStartDateOffsetPeriod?: number// [11] 41501 (Int)
  LegOptionExerciseStartDateOffsetUnit?: string// [12] 41502 (String)
  LegOptionExerciseStartDateOffsetDayType?: number// [13] 41503 (Int)
  LegOptionExerciseStartDateAdjusted?: Date// [14] 41504 (LocalDate)
  LegOptionExerciseSkip?: number// [15] 41505 (Int)
  LegOptionExerciseNominationDeadline?: Date// [16] 41506 (LocalDate)
  LegOptionExerciseFirstDateUnadjusted?: Date// [17] 41507 (LocalDate)
  LegOptionExerciseLastDateUnadjusted?: Date// [18] 41508 (LocalDate)
  LegOptionExerciseEarliestTime?: string// [19] 41509 (String)
  LegOptionExerciseLatestTime?: string// [20] 41510 (String)
  LegOptionExerciseTimeBusinessCenter?: string// [21] 41511 (String)
}
