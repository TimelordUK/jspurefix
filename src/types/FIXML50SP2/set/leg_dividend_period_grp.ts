import { ILegDividendPeriodBusinessCenterGrp } from './leg_dividend_period_business_center_grp'

export interface ILegDividendPeriodGrp {
  LegDividendPeriodSequence?: number// 42367
  LegDividendPeriodStartDateUnadjusted?: Date// 42368
  LegDividendPeriodEndDateUnadjusted?: Date// 42369
  LegDividendPeriodUnderlierRefID?: string// 42370
  LegDividendPeriodStrikePrice?: number// 42371
  LegDividendPeriodBusinessDayConvention?: number// 42372
  LegDividendPeriodValuationDateUnadjusted?: Date// 42373
  LegDividendPeriodValuationDateRelativeTo?: number// 42374
  LegDividendPeriodValuationDateOffsetPeriod?: number// 42375
  LegDividendPeriodValuationDateOffsetUnit?: string// 42376
  LegDividendPeriodValuationDateOffsetDayType?: number// 42377
  LegDividendPeriodValuationDateAdjusted?: Date// 42378
  LegDividendPeriodPaymentDateUnadjusted?: Date// 42379
  LegDividendPeriodPaymentDateRelativeTo?: number// 42380
  LegDividendPeriodPaymentDateOffsetPeriod?: number// 42381
  LegDividendPeriodPaymentDateOffsetUnit?: string// 42382
  LegDividendPeriodPaymentDateOffsetDayType?: number// 42383
  LegDividendPeriodPaymentDateAdjusted?: Date// 42384
  LegDividendPeriodXID?: string// 42385
  LegDividendPeriodBusinessCenterGrp?: ILegDividendPeriodBusinessCenterGrp[]
}
