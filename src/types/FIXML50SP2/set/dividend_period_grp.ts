import { IDividendPeriodBusinessCenterGrp } from './dividend_period_business_center_grp'

export interface IDividendPeriodGrp {
  DividendPeriodSequence?: number// 42275
  DividendPeriodStartDateUnadjusted?: Date// 42276
  DividendPeriodEndDateUnadjusted?: Date// 42277
  DividendPeriodUnderlierRefID?: string// 42278
  DividendPeriodStrikePrice?: number// 42279
  DividendPeriodBusinessDayConvention?: number// 42280
  DividendPeriodValuationDateUnadjusted?: Date// 42281
  DividendPeriodValuationDateRelativeTo?: number// 42282
  DividendPeriodValuationDateOffsetPeriod?: number// 42283
  DividendPeriodValuationDateOffsetUnit?: string// 42284
  DividendPeriodValuationDateOffsetDayType?: number// 42285
  DividendPeriodValuationDateAdjusted?: Date// 42286
  DividendPeriodPaymentDateUnadjusted?: Date// 42287
  DividendPeriodPaymentDateRelativeTo?: number// 42288
  DividendPeriodPaymentDateOffsetPeriod?: number// 42289
  DividendPeriodPaymentDateOffsetUnit?: string// 42290
  DividendPeriodPaymentDateOffsetDayType?: number// 42291
  DividendPeriodPaymentDateAdjusted?: Date// 42292
  DividendPeriodXID?: string// 42293
  DividendPeriodBusinessCenterGrp?: IDividendPeriodBusinessCenterGrp[]
}
