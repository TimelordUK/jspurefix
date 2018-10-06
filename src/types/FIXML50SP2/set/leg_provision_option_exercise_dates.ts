import { ILegProvisionOptionExerciseBusinessCenterGrp } from './leg_provision_option_exercise_business_center_grp'
import { ILegProvisionOptionExerciseFixedDateGrp } from './leg_provision_option_exercise_fixed_date_grp'

export interface ILegProvisionOptionExerciseDates {
  LegProvisionOptionExerciseBusinessDayConvention?: number// 40476
  LegProvisionOptionExerciseEarliestDateOffsetPeriod?: number// 40478
  LegProvisionOptionExerciseEarliestDateOffsetUnit?: string// 40479
  LegProvisionOptionExerciseFrequencyPeriod?: number// 40480
  LegProvisionOptionExerciseFrequencyUnit?: string// 40481
  LegProvisionOptionExerciseStartDateUnadjusted?: Date// 40482
  LegProvisionOptionExerciseStartDateRelativeTo?: number// 40483
  LegProvisionOptionExerciseStartDateOffsetPeriod?: number// 40484
  LegProvisionOptionExerciseStartDateOffsetUnit?: string// 40485
  LegProvisionOptionExerciseStartDateOffsetDayType?: number// 40486
  LegProvisionOptionExerciseStartDateAdjusted?: Date// 40487
  LegProvisionOptionExercisePeriodSkip?: number// 40488
  LegProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date// 40489
  LegProvisionOptionExerciseBoundsLastDateUnadjusted?: Date// 40490
  LegProvisionOptionExerciseEarliestTime?: string// 40491
  LegProvisionOptionExerciseEarliestTimeBusinessCenter?: string// 40492
  LegProvisionOptionExerciseLatestTime?: string// 40493
  LegProvisionOptionExerciseLatestTimeBusinessCenter?: string// 40494
  LegProvisionOptionExerciseBusinessCenterGrp?: ILegProvisionOptionExerciseBusinessCenterGrp[]
  LegProvisionOptionExerciseFixedDateGrp?: ILegProvisionOptionExerciseFixedDateGrp[]
}
