import { ILegSettlMethodElectionDate } from './leg_settl_method_election_date'
import { ILegOptionExerciseDates } from './leg_option_exercise_dates'
import { ILegOptionExerciseExpiration } from './leg_option_exercise_expiration'
import { ILegOptionExerciseMakeWholeProvision } from './leg_option_exercise_make_whole_provision'

export interface ILegOptionExercise {
  LegExerciseDesc?: string// 41481
  EncodedLegExerciseDescLen?: number// 41482
  EncodedLegExerciseDesc?: Buffer// 41483
  LegAutomaticExerciseIndicator?: boolean// 41484
  LegAutomaticExerciseThresholdRate?: number// 41485
  LegExerciseConfirmationMethod?: number// 41486
  LegManualNoticeBusinessCenter?: string// 41487
  LegFallbackExerciseIndicator?: boolean// 41488
  LegLimitRightToConfirmIndicator?: boolean// 41489
  LegExerciseSplitTicketIndicator?: boolean// 41490
  LegSettlMethodElectingPartySide?: number// 42391
  LegSettlMethodElectionDate?: ILegSettlMethodElectionDate
  LegOptionExerciseDates?: ILegOptionExerciseDates
  LegOptionExerciseExpiration?: ILegOptionExerciseExpiration
  LegOptionExerciseMakeWholeProvision?: ILegOptionExerciseMakeWholeProvision
}
