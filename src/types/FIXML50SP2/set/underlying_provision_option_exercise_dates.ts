import { IUnderlyingProvisionOptionExerciseBusinessCenterGrp } from './underlying_provision_option_exercise_business_center_grp'
import { IUnderlyingProvisionOptionExerciseFixedDateGrp } from './underlying_provision_option_exercise_fixed_date_grp'

export interface IUnderlyingProvisionOptionExerciseDates {
  UnderlyingProvisionOptionExerciseBusinessDayConvention?: number// [1] 42115 (Int)
  UnderlyingProvisionOptionExerciseEarliestDateOffsetPeriod?: number// [1] 42116 (Int)
  UnderlyingProvisionOptionExerciseEarliestDateOffsetUnit?: string// [1] 42117 (String)
  UnderlyingProvisionOptionExerciseFrequencyPeriod?: number// [1] 42118 (Int)
  UnderlyingProvisionOptionExerciseFrequencyUnit?: string// [1] 42119 (String)
  UnderlyingProvisionOptionExerciseStartDateUnadjusted?: Date// [1] 42120 (LocalDate)
  UnderlyingProvisionOptionExerciseStartDateRelativeTo?: number// [1] 42121 (Int)
  UnderlyingProvisionOptionExerciseStartDateOffsetPeriod?: number// [1] 42122 (Int)
  UnderlyingProvisionOptionExerciseStartDateOffsetUnit?: string// [1] 42123 (String)
  UnderlyingProvisionOptionExerciseStartDateOffsetDayType?: number// [1] 42124 (Int)
  UnderlyingProvisionOptionExerciseStartDateAdjusted?: Date// [1] 42125 (LocalDate)
  UnderlyingProvisionOptionExercisePeriodSkip?: number// [1] 42126 (Int)
  UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date// [1] 42127 (LocalDate)
  UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted?: Date// [1] 42128 (LocalDate)
  UnderlyingProvisionOptionExerciseEarliestTime?: string// [1] 42129 (String)
  UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter?: string// [1] 42130 (String)
  UnderlyingProvisionOptionExerciseLatestTime?: string// [1] 42131 (String)
  UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter?: string// [1] 42132 (String)
  UnderlyingProvisionOptionExerciseBusinessCenterGrp?: IUnderlyingProvisionOptionExerciseBusinessCenterGrp[]// [1] Ctr.42185
  UnderlyingProvisionOptionExerciseFixedDateGrp?: IUnderlyingProvisionOptionExerciseFixedDateGrp[]// [2] Dt.42113, Typ.42114
}
