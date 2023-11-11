import { IProvisionOptionExerciseBusinessCenterGrp } from './provision_option_exercise_business_center_grp'
import { IProvisionOptionExerciseFixedDateGrp } from './provision_option_exercise_fixed_date_grp'

export interface IProvisionOptionExerciseDates {
  ProvisionOptionExerciseBusinessDayConvention?: number// [1] 40123 (Int)
  ProvisionOptionExerciseEarliestDateOffsetPeriod?: number// [1] 40125 (Int)
  ProvisionOptionExerciseEarliestDateOffsetUnit?: string// [1] 40126 (String)
  ProvisionOptionExerciseFrequencyPeriod?: number// [1] 40127 (Int)
  ProvisionOptionExerciseFrequencyUnit?: string// [1] 40128 (String)
  ProvisionOptionExerciseStartDateUnadjusted?: Date// [1] 40129 (LocalDate)
  ProvisionOptionExerciseStartDateRelativeTo?: number// [1] 40130 (Int)
  ProvisionOptionExerciseStartDateOffsetPeriod?: number// [1] 40131 (Int)
  ProvisionOptionExerciseStartDateOffsetUnit?: string// [1] 40132 (String)
  ProvisionOptionExerciseStartDateOffsetDayType?: number// [1] 40133 (Int)
  ProvisionOptionExerciseStartDateAdjusted?: Date// [1] 40134 (LocalDate)
  ProvisionOptionExercisePeriodSkip?: number// [1] 40135 (Int)
  ProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date// [1] 40136 (LocalDate)
  ProvisionOptionExerciseBoundsLastDateUnadjusted?: Date// [1] 40137 (LocalDate)
  ProvisionOptionExerciseEarliestTime?: string// [1] 40138 (String)
  ProvisionOptionExerciseEarliestTimeBusinessCenter?: string// [1] 40139 (String)
  ProvisionOptionExerciseLatestTime?: string// [1] 40140 (String)
  ProvisionOptionExerciseLatestTimeBusinessCenter?: string// [1] 40141 (String)
  ProvisionOptionExerciseBusinessCenterGrp?: IProvisionOptionExerciseBusinessCenterGrp[]// [1] Ctr.40124
  ProvisionOptionExerciseFixedDateGrp?: IProvisionOptionExerciseFixedDateGrp[]// [2] Dt.40143, Typ.40144
}
