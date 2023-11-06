import { IUnderlyingDividendPeriodBusinessCenterGrp } from './underlying_dividend_period_business_center_grp'

export interface IUnderlyingDividendPeriodGrp {
  UnderlyingDividendPeriodSequence?: number// [1] 42863 (Int)
  UnderlyingDividendPeriodStartDateUnadjusted?: Date// [1] 42864 (LocalDate)
  UnderlyingDividendPeriodEndDateUnadjusted?: Date// [1] 42865 (LocalDate)
  UnderlyingDividendPeriodUnderlierRefID?: string// [1] 42866 (String)
  UnderlyingDividendPeriodStrikePrice?: number// [1] 42867 (Float)
  UnderlyingDividendPeriodBusinessDayConvention?: number// [1] 42868 (Int)
  UnderlyingDividendPeriodValuationDateUnadjusted?: Date// [1] 42869 (LocalDate)
  UnderlyingDividendPeriodValuationDateRelativeTo?: number// [1] 42870 (Int)
  UnderlyingDividendPeriodValuationDateOffsetPeriod?: number// [1] 42871 (Int)
  UnderlyingDividendPeriodValuationDateOffsetUnit?: string// [1] 42872 (String)
  UnderlyingDividendPeriodValuationDateOffsetDayType?: number// [1] 42873 (Int)
  UnderlyingDividendPeriodValuationDateAdjusted?: Date// [1] 42874 (LocalDate)
  UnderlyingDividendPeriodPaymentDateUnadjusted?: Date// [1] 42875 (LocalDate)
  UnderlyingDividendPeriodPaymentDateRelativeTo?: number// [1] 42876 (Int)
  UnderlyingDividendPeriodPaymentDateOffsetPeriod?: number// [1] 42877 (Int)
  UnderlyingDividendPeriodPaymentDateOffsetUnit?: string// [1] 42878 (String)
  UnderlyingDividendPeriodPaymentDateOffsetDayType?: number// [1] 42879 (Int)
  UnderlyingDividendPeriodPaymentDateAdjusted?: Date// [1] 42880 (LocalDate)
  UnderlyingDividendPeriodXID?: string// [1] 42881 (String)
  UnderlyingDividendPeriodBusinessCenterGrp?: IUnderlyingDividendPeriodBusinessCenterGrp[]// [1] Ctr.42883
}
