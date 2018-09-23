import { IMDStatisticParameters } from './md_statistic_parameters'

export interface IMDStatisticRptGrp {
  MDStatisticID?: string// 2475
  UnderlyingProvisionCashSettlValueTime?: string// 42104
  MDStatisticStatus?: number// 2477
  UnderlyingRateSpreadStepValue?: string// 43007
  UnderlyingReturnRateValuationDateType?: number// 43073
  MDStatisticValueUnit?: number// 2480
  MDStatisticParameters?: IMDStatisticParameters
}
