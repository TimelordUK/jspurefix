import { ILegSettlMethodElectionDate } from './leg_settl_method_election_date'
import { ILegOptionExerciseDates } from './leg_option_exercise_dates'
import { ILegOptionExerciseExpiration } from './leg_option_exercise_expiration'
import { ILegOptionExerciseMakeWholeProvision } from './leg_option_exercise_make_whole_provision'

export interface ILegOptionExercise {
  LegExerciseDesc?: string// [1] 41481 (String)
  EncodedLegExerciseDescLen?: number// [2] 41482 (Length)
  EncodedLegExerciseDesc?: Buffer// [3] 41483 (RawData)
  LegAutomaticExerciseIndicator?: boolean// [4] 41484 (Boolean)
  LegAutomaticExerciseThresholdRate?: number// [5] 41485 (Float)
  LegExerciseConfirmationMethod?: number// [6] 41486 (Int)
  LegManualNoticeBusinessCenter?: string// [7] 41487 (String)
  LegFallbackExerciseIndicator?: boolean// [8] 41488 (Boolean)
  LegLimitRightToConfirmIndicator?: boolean// [9] 41489 (Boolean)
  LegExerciseSplitTicketIndicator?: boolean// [10] 41490 (Boolean)
  LegSettlMethodElectingPartySide?: number// [11] 42391 (Int)
  LegSettlMethodElectionDate?: ILegSettlMethodElectionDate// [12] LegSettlMethodElectionDateUnadjusted.42574, LegSettlMethodElectionDateBusinessDayConvention.42575 .. LegSettlMethodElectionDateAdjusted.42580
  LegOptionExerciseDates?: ILegOptionExerciseDates// [13] LegOptionExerciseBusinessDayConvention.41493, LegOptionExerciseBusinessCenterGrp.41491 .. LegOptionExerciseTimeBusinessCenter.41511
  LegOptionExerciseExpiration?: ILegOptionExerciseExpiration// [14] LegOptionExerciseExpirationDateBusinessDayConvention.41517, LegOptionExerciseExpirationDateBusinessCenterGrp.41515 .. LegOptionExerciseExpirationTimeBusinessCenter.41526
  LegOptionExerciseMakeWholeProvision?: ILegOptionExerciseMakeWholeProvision// [15] LegMakeWholeDate.42392, LegMakeWholeAmount.42393 .. LegMakeWholeInterpolationMethod.42398
}
