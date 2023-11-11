import { ILegProvisionOptionExerciseBusinessCenterGrp } from './leg_provision_option_exercise_business_center_grp'
import { ILegProvisionOptionExerciseFixedDateGrp } from './leg_provision_option_exercise_fixed_date_grp'

export interface ILegProvisionOptionExerciseDates {
  LegProvisionOptionExerciseBusinessDayConvention?: number// [1] 40476 (Int)
  LegProvisionOptionExerciseEarliestDateOffsetPeriod?: number// [1] 40478 (Int)
  LegProvisionOptionExerciseEarliestDateOffsetUnit?: string// [1] 40479 (String)
  LegProvisionOptionExerciseFrequencyPeriod?: number// [1] 40480 (Int)
  LegProvisionOptionExerciseFrequencyUnit?: string// [1] 40481 (String)
  LegProvisionOptionExerciseStartDateUnadjusted?: Date// [1] 40482 (LocalDate)
  LegProvisionOptionExerciseStartDateRelativeTo?: number// [1] 40483 (Int)
  LegProvisionOptionExerciseStartDateOffsetPeriod?: number// [1] 40484 (Int)
  LegProvisionOptionExerciseStartDateOffsetUnit?: string// [1] 40485 (String)
  LegProvisionOptionExerciseStartDateOffsetDayType?: number// [1] 40486 (Int)
  LegProvisionOptionExerciseStartDateAdjusted?: Date// [1] 40487 (LocalDate)
  LegProvisionOptionExercisePeriodSkip?: number// [1] 40488 (Int)
  LegProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date// [1] 40489 (LocalDate)
  LegProvisionOptionExerciseBoundsLastDateUnadjusted?: Date// [1] 40490 (LocalDate)
  LegProvisionOptionExerciseEarliestTime?: string// [1] 40491 (String)
  LegProvisionOptionExerciseEarliestTimeBusinessCenter?: string// [1] 40492 (String)
  LegProvisionOptionExerciseLatestTime?: string// [1] 40493 (String)
  LegProvisionOptionExerciseLatestTimeBusinessCenter?: string// [1] 40494 (String)
  LegProvisionOptionExerciseBusinessCenterGrp?: ILegProvisionOptionExerciseBusinessCenterGrp[]// [1] Ctr.40477
  LegProvisionOptionExerciseFixedDateGrp?: ILegProvisionOptionExerciseFixedDateGrp[]// [2] Dt.40496, Typ.40497
}
