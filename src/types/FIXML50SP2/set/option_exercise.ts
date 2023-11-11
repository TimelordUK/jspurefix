import { ISettlMethodElectionDate } from './settl_method_election_date'
import { IOptionExerciseDates } from './option_exercise_dates'
import { IOptionExerciseExpiration } from './option_exercise_expiration'
import { IOptionExerciseMakeWholeProvision } from './option_exercise_make_whole_provision'

export interface IOptionExercise {
  ExerciseDesc?: string// [1] 41106 (String)
  EncodedExerciseDescLen?: number// [1] 41107 (Length)
  EncodedExerciseDesc?: Buffer// [1] 41108 (RawData)
  AutomaticExerciseIndicator?: boolean// [1] 41109 (Boolean)
  AutomaticExerciseThresholdRate?: number// [1] 41110 (Float)
  ExerciseConfirmationMethod?: number// [1] 41111 (Int)
  ManualNoticeBusinessCenter?: string// [1] 41112 (String)
  FallbackExerciseIndicator?: boolean// [1] 41113 (Boolean)
  LimitedRightToConfirmIndicator?: boolean// [1] 41114 (Boolean)
  ExerciseSplitTicketIndicator?: boolean// [1] 41115 (Boolean)
  SettlMethodElectingPartySide?: number// [1] 42590 (Int)
  SettlMethodElectionDate?: ISettlMethodElectionDate// [1] DtUnadj.42777, BizDayCnvtn.42778 .. Dt.42783
  OptionExerciseDates?: IOptionExerciseDates// [2] BizDayCnvtn.41118, ErlstOfstDayTyp.41119 .. TmBizCtr.41136
  OptionExerciseExpiration?: IOptionExerciseExpiration// [3] BizDayCnvtn.41142, Reltv.41143 .. TmBizCtr.41151
  OptionExerciseMakeWholeProvision?: IOptionExerciseMakeWholeProvision// [4] Dt.42591, Amt.42592 .. IntrpltnMeth.42597
}
