import { IUnderlyingSettlMethodElectionDate } from './underlying_settl_method_election_date'
import { IUnderlyingOptionExerciseDates } from './underlying_option_exercise_dates'
import { IUnderlyingOptionExerciseExpiration } from './underlying_option_exercise_expiration'
import { IUnderlyingOptionExerciseMakeWholeProvision } from './underlying_option_exercise_make_whole_provision'

export interface IUnderlyingOptionExercise {
  UnderlyingExerciseDesc?: string// [1] 41810 (String)
  EncodedUnderlyingExerciseDescLen?: number// [2] 41811 (Length)
  EncodedUnderlyingExerciseDesc?: Buffer// [3] 41812 (RawData)
  UnderlyingAutomaticExerciseIndicator?: boolean// [4] 41813 (Boolean)
  UnderlyingAutomaticExerciseThresholdRate?: number// [5] 41814 (Float)
  UnderlyingExerciseConfirmationMethod?: number// [6] 41815 (Int)
  UnderlyingManualNoticeBusinessCenter?: string// [7] 41816 (String)
  UnderlyingFallbackExerciseIndicator?: boolean// [8] 41817 (Boolean)
  UnderlyingLimitedRightToConfirmIndicator?: boolean// [9] 41818 (Boolean)
  UnderlyingExerciseSplitTicketIndicator?: boolean// [10] 41819 (Boolean)
  UnderlyingSettlMethodElectingPartySide?: number// [11] 42887 (Int)
  UnderlyingSettlMethodElectionDate?: IUnderlyingSettlMethodElectionDate// [12] UnderlyingSettlMethodElectionDateUnadjusted.43076, UnderlyingSettlMethodElectionDateBusinessDayConvention.43077 .. UnderlyingSettlMethodElectionDateAdjusted.43082
  UnderlyingOptionExerciseDates?: IUnderlyingOptionExerciseDates// [13] UnderlyingOptionExerciseBusinessDayConvention.41822, UnderlyingOptionExerciseBusinessCenterGrp.41820 .. UnderlyingOptionExerciseTimeBusinessCenter.41840
  UnderlyingOptionExerciseExpiration?: IUnderlyingOptionExerciseExpiration// [14] UnderlyingOptionExerciseExpirationDateBusinessDayConvention.41846, UnderlyingOptionExerciseExpirationDateBusinessCenterGrp.41844 .. UnderlyingOptionExerciseExpirationTimeBusinessCenter.41855
  UnderlyingOptionExerciseMakeWholeProvision?: IUnderlyingOptionExerciseMakeWholeProvision// [15] UnderlyingMakeWholeDate.42888, UnderlyingMakeWholeAmount.42889 .. UnderlyingMakeWholeInterpolationMethod.42894
}
