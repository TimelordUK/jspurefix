import { IMDStatisticParameters } from './md_statistic_parameters'

export interface IMDStatisticRptGrpNoMDStatistics {
  MDStatisticParameters?: IMDStatisticParameters// [1] MDStatisticType.2456, MDStatisticScope.2457 .. AggressorIndicator.1057
  MDStatisticID?: string// [2] 2475 (String)
  MDStatisticTime?: Date// [3] 2476 (UtcTimestamp)
  MDStatisticStatus?: number// [4] 2477 (Int)
  MDStatisticValue?: number// [5] 2478 (Float)
  MDStatisticValueType?: number// [6] 2479 (Int)
  MDStatisticValueUnit?: number// [7] 2480 (Int)
}
