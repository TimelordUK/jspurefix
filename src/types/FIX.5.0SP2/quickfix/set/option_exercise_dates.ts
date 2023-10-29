import { IOptionExerciseBusinessCenterGrp } from './option_exercise_business_center_grp'
import { IOptionExerciseDateGrp } from './option_exercise_date_grp'

export interface IOptionExerciseDates {
  OptionExerciseBusinessDayConvention?: number// [1] 41118 (Int)
  OptionExerciseBusinessCenterGrp?: IOptionExerciseBusinessCenterGrp// [2] NoOptionExerciseBusinessCenters.41116, OptionExerciseBusinessCenter.41117
  OptionExerciseDateGrp?: IOptionExerciseDateGrp// [3] NoOptionExerciseDates.41137, OptionExerciseDate.41138, OptionExerciseDateType.41139
  OptionExerciseEarliestDateOffsetDayType?: number// [4] 41119 (Int)
  OptionExerciseEarliestDateOffsetPeriod?: number// [5] 41120 (Int)
  OptionExerciseEarliestDateOffsetUnit?: string// [6] 41121 (String)
  OptionExerciseFrequencyPeriod?: number// [7] 41122 (Int)
  OptionExerciseFrequencyUnit?: string// [8] 41123 (String)
  OptionExerciseStartDateUnadjusted?: Date// [9] 41124 (LocalDate)
  OptionExerciseStartDateRelativeTo?: number// [10] 41125 (Int)
  OptionExerciseStartDateOffsetPeriod?: number// [11] 41126 (Int)
  OptionExerciseStartDateOffsetUnit?: string// [12] 41127 (String)
  OptionExerciseStartDateOffsetDayType?: number// [13] 41128 (Int)
  OptionExerciseStartDateAdjusted?: Date// [14] 41129 (LocalDate)
  OptionExerciseSkip?: number// [15] 41130 (Int)
  OptionExerciseNominationDeadline?: Date// [16] 41131 (LocalDate)
  OptionExerciseFirstDateUnadjusted?: Date// [17] 41132 (LocalDate)
  OptionExerciseLastDateUnadjusted?: Date// [18] 41133 (LocalDate)
  OptionExerciseEarliestTime?: string// [19] 41134 (String)
  OptionExerciseLatestTime?: string// [20] 41135 (String)
  OptionExerciseTimeBusinessCenter?: string// [21] 41136 (String)
}
