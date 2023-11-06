import { IUnderlyingSettlMethodElectionDate } from './underlying_settl_method_election_date'
import { IUnderlyingOptionExerciseDates } from './underlying_option_exercise_dates'
import { IUnderlyingOptionExerciseExpiration } from './underlying_option_exercise_expiration'
import { IUnderlyingOptionExerciseMakeWholeProvision } from './underlying_option_exercise_make_whole_provision'

export interface IUnderlyingOptionExercise {
  UnderlyingExerciseDesc?: string// [1] 41810 (String)
  EncodedUnderlyingExerciseDescLen?: number// [1] 41811 (Length)
  EncodedUnderlyingExerciseDesc?: Buffer// [1] 41812 (RawData)
  UnderlyingAutomaticExerciseIndicator?: boolean// [1] 41813 (Boolean)
  UnderlyingAutomaticExerciseThresholdRate?: number// [1] 41814 (Float)
  UnderlyingExerciseConfirmationMethod?: number// [1] 41815 (Int)
  UnderlyingManualNoticeBusinessCenter?: string// [1] 41816 (String)
  UnderlyingFallbackExerciseIndicator?: boolean// [1] 41817 (Boolean)
  UnderlyingLimitedRightToConfirmIndicator?: boolean// [1] 41818 (Boolean)
  UnderlyingExerciseSplitTicketIndicator?: boolean// [1] 41819 (Boolean)
  UnderlyingSettlMethodElectingPartySide?: number// [1] 42887 (Int)
  UnderlyingSettlMethodElectionDate?: IUnderlyingSettlMethodElectionDate// [1] DtUnadj.43076, BizDayCnvtn.43077 .. Dt.43082
  UnderlyingOptionExerciseDates?: IUnderlyingOptionExerciseDates// [2] BizDayCnvtn.41822, ErlstOfstDayTyp.41823 .. TmBizCtr.41840
  UnderlyingOptionExerciseExpiration?: IUnderlyingOptionExerciseExpiration// [3] BizDayCnvtn.41846, Reltv.41847 .. TmBizCtr.41855
  UnderlyingOptionExerciseMakeWholeProvision?: IUnderlyingOptionExerciseMakeWholeProvision// [4] Dt.42888, Amt.42889 .. IntrpltnMeth.42894
}
