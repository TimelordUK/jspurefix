import { ILegOptionExerciseBusinessCenterGrp } from './leg_option_exercise_business_center_grp'
import { ILegOptionExerciseDateGrp } from './leg_option_exercise_date_grp'

export interface ILegOptionExerciseDates {
  LegOptionExerciseBusinessDayConvention?: number// [1] 41493 (Int)
  LegOptionExerciseEarliestDateOffsetDayType?: number// [1] 41494 (Int)
  LegOptionExerciseEarliestDateOffsetPeriod?: number// [1] 41495 (Int)
  LegOptionExerciseEarliestDateOffsetUnit?: string// [1] 41496 (String)
  LegOptionExerciseFrequencyPeriod?: number// [1] 41497 (Int)
  LegOptionExerciseFrequencyUnit?: string// [1] 41498 (String)
  LegOptionExerciseStartDateUnadjusted?: Date// [1] 41499 (LocalDate)
  LegOptionExerciseStartDateRelativeTo?: number// [1] 41500 (Int)
  LegOptionExerciseStartDateOffsetPeriod?: number// [1] 41501 (Int)
  LegOptionExerciseStartDateOffsetUnit?: string// [1] 41502 (String)
  LegOptionExerciseStartDateOffsetDayType?: number// [1] 41503 (Int)
  LegOptionExerciseStartDateAdjusted?: Date// [1] 41504 (LocalDate)
  LegOptionExerciseSkip?: number// [1] 41505 (Int)
  LegOptionExerciseNominationDeadline?: Date// [1] 41506 (LocalDate)
  LegOptionExerciseFirstDateUnadjusted?: Date// [1] 41507 (LocalDate)
  LegOptionExerciseLastDateUnadjusted?: Date// [1] 41508 (LocalDate)
  LegOptionExerciseEarliestTime?: string// [1] 41509 (String)
  LegOptionExerciseLatestTime?: string// [1] 41510 (String)
  LegOptionExerciseTimeBusinessCenter?: string// [1] 41511 (String)
  LegOptionExerciseBusinessCenterGrp?: ILegOptionExerciseBusinessCenterGrp[]// [1] Ctr.41492
  LegOptionExerciseDateGrp?: ILegOptionExerciseDateGrp[]// [2] Dt.41513, Typ.41514
}
