import { IMDStatisticParameters } from './md_statistic_parameters'

export interface IMDStatisticReqGrpNoMDStatistics {
  MDStatisticID?: string// [1] 2475 (String)
  MDStatisticParameters?: IMDStatisticParameters// [2] MDStatisticType.2456, MDStatisticScope.2457 .. AggressorIndicator.1057
}
