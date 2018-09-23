import { IUnderlyingProvisionOptionExerciseBusinessCenterGrp } from './underlying_provision_option_exercise_business_center_grp'
import { IUnderlyingProvisionOptionExerciseFixedDateGrp } from './underlying_provision_option_exercise_fixed_date_grp'

export interface IUnderlyingProvisionOptionExerciseDates {
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingProvisionOptionExerciseEarliestDateOffsetPeriod?: number// 42116
  UnderlyingProvisionOptionExerciseEarliestDateOffsetUnit?: string// 42117
  UnderlyingReturnRateValuationFrequencyPeriod?: number// 43026
  UnderlyingReturnRateValuationFrequencyUnit?: string// 43027
  UnderlyingReturnRateValuationStartDateUnadjusted?: Date// 43014
  UnderlyingReturnRateValuationStartDateRelativeTo?: number// 43015
  UnderlyingReturnRateValuationStartDateOffsetPeriod?: number// 43016
  UnderlyingReturnRateValuationStartDateOffsetUnit?: string// 43017
  UnderlyingReturnRateValuationStartDateOffsetDayType?: number// 43018
  UnderlyingReturnRateValuationStartDateAdjusted?: Date// 43019
  UnderlyingPaymentStreamCompoundingPeriodSkip?: number// 42909
  UnderlyingPaymentStreamBoundsFirstDateUnadjusted?: Date// 42913
  UnderlyingPaymentStreamBoundsLastDateUnadjusted?: Date// 42914
  UnderlyingProvisionOptionExerciseEarliestTime?: string// 42129
  UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter?: string// 42130
  UnderlyingProvisionOptionExerciseLatestTime?: string// 42131
  UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter?: string// 42132
  UnderlyingProvisionOptionExerciseBusinessCenterGrp?: IUnderlyingProvisionOptionExerciseBusinessCenterGrp[]
  UnderlyingProvisionOptionExerciseFixedDateGrp?: IUnderlyingProvisionOptionExerciseFixedDateGrp[]
}
