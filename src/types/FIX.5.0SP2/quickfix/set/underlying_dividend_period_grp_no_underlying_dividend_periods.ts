import { IUnderlyingDividendPeriodBusinessCenterGrp } from './underlying_dividend_period_business_center_grp'

export interface IUnderlyingDividendPeriodGrpNoUnderlyingDividendPeriods {
  UnderlyingDividendPeriodSequence?: number// [1] 42863 (Int)
  UnderlyingDividendPeriodStartDateUnadjusted?: Date// [2] 42864 (LocalDate)
  UnderlyingDividendPeriodEndDateUnadjusted?: Date// [3] 42865 (LocalDate)
  UnderlyingDividendPeriodUnderlierRefID?: string// [4] 42866 (String)
  UnderlyingDividendPeriodStrikePrice?: number// [5] 42867 (Float)
  UnderlyingDividendPeriodBusinessDayConvention?: number// [6] 42868 (Int)
  UnderlyingDividendPeriodBusinessCenterGrp?: IUnderlyingDividendPeriodBusinessCenterGrp// [7] NoUnderlyingDividendPeriodBusinessCenters.42882, UnderlyingDividendPeriodBusinessCenter.42883
  UnderlyingDividendPeriodValuationDateUnadjusted?: Date// [8] 42869 (LocalDate)
  UnderlyingDividendPeriodValuationDateRelativeTo?: number// [9] 42870 (Int)
  UnderlyingDividendPeriodValuationDateOffsetPeriod?: number// [10] 42871 (Int)
  UnderlyingDividendPeriodValuationDateOffsetUnit?: string// [11] 42872 (String)
  UnderlyingDividendPeriodValuationDateOffsetDayType?: number// [12] 42873 (Int)
  UnderlyingDividendPeriodValuationDateAdjusted?: Date// [13] 42874 (LocalDate)
  UnderlyingDividendPeriodPaymentDateUnadjusted?: Date// [14] 42875 (LocalDate)
  UnderlyingDividendPeriodPaymentDateRelativeTo?: number// [15] 42876 (Int)
  UnderlyingDividendPeriodPaymentDateOffsetPeriod?: number// [16] 42877 (Int)
  UnderlyingDividendPeriodPaymentDateOffsetUnit?: string// [17] 42878 (String)
  UnderlyingDividendPeriodPaymentDateOffsetDayType?: number// [18] 42879 (Int)
  UnderlyingDividendPeriodPaymentDateAdjusted?: Date// [19] 42880 (LocalDate)
  UnderlyingDividendPeriodXID?: string// [20] 42881 (String)
}
