import { IUnderlyingSettlMethodElectionDate } from './underlying_settl_method_election_date'
import { IUnderlyingOptionExerciseDates } from './underlying_option_exercise_dates'
import { IUnderlyingOptionExerciseExpiration } from './underlying_option_exercise_expiration'
import { IUnderlyingOptionExerciseMakeWholeProvision } from './underlying_option_exercise_make_whole_provision'

export interface IUnderlyingOptionExercise {
  UnderlyingExerciseDesc?: string// 41810
  EncodedUnderlyingExerciseDescLen?: number// 41811
  EncodedUnderlyingExerciseDesc?: Buffer// 41812
  UnderlyingAutomaticExerciseIndicator?: boolean// 41813
  UnderlyingAutomaticExerciseThresholdRate?: number// 41814
  UnderlyingExerciseConfirmationMethod?: number// 41815
  UnderlyingManualNoticeBusinessCenter?: string// 41816
  UnderlyingFallbackExerciseIndicator?: boolean// 41817
  UnderlyingLimitedRightToConfirmIndicator?: boolean// 41818
  UnderlyingExerciseSplitTicketIndicator?: boolean// 41819
  UnderlyingSettlMethodElectingPartySide?: number// 42887
  UnderlyingSettlMethodElectionDate?: IUnderlyingSettlMethodElectionDate
  UnderlyingOptionExerciseDates?: IUnderlyingOptionExerciseDates
  UnderlyingOptionExerciseExpiration?: IUnderlyingOptionExerciseExpiration
  UnderlyingOptionExerciseMakeWholeProvision?: IUnderlyingOptionExerciseMakeWholeProvision
}
