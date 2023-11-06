import { IDividendPeriodBusinessCenterGrp } from './dividend_period_business_center_grp'

export interface IDividendPeriodGrp {
  DividendPeriodSequence?: number// [1] 42275 (Int)
  DividendPeriodStartDateUnadjusted?: Date// [1] 42276 (LocalDate)
  DividendPeriodEndDateUnadjusted?: Date// [1] 42277 (LocalDate)
  DividendPeriodUnderlierRefID?: string// [1] 42278 (String)
  DividendPeriodStrikePrice?: number// [1] 42279 (Float)
  DividendPeriodBusinessDayConvention?: number// [1] 42280 (Int)
  DividendPeriodValuationDateUnadjusted?: Date// [1] 42281 (LocalDate)
  DividendPeriodValuationDateRelativeTo?: number// [1] 42282 (Int)
  DividendPeriodValuationDateOffsetPeriod?: number// [1] 42283 (Int)
  DividendPeriodValuationDateOffsetUnit?: string// [1] 42284 (String)
  DividendPeriodValuationDateOffsetDayType?: number// [1] 42285 (Int)
  DividendPeriodValuationDateAdjusted?: Date// [1] 42286 (LocalDate)
  DividendPeriodPaymentDateUnadjusted?: Date// [1] 42287 (LocalDate)
  DividendPeriodPaymentDateRelativeTo?: number// [1] 42288 (Int)
  DividendPeriodPaymentDateOffsetPeriod?: number// [1] 42289 (Int)
  DividendPeriodPaymentDateOffsetUnit?: string// [1] 42290 (String)
  DividendPeriodPaymentDateOffsetDayType?: number// [1] 42291 (Int)
  DividendPeriodPaymentDateAdjusted?: Date// [1] 42292 (LocalDate)
  DividendPeriodXID?: string// [1] 42293 (String)
  DividendPeriodBusinessCenterGrp?: IDividendPeriodBusinessCenterGrp[]// [1] Ctr.42295
}
