import { IProvisionOptionExerciseBusinessCenterGrp } from './provision_option_exercise_business_center_grp'
import { IProvisionOptionExerciseFixedDateGrp } from './provision_option_exercise_fixed_date_grp'

export interface IProvisionOptionExerciseDates {
  ProvisionOptionExerciseBusinessDayConvention?: number// 40123
  ProvisionOptionExerciseEarliestDateOffsetPeriod?: number// 40125
  ProvisionOptionExerciseEarliestDateOffsetUnit?: string// 40126
  ProvisionOptionExerciseFrequencyPeriod?: number// 40127
  ProvisionOptionExerciseFrequencyUnit?: string// 40128
  ProvisionOptionExerciseStartDateUnadjusted?: Date// 40129
  ProvisionOptionExerciseStartDateRelativeTo?: number// 40130
  ProvisionOptionExerciseStartDateOffsetPeriod?: number// 40131
  ProvisionOptionExerciseStartDateOffsetUnit?: string// 40132
  ProvisionOptionExerciseStartDateOffsetDayType?: number// 40133
  ProvisionOptionExerciseStartDateAdjusted?: Date// 40134
  ProvisionOptionExercisePeriodSkip?: number// 40135
  ProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date// 40136
  ProvisionOptionExerciseBoundsLastDateUnadjusted?: Date// 40137
  ProvisionOptionExerciseEarliestTime?: string// 40138
  ProvisionOptionExerciseEarliestTimeBusinessCenter?: string// 40139
  ProvisionOptionExerciseLatestTime?: string// 40140
  ProvisionOptionExerciseLatestTimeBusinessCenter?: string// 40141
  ProvisionOptionExerciseBusinessCenterGrp?: IProvisionOptionExerciseBusinessCenterGrp[]
  ProvisionOptionExerciseFixedDateGrp?: IProvisionOptionExerciseFixedDateGrp[]
}
