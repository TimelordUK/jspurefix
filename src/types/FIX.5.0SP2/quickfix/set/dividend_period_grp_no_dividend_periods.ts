import { IDividendPeriodBusinessCenterGrp } from './dividend_period_business_center_grp'

export interface IDividendPeriodGrpNoDividendPeriods {
  DividendPeriodSequence?: number// [1] 42275 (Int)
  DividendPeriodStartDateUnadjusted?: Date// [2] 42276 (LocalDate)
  DividendPeriodEndDateUnadjusted?: Date// [3] 42277 (LocalDate)
  DividendPeriodUnderlierRefID?: string// [4] 42278 (String)
  DividendPeriodStrikePrice?: number// [5] 42279 (Float)
  DividendPeriodBusinessDayConvention?: number// [6] 42280 (Int)
  DividendPeriodBusinessCenterGrp?: IDividendPeriodBusinessCenterGrp// [7] NoDividendPeriodBusinessCenters.42294, DividendPeriodBusinessCenter.42295
  DividendPeriodValuationDateUnadjusted?: Date// [8] 42281 (LocalDate)
  DividendPeriodValuationDateRelativeTo?: number// [9] 42282 (Int)
  DividendPeriodValuationDateOffsetPeriod?: number// [10] 42283 (Int)
  DividendPeriodValuationDateOffsetUnit?: string// [11] 42284 (String)
  DividendPeriodValuationDateOffsetDayType?: number// [12] 42285 (Int)
  DividendPeriodValuationDateAdjusted?: Date// [13] 42286 (LocalDate)
  DividendPeriodPaymentDateUnadjusted?: Date// [14] 42287 (LocalDate)
  DividendPeriodPaymentDateRelativeTo?: number// [15] 42288 (Int)
  DividendPeriodPaymentDateOffsetPeriod?: number// [16] 42289 (Int)
  DividendPeriodPaymentDateOffsetUnit?: string// [17] 42290 (String)
  DividendPeriodPaymentDateOffsetDayType?: number// [18] 42291 (Int)
  DividendPeriodPaymentDateAdjusted?: Date// [19] 42292 (LocalDate)
  DividendPeriodXID?: string// [20] 42293 (String)
}
