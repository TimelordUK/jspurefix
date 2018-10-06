import { IMDStatisticParameters } from './md_statistic_parameters'

export interface IMDStatisticRptGrp {
  MDStatisticID?: string// 2475
  MDStatisticTime?: Date// 2476
  MDStatisticStatus?: number// 2477
  MDStatisticValue?: number// 2478
  MDStatisticValueType?: number// 2479
  MDStatisticValueUnit?: number// 2480
  MDStatisticParameters?: IMDStatisticParameters
}
