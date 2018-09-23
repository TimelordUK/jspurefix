import { ILegOptionExerciseBusinessCenterGrp } from './leg_option_exercise_business_center_grp'
import { ILegOptionExerciseDateGrp } from './leg_option_exercise_date_grp'

export interface ILegOptionExerciseDates {
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingOptionExerciseEarliestDateOffsetDayType?: number// 41823
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
  UnderlyingOptionExerciseNominationDeadline?: Date// 41835
  UnderlyingPaymentStreamBoundsFirstDateUnadjusted?: Date// 42913
  UnderlyingPaymentStreamBoundsLastDateUnadjusted?: Date// 42914
  UnderlyingProvisionOptionExerciseEarliestTime?: string// 42129
  UnderlyingProvisionOptionExerciseLatestTime?: string// 42131
  UnderlyingProvisionCashSettlValueTimeBusinessCenter?: string// 42105
  LegOptionExerciseBusinessCenterGrp?: ILegOptionExerciseBusinessCenterGrp[]
  LegOptionExerciseDateGrp?: ILegOptionExerciseDateGrp[]
}
