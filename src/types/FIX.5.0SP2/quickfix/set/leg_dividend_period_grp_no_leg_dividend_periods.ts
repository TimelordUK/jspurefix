import { ILegDividendPeriodBusinessCenterGrp } from './leg_dividend_period_business_center_grp'

export interface ILegDividendPeriodGrpNoLegDividendPeriods {
  LegDividendPeriodSequence?: number// [1] 42367 (Int)
  LegDividendPeriodStartDateUnadjusted?: Date// [2] 42368 (LocalDate)
  LegDividendPeriodEndDateUnadjusted?: Date// [3] 42369 (LocalDate)
  LegDividendPeriodUnderlierRefID?: string// [4] 42370 (String)
  LegDividendPeriodStrikePrice?: number// [5] 42371 (Float)
  LegDividendPeriodBusinessDayConvention?: number// [6] 42372 (Int)
  LegDividendPeriodBusinessCenterGrp?: ILegDividendPeriodBusinessCenterGrp// [7] NoLegDividendPeriodBusinessCenters.42386, LegDividendPeriodBusinessCenter.42387
  LegDividendPeriodValuationDateUnadjusted?: Date// [8] 42373 (LocalDate)
  LegDividendPeriodValuationDateRelativeTo?: number// [9] 42374 (Int)
  LegDividendPeriodValuationDateOffsetPeriod?: number// [10] 42375 (Int)
  LegDividendPeriodValuationDateOffsetUnit?: string// [11] 42376 (String)
  LegDividendPeriodValuationDateOffsetDayType?: number// [12] 42377 (Int)
  LegDividendPeriodValuationDateAdjusted?: Date// [13] 42378 (LocalDate)
  LegDividendPeriodPaymentDateUnadjusted?: Date// [14] 42379 (LocalDate)
  LegDividendPeriodPaymentDateRelativeTo?: number// [15] 42380 (Int)
  LegDividendPeriodPaymentDateOffsetPeriod?: number// [16] 42381 (Int)
  LegDividendPeriodPaymentDateOffsetUnit?: string// [17] 42382 (String)
  LegDividendPeriodPaymentDateOffsetDayType?: number// [18] 42383 (Int)
  LegDividendPeriodPaymentDateAdjusted?: Date// [19] 42384 (LocalDate)
  LegDividendPeriodXID?: string// [20] 42385 (String)
}
