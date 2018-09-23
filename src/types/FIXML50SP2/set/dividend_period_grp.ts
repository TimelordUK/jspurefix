import { IDividendPeriodBusinessCenterGrp } from './dividend_period_business_center_grp'

export interface IDividendPeriodGrp {
  UnderlyingDividendPeriodSequence?: number// 42863
  UnderlyingReturnRateValuationStartDateUnadjusted?: Date// 43014
  UnderlyingReturnRateValuationEndDateUnadjusted?: Date// 43020
  UnderlyingPaymentStreamUnderlierRefID?: string// 42962
  UnderlyingDividendPeriodStrikePrice?: number// 42867
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingDividendPeriodValuationDateUnadjusted?: Date// 42869
  UnderlyingDividendPeriodValuationDateRelativeTo?: number// 42870
  UnderlyingDividendPeriodValuationDateOffsetPeriod?: number// 42871
  UnderlyingDividendPeriodValuationDateOffsetUnit?: string// 42872
  UnderlyingDividendPeriodValuationDateOffsetDayType?: number// 42873
  UnderlyingDividendPeriodValuationDateAdjusted?: Date// 42874
  UnderlyingDividendPeriodPaymentDateUnadjusted?: Date// 42875
  UnderlyingDividendPeriodPaymentDateRelativeTo?: number// 42876
  UnderlyingDividendPeriodPaymentDateOffsetPeriod?: number// 42877
  UnderlyingDividendPeriodPaymentDateOffsetUnit?: string// 42878
  UnderlyingDividendPeriodPaymentDateOffsetDayType?: number// 42879
  UnderlyingDividendPeriodPaymentDateAdjusted?: Date// 42880
  UnderlyingDividendPeriodXID?: string// 42881
  DividendPeriodBusinessCenterGrp?: IDividendPeriodBusinessCenterGrp[]
}
