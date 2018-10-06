import { IUnderlyingOptionExerciseBusinessCenterGrp } from './underlying_option_exercise_business_center_grp'
import { IUnderlyingOptionExerciseDateGrp } from './underlying_option_exercise_date_grp'

export interface IUnderlyingOptionExerciseDates {
  UnderlyingOptionExerciseBusinessDayConvention?: number// 41822
  UnderlyingOptionExerciseEarliestDateOffsetDayType?: number// 41823
  UnderlyingOptionExerciseEarliestDateOffsetPeriod?: number// 41824
  UnderlyingOptionExerciseEarliestDateOffsetUnit?: string// 41825
  UnderlyingOptionExerciseFrequencyPeriod?: number// 41826
  UnderlyingOptionExerciseFrequencyUnit?: string// 41827
  UnderlyingOptionExerciseStartDateUnadjusted?: Date// 41828
  UnderlyingOptionExerciseStartDateRelativeTo?: number// 41829
  UnderlyingOptionExerciseStartDateOffsetPeriod?: number// 41830
  UnderlyingOptionExerciseStartDateOffsetUnit?: string// 41831
  UnderlyingOptionExerciseStartDateOffsetDayType?: number// 41832
  UnderlyingOptionExerciseStartDateAdjusted?: Date// 41833
  UnderlyingOptionExerciseSkip?: number// 41834
  UnderlyingOptionExerciseNominationDeadline?: Date// 41835
  UnderlyingOptionExerciseFirstDateUnadjusted?: Date// 41836
  UnderlyingOptionExerciseLastDateUnadjusted?: Date// 41837
  UnderlyingOptionExerciseEarliestTime?: string// 41838
  UnderlyingOptionExerciseLatestTime?: string// 41839
  UnderlyingOptionExerciseTimeBusinessCenter?: string// 41840
  UnderlyingOptionExerciseBusinessCenterGrp?: IUnderlyingOptionExerciseBusinessCenterGrp[]
  UnderlyingOptionExerciseDateGrp?: IUnderlyingOptionExerciseDateGrp[]
}
