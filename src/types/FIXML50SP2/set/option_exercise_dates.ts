import { IOptionExerciseBusinessCenterGrp } from './option_exercise_business_center_grp'
import { IOptionExerciseDateGrp } from './option_exercise_date_grp'

export interface IOptionExerciseDates {
  OptionExerciseBusinessDayConvention?: number// [1] 41118 (Int)
  OptionExerciseEarliestDateOffsetDayType?: number// [1] 41119 (Int)
  OptionExerciseEarliestDateOffsetPeriod?: number// [1] 41120 (Int)
  OptionExerciseEarliestDateOffsetUnit?: string// [1] 41121 (String)
  OptionExerciseFrequencyPeriod?: number// [1] 41122 (Int)
  OptionExerciseFrequencyUnit?: string// [1] 41123 (String)
  OptionExerciseStartDateUnadjusted?: Date// [1] 41124 (LocalDate)
  OptionExerciseStartDateRelativeTo?: number// [1] 41125 (Int)
  OptionExerciseStartDateOffsetPeriod?: number// [1] 41126 (Int)
  OptionExerciseStartDateOffsetUnit?: string// [1] 41127 (String)
  OptionExerciseStartDateOffsetDayType?: number// [1] 41128 (Int)
  OptionExerciseStartDateAdjusted?: Date// [1] 41129 (LocalDate)
  OptionExerciseSkip?: number// [1] 41130 (Int)
  OptionExerciseNominationDeadline?: Date// [1] 41131 (LocalDate)
  OptionExerciseFirstDateUnadjusted?: Date// [1] 41132 (LocalDate)
  OptionExerciseLastDateUnadjusted?: Date// [1] 41133 (LocalDate)
  OptionExerciseEarliestTime?: string// [1] 41134 (String)
  OptionExerciseLatestTime?: string// [1] 41135 (String)
  OptionExerciseTimeBusinessCenter?: string// [1] 41136 (String)
  OptionExerciseBusinessCenterGrp?: IOptionExerciseBusinessCenterGrp[]// [1] Ctr.41117
  OptionExerciseDateGrp?: IOptionExerciseDateGrp[]// [2] Dt.41138, Typ.41139
}
