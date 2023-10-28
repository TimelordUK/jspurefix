import { ILegProvisionOptionExerciseBusinessCenterGrp } from './leg_provision_option_exercise_business_center_grp'
import { ILegProvisionOptionExerciseFixedDateGrp } from './leg_provision_option_exercise_fixed_date_grp'

export interface ILegProvisionOptionExerciseDates {
  LegProvisionOptionExerciseBusinessDayConvention?: number// [1] 40476 (Int)
  LegProvisionOptionExerciseBusinessCenterGrp?: ILegProvisionOptionExerciseBusinessCenterGrp// [2] NoLegProvisionOptionExerciseBusinessCenters.40936, LegProvisionOptionExerciseBusinessCenter.40477
  LegProvisionOptionExerciseFixedDateGrp?: ILegProvisionOptionExerciseFixedDateGrp// [3] NoLegProvisionOptionExerciseFixedDates.40495, LegProvisionOptionExerciseFixedDate.40496, LegProvisionOptionExerciseFixedDateType.40497
  LegProvisionOptionExerciseEarliestDateOffsetPeriod?: number// [4] 40478 (Int)
  LegProvisionOptionExerciseEarliestDateOffsetUnit?: string// [5] 40479 (String)
  LegProvisionOptionExerciseFrequencyPeriod?: number// [6] 40480 (Int)
  LegProvisionOptionExerciseFrequencyUnit?: string// [7] 40481 (String)
  LegProvisionOptionExerciseStartDateUnadjusted?: Date// [8] 40482 (LocalDate)
  LegProvisionOptionExerciseStartDateRelativeTo?: number// [9] 40483 (Int)
  LegProvisionOptionExerciseStartDateOffsetPeriod?: number// [10] 40484 (Int)
  LegProvisionOptionExerciseStartDateOffsetUnit?: string// [11] 40485 (String)
  LegProvisionOptionExerciseStartDateOffsetDayType?: number// [12] 40486 (Int)
  LegProvisionOptionExerciseStartDateAdjusted?: Date// [13] 40487 (LocalDate)
  LegProvisionOptionExercisePeriodSkip?: number// [14] 40488 (Int)
  LegProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date// [15] 40489 (LocalDate)
  LegProvisionOptionExerciseBoundsLastDateUnadjusted?: Date// [16] 40490 (LocalDate)
  LegProvisionOptionExerciseEarliestTime?: string// [17] 40491 (String)
  LegProvisionOptionExerciseEarliestTimeBusinessCenter?: string// [18] 40492 (String)
  LegProvisionOptionExerciseLatestTime?: string// [19] 40493 (String)
  LegProvisionOptionExerciseLatestTimeBusinessCenter?: string// [20] 40494 (String)
}
