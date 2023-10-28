import { IProvisionOptionExerciseBusinessCenterGrp } from './provision_option_exercise_business_center_grp'
import { IProvisionOptionExerciseFixedDateGrp } from './provision_option_exercise_fixed_date_grp'

export interface IProvisionOptionExerciseDates {
  ProvisionOptionExerciseBusinessDayConvention?: number// [1] 40123 (Int)
  ProvisionOptionExerciseBusinessCenterGrp?: IProvisionOptionExerciseBusinessCenterGrp// [2] NoProvisionOptionExerciseBusinessCenters.40954, ProvisionOptionExerciseBusinessCenter.40124
  ProvisionOptionExerciseFixedDateGrp?: IProvisionOptionExerciseFixedDateGrp// [3] NoProvisionOptionExerciseFixedDates.40142, ProvisionOptionExerciseFixedDate.40143, ProvisionOptionExerciseFixedDateType.40144
  ProvisionOptionExerciseEarliestDateOffsetPeriod?: number// [4] 40125 (Int)
  ProvisionOptionExerciseEarliestDateOffsetUnit?: string// [5] 40126 (String)
  ProvisionOptionExerciseFrequencyPeriod?: number// [6] 40127 (Int)
  ProvisionOptionExerciseFrequencyUnit?: string// [7] 40128 (String)
  ProvisionOptionExerciseStartDateUnadjusted?: Date// [8] 40129 (LocalDate)
  ProvisionOptionExerciseStartDateRelativeTo?: number// [9] 40130 (Int)
  ProvisionOptionExerciseStartDateOffsetPeriod?: number// [10] 40131 (Int)
  ProvisionOptionExerciseStartDateOffsetUnit?: string// [11] 40132 (String)
  ProvisionOptionExerciseStartDateOffsetDayType?: number// [12] 40133 (Int)
  ProvisionOptionExerciseStartDateAdjusted?: Date// [13] 40134 (LocalDate)
  ProvisionOptionExercisePeriodSkip?: number// [14] 40135 (Int)
  ProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date// [15] 40136 (LocalDate)
  ProvisionOptionExerciseBoundsLastDateUnadjusted?: Date// [16] 40137 (LocalDate)
  ProvisionOptionExerciseEarliestTime?: string// [17] 40138 (String)
  ProvisionOptionExerciseEarliestTimeBusinessCenter?: string// [18] 40139 (String)
  ProvisionOptionExerciseLatestTime?: string// [19] 40140 (String)
  ProvisionOptionExerciseLatestTimeBusinessCenter?: string// [20] 40141 (String)
}
