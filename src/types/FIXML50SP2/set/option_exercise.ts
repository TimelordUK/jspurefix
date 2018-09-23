import { ISettlMethodElectionDate } from './settl_method_election_date'
import { IOptionExerciseDates } from './option_exercise_dates'
import { IOptionExerciseExpiration } from './option_exercise_expiration'
import { IOptionExerciseMakeWholeProvision } from './option_exercise_make_whole_provision'

export interface IOptionExercise {
  PaymentDesc?: string// 43087
  EncodedUnderlyingStreamCommodityDescLen?: string// 41969
  EncodedUnderlyingStreamCommodityDesc?: Buffer// 41970
  UnderlyingAutomaticExerciseIndicator?: string// 41813
  UnderlyingAutomaticExerciseThresholdRate?: string// 41814
  UnderlyingProvisionOptionExerciseConfirmation?: string// 42165
  UnderlyingManualNoticeBusinessCenter?: string// 41816
  UnderlyingFallbackExerciseIndicator?: string// 41817
  UnderlyingLimitedRightToConfirmIndicator?: string// 41818
  UnderlyingExerciseSplitTicketIndicator?: string// 41819
  UnderlyingSettlMethodElectingPartySide?: number// 42887
  SettlMethodElectionDate?: ISettlMethodElectionDate
  OptionExerciseDates?: IOptionExerciseDates
  OptionExerciseExpiration?: IOptionExerciseExpiration
  OptionExerciseMakeWholeProvision?: IOptionExerciseMakeWholeProvision
}
