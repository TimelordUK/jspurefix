import { ILegDividendPeriodBusinessCenterGrp } from './leg_dividend_period_business_center_grp'

export interface ILegDividendPeriodGrp {
  LegDividendPeriodSequence?: number// [1] 42367 (Int)
  LegDividendPeriodStartDateUnadjusted?: Date// [1] 42368 (LocalDate)
  LegDividendPeriodEndDateUnadjusted?: Date// [1] 42369 (LocalDate)
  LegDividendPeriodUnderlierRefID?: string// [1] 42370 (String)
  LegDividendPeriodStrikePrice?: number// [1] 42371 (Float)
  LegDividendPeriodBusinessDayConvention?: number// [1] 42372 (Int)
  LegDividendPeriodValuationDateUnadjusted?: Date// [1] 42373 (LocalDate)
  LegDividendPeriodValuationDateRelativeTo?: number// [1] 42374 (Int)
  LegDividendPeriodValuationDateOffsetPeriod?: number// [1] 42375 (Int)
  LegDividendPeriodValuationDateOffsetUnit?: string// [1] 42376 (String)
  LegDividendPeriodValuationDateOffsetDayType?: number// [1] 42377 (Int)
  LegDividendPeriodValuationDateAdjusted?: Date// [1] 42378 (LocalDate)
  LegDividendPeriodPaymentDateUnadjusted?: Date// [1] 42379 (LocalDate)
  LegDividendPeriodPaymentDateRelativeTo?: number// [1] 42380 (Int)
  LegDividendPeriodPaymentDateOffsetPeriod?: number// [1] 42381 (Int)
  LegDividendPeriodPaymentDateOffsetUnit?: string// [1] 42382 (String)
  LegDividendPeriodPaymentDateOffsetDayType?: number// [1] 42383 (Int)
  LegDividendPeriodPaymentDateAdjusted?: Date// [1] 42384 (LocalDate)
  LegDividendPeriodXID?: string// [1] 42385 (String)
  LegDividendPeriodBusinessCenterGrp?: ILegDividendPeriodBusinessCenterGrp[]// [1] Ctr.42387
}
