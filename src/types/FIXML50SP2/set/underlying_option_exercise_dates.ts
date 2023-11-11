import { IUnderlyingOptionExerciseBusinessCenterGrp } from './underlying_option_exercise_business_center_grp'
import { IUnderlyingOptionExerciseDateGrp } from './underlying_option_exercise_date_grp'

export interface IUnderlyingOptionExerciseDates {
  UnderlyingOptionExerciseBusinessDayConvention?: number// [1] 41822 (Int)
  UnderlyingOptionExerciseEarliestDateOffsetDayType?: number// [1] 41823 (Int)
  UnderlyingOptionExerciseEarliestDateOffsetPeriod?: number// [1] 41824 (Int)
  UnderlyingOptionExerciseEarliestDateOffsetUnit?: string// [1] 41825 (String)
  UnderlyingOptionExerciseFrequencyPeriod?: number// [1] 41826 (Int)
  UnderlyingOptionExerciseFrequencyUnit?: string// [1] 41827 (String)
  UnderlyingOptionExerciseStartDateUnadjusted?: Date// [1] 41828 (LocalDate)
  UnderlyingOptionExerciseStartDateRelativeTo?: number// [1] 41829 (Int)
  UnderlyingOptionExerciseStartDateOffsetPeriod?: number// [1] 41830 (Int)
  UnderlyingOptionExerciseStartDateOffsetUnit?: string// [1] 41831 (String)
  UnderlyingOptionExerciseStartDateOffsetDayType?: number// [1] 41832 (Int)
  UnderlyingOptionExerciseStartDateAdjusted?: Date// [1] 41833 (LocalDate)
  UnderlyingOptionExerciseSkip?: number// [1] 41834 (Int)
  UnderlyingOptionExerciseNominationDeadline?: Date// [1] 41835 (LocalDate)
  UnderlyingOptionExerciseFirstDateUnadjusted?: Date// [1] 41836 (LocalDate)
  UnderlyingOptionExerciseLastDateUnadjusted?: Date// [1] 41837 (LocalDate)
  UnderlyingOptionExerciseEarliestTime?: string// [1] 41838 (String)
  UnderlyingOptionExerciseLatestTime?: string// [1] 41839 (String)
  UnderlyingOptionExerciseTimeBusinessCenter?: string// [1] 41840 (String)
  UnderlyingOptionExerciseBusinessCenterGrp?: IUnderlyingOptionExerciseBusinessCenterGrp[]// [1] Ctr.41821
  UnderlyingOptionExerciseDateGrp?: IUnderlyingOptionExerciseDateGrp[]// [2] Dt.41842, Typ.41843
}
