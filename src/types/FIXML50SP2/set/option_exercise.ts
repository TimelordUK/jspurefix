import { ISettlMethodElectionDate } from './settl_method_election_date'
import { IOptionExerciseDates } from './option_exercise_dates'
import { IOptionExerciseExpiration } from './option_exercise_expiration'
import { IOptionExerciseMakeWholeProvision } from './option_exercise_make_whole_provision'

export interface IOptionExercise {
  ExerciseDesc?: string// 41106
  EncodedExerciseDescLen?: number// 41107
  EncodedExerciseDesc?: Buffer// 41108
  AutomaticExerciseIndicator?: boolean// 41109
  AutomaticExerciseThresholdRate?: number// 41110
  ExerciseConfirmationMethod?: number// 41111
  ManualNoticeBusinessCenter?: string// 41112
  FallbackExerciseIndicator?: boolean// 41113
  LimitedRightToConfirmIndicator?: boolean// 41114
  ExerciseSplitTicketIndicator?: boolean// 41115
  SettlMethodElectingPartySide?: number// 42590
  SettlMethodElectionDate?: ISettlMethodElectionDate
  OptionExerciseDates?: IOptionExerciseDates
  OptionExerciseExpiration?: IOptionExerciseExpiration
  OptionExerciseMakeWholeProvision?: IOptionExerciseMakeWholeProvision
}
