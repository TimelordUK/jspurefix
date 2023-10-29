import { ISettlMethodElectionDate } from './settl_method_election_date'
import { IOptionExerciseDates } from './option_exercise_dates'
import { IOptionExerciseExpiration } from './option_exercise_expiration'
import { IOptionExerciseMakeWholeProvision } from './option_exercise_make_whole_provision'

export interface IOptionExercise {
  ExerciseDesc?: string// [1] 41106 (String)
  EncodedExerciseDescLen?: number// [2] 41107 (Length)
  EncodedExerciseDesc?: Buffer// [3] 41108 (RawData)
  AutomaticExerciseIndicator?: boolean// [4] 41109 (Boolean)
  AutomaticExerciseThresholdRate?: number// [5] 41110 (Float)
  ExerciseConfirmationMethod?: number// [6] 41111 (Int)
  ManualNoticeBusinessCenter?: string// [7] 41112 (String)
  FallbackExerciseIndicator?: boolean// [8] 41113 (Boolean)
  LimitedRightToConfirmIndicator?: boolean// [9] 41114 (Boolean)
  ExerciseSplitTicketIndicator?: boolean// [10] 41115 (Boolean)
  SettlMethodElectingPartySide?: number// [11] 42590 (Int)
  SettlMethodElectionDate?: ISettlMethodElectionDate// [12] SettlMethodElectionDateUnadjusted.42777, SettlMethodElectionDateBusinessDayConvention.42778 .. SettlMethodElectionDateAdjusted.42783
  OptionExerciseDates?: IOptionExerciseDates// [13] OptionExerciseBusinessDayConvention.41118, OptionExerciseBusinessCenterGrp.41116 .. OptionExerciseTimeBusinessCenter.41136
  OptionExerciseExpiration?: IOptionExerciseExpiration// [14] OptionExerciseExpirationDateBusinessDayConvention.41142, OptionExerciseExpirationDateBusinessCenterGrp.41140 .. OptionExerciseExpirationTimeBusinessCenter.41151
  OptionExerciseMakeWholeProvision?: IOptionExerciseMakeWholeProvision// [15] MakeWholeDate.42591, MakeWholeAmount.42592 .. MakeWholeInterpolationMethod.42597
}
