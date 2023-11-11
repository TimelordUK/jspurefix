import { IMDStatisticParameters } from './md_statistic_parameters'

export interface IMDStatisticRptGrp {
  MDStatisticID?: string// [1] 2475 (String)
  MDStatisticTime?: Date// [1] 2476 (UtcTimestamp)
  MDStatisticStatus?: number// [1] 2477 (Int)
  MDStatisticValue?: number// [1] 2478 (Float)
  MDStatisticValueType?: number// [1] 2479 (Int)
  MDStatisticValueUnit?: number// [1] 2480 (Int)
  MDStatisticParameters?: IMDStatisticParameters// [1] Typ.139, Scope.546 .. SesSub.625
}
