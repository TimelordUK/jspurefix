import { IUnderlyingOptionExerciseBusinessCenterGrp } from './underlying_option_exercise_business_center_grp'
import { IUnderlyingOptionExerciseDateGrp } from './underlying_option_exercise_date_grp'

export interface IUnderlyingOptionExerciseDates {
  UnderlyingOptionExerciseBusinessDayConvention?: number// [1] 41822 (Int)
  UnderlyingOptionExerciseBusinessCenterGrp?: IUnderlyingOptionExerciseBusinessCenterGrp// [2] NoUnderlyingOptionExerciseBusinessCenters.41820, UnderlyingOptionExerciseBusinessCenter.41821
  UnderlyingOptionExerciseDateGrp?: IUnderlyingOptionExerciseDateGrp// [3] NoUnderlyingOptionExerciseDates.41841, UnderlyingOptionExerciseDate.41842, UnderlyingOptionExerciseDateType.41843
  UnderlyingOptionExerciseEarliestDateOffsetDayType?: number// [4] 41823 (Int)
  UnderlyingOptionExerciseEarliestDateOffsetPeriod?: number// [5] 41824 (Int)
  UnderlyingOptionExerciseEarliestDateOffsetUnit?: string// [6] 41825 (String)
  UnderlyingOptionExerciseFrequencyPeriod?: number// [7] 41826 (Int)
  UnderlyingOptionExerciseFrequencyUnit?: string// [8] 41827 (String)
  UnderlyingOptionExerciseStartDateUnadjusted?: Date// [9] 41828 (LocalDate)
  UnderlyingOptionExerciseStartDateRelativeTo?: number// [10] 41829 (Int)
  UnderlyingOptionExerciseStartDateOffsetPeriod?: number// [11] 41830 (Int)
  UnderlyingOptionExerciseStartDateOffsetUnit?: string// [12] 41831 (String)
  UnderlyingOptionExerciseStartDateOffsetDayType?: number// [13] 41832 (Int)
  UnderlyingOptionExerciseStartDateAdjusted?: Date// [14] 41833 (LocalDate)
  UnderlyingOptionExerciseSkip?: number// [15] 41834 (Int)
  UnderlyingOptionExerciseNominationDeadline?: Date// [16] 41835 (LocalDate)
  UnderlyingOptionExerciseFirstDateUnadjusted?: Date// [17] 41836 (LocalDate)
  UnderlyingOptionExerciseLastDateUnadjusted?: Date// [18] 41837 (LocalDate)
  UnderlyingOptionExerciseEarliestTime?: string// [19] 41838 (String)
  UnderlyingOptionExerciseLatestTime?: string// [20] 41839 (String)
  UnderlyingOptionExerciseTimeBusinessCenter?: string// [21] 41840 (String)
}
