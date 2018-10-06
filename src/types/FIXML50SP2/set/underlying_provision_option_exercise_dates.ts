import { IUnderlyingProvisionOptionExerciseBusinessCenterGrp } from './underlying_provision_option_exercise_business_center_grp'
import { IUnderlyingProvisionOptionExerciseFixedDateGrp } from './underlying_provision_option_exercise_fixed_date_grp'

export interface IUnderlyingProvisionOptionExerciseDates {
  UnderlyingProvisionOptionExerciseBusinessDayConvention?: number// 42115
  UnderlyingProvisionOptionExerciseEarliestDateOffsetPeriod?: number// 42116
  UnderlyingProvisionOptionExerciseEarliestDateOffsetUnit?: string// 42117
  UnderlyingProvisionOptionExerciseFrequencyPeriod?: number// 42118
  UnderlyingProvisionOptionExerciseFrequencyUnit?: string// 42119
  UnderlyingProvisionOptionExerciseStartDateUnadjusted?: Date// 42120
  UnderlyingProvisionOptionExerciseStartDateRelativeTo?: number// 42121
  UnderlyingProvisionOptionExerciseStartDateOffsetPeriod?: number// 42122
  UnderlyingProvisionOptionExerciseStartDateOffsetUnit?: string// 42123
  UnderlyingProvisionOptionExerciseStartDateOffsetDayType?: number// 42124
  UnderlyingProvisionOptionExerciseStartDateAdjusted?: Date// 42125
  UnderlyingProvisionOptionExercisePeriodSkip?: number// 42126
  UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date// 42127
  UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted?: Date// 42128
  UnderlyingProvisionOptionExerciseEarliestTime?: string// 42129
  UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter?: string// 42130
  UnderlyingProvisionOptionExerciseLatestTime?: string// 42131
  UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter?: string// 42132
  UnderlyingProvisionOptionExerciseBusinessCenterGrp?: IUnderlyingProvisionOptionExerciseBusinessCenterGrp[]
  UnderlyingProvisionOptionExerciseFixedDateGrp?: IUnderlyingProvisionOptionExerciseFixedDateGrp[]
}
