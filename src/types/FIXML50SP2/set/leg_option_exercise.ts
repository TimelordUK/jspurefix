import { ILegSettlMethodElectionDate } from './leg_settl_method_election_date'
import { ILegOptionExerciseDates } from './leg_option_exercise_dates'
import { ILegOptionExerciseExpiration } from './leg_option_exercise_expiration'
import { ILegOptionExerciseMakeWholeProvision } from './leg_option_exercise_make_whole_provision'

export interface ILegOptionExercise {
  LegExerciseDesc?: string// [1] 41481 (String)
  EncodedLegExerciseDescLen?: number// [1] 41482 (Length)
  EncodedLegExerciseDesc?: Buffer// [1] 41483 (RawData)
  LegAutomaticExerciseIndicator?: boolean// [1] 41484 (Boolean)
  LegAutomaticExerciseThresholdRate?: number// [1] 41485 (Float)
  LegExerciseConfirmationMethod?: number// [1] 41486 (Int)
  LegManualNoticeBusinessCenter?: string// [1] 41487 (String)
  LegFallbackExerciseIndicator?: boolean// [1] 41488 (Boolean)
  LegLimitRightToConfirmIndicator?: boolean// [1] 41489 (Boolean)
  LegExerciseSplitTicketIndicator?: boolean// [1] 41490 (Boolean)
  LegSettlMethodElectingPartySide?: number// [1] 42391 (Int)
  LegSettlMethodElectionDate?: ILegSettlMethodElectionDate// [1] DtUnadj.42574, BizDayCnvtn.42575 .. Dt.42580
  LegOptionExerciseDates?: ILegOptionExerciseDates// [2] BizDayCnvtn.41493, ErlstOfstDayTyp.41494 .. TmBizCtr.41511
  LegOptionExerciseExpiration?: ILegOptionExerciseExpiration// [3] BizDayCnvtn.41517, Reltv.41518 .. TmBizCtr.41526
  LegOptionExerciseMakeWholeProvision?: ILegOptionExerciseMakeWholeProvision// [4] Dt.42392, Amt.42393 .. IntrpltnMeth.42398
}
