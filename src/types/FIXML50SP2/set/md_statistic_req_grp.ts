import { IMDStatisticParameters } from './md_statistic_parameters'

export interface IMDStatisticReqGrp {
  MDStatisticID?: string// [1] 2475 (String)
  MDStatisticParameters?: IMDStatisticParameters// [1] Typ.139, Scope.546 .. SesSub.625
}
