import { IUnderlyingProvisionOptionExerciseBusinessCenterGrp } from './underlying_provision_option_exercise_business_center_grp'
import { IUnderlyingProvisionOptionExerciseFixedDateGrp } from './underlying_provision_option_exercise_fixed_date_grp'

export interface IUnderlyingProvisionOptionExerciseDates {
  UnderlyingProvisionOptionExerciseBusinessDayConvention?: number// [1] 42115 (Int)
  UnderlyingProvisionOptionExerciseBusinessCenterGrp?: IUnderlyingProvisionOptionExerciseBusinessCenterGrp// [2] NoUnderlyingProvisionOptionExerciseBusinessCenters.42184, UnderlyingProvisionOptionExerciseBusinessCenter.42185
  UnderlyingProvisionOptionExerciseFixedDateGrp?: IUnderlyingProvisionOptionExerciseFixedDateGrp// [3] NoUnderlyingProvisionOptionExerciseFixedDates.42112, UnderlyingProvisionOptionExerciseFixedDate.42113, UnderlyingProvisionOptionExerciseFixedDateType.42114
  UnderlyingProvisionOptionExerciseEarliestDateOffsetPeriod?: number// [4] 42116 (Int)
  UnderlyingProvisionOptionExerciseEarliestDateOffsetUnit?: string// [5] 42117 (String)
  UnderlyingProvisionOptionExerciseFrequencyPeriod?: number// [6] 42118 (Int)
  UnderlyingProvisionOptionExerciseFrequencyUnit?: string// [7] 42119 (String)
  UnderlyingProvisionOptionExerciseStartDateUnadjusted?: Date// [8] 42120 (LocalDate)
  UnderlyingProvisionOptionExerciseStartDateRelativeTo?: number// [9] 42121 (Int)
  UnderlyingProvisionOptionExerciseStartDateOffsetPeriod?: number// [10] 42122 (Int)
  UnderlyingProvisionOptionExerciseStartDateOffsetUnit?: string// [11] 42123 (String)
  UnderlyingProvisionOptionExerciseStartDateOffsetDayType?: number// [12] 42124 (Int)
  UnderlyingProvisionOptionExerciseStartDateAdjusted?: Date// [13] 42125 (LocalDate)
  UnderlyingProvisionOptionExercisePeriodSkip?: number// [14] 42126 (Int)
  UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date// [15] 42127 (LocalDate)
  UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted?: Date// [16] 42128 (LocalDate)
  UnderlyingProvisionOptionExerciseEarliestTime?: string// [17] 42129 (String)
  UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter?: string// [18] 42130 (String)
  UnderlyingProvisionOptionExerciseLatestTime?: string// [19] 42131 (String)
  UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter?: string// [20] 42132 (String)
}
