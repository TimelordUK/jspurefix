import { IOptionExerciseBusinessCenterGrp } from './option_exercise_business_center_grp'
import { IOptionExerciseDateGrp } from './option_exercise_date_grp'

export interface IOptionExerciseDates {
  OptionExerciseBusinessDayConvention?: number// 41118
  OptionExerciseEarliestDateOffsetDayType?: number// 41119
  OptionExerciseEarliestDateOffsetPeriod?: number// 41120
  OptionExerciseEarliestDateOffsetUnit?: string// 41121
  OptionExerciseFrequencyPeriod?: number// 41122
  OptionExerciseFrequencyUnit?: string// 41123
  OptionExerciseStartDateUnadjusted?: Date// 41124
  OptionExerciseStartDateRelativeTo?: number// 41125
  OptionExerciseStartDateOffsetPeriod?: number// 41126
  OptionExerciseStartDateOffsetUnit?: string// 41127
  OptionExerciseStartDateOffsetDayType?: number// 41128
  OptionExerciseStartDateAdjusted?: Date// 41129
  OptionExerciseSkip?: number// 41130
  OptionExerciseNominationDeadline?: Date// 41131
  OptionExerciseFirstDateUnadjusted?: Date// 41132
  OptionExerciseLastDateUnadjusted?: Date// 41133
  OptionExerciseEarliestTime?: string// 41134
  OptionExerciseLatestTime?: string// 41135
  OptionExerciseTimeBusinessCenter?: string// 41136
  OptionExerciseBusinessCenterGrp?: IOptionExerciseBusinessCenterGrp[]
  OptionExerciseDateGrp?: IOptionExerciseDateGrp[]
}
