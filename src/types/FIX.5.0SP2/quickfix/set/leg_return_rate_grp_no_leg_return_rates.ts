import { ILegReturnRateFXConversionGrp } from './leg_return_rate_fx_conversion_grp'
import { ILegReturnRateDateGrp } from './leg_return_rate_date_grp'

export interface ILegReturnRateGrpNoLegReturnRates {
  LegReturnRatePriceSequence?: number// [1] 42535 (Int)
  LegReturnRateCommissionBasis?: string// [2] 42536 (String)
  LegReturnRateCommissionAmount?: number// [3] 42537 (Float)
  LegReturnRateCommissionCurrency?: string// [4] 42538 (String)
  LegReturnRateTotalCommissionPerTrade?: number// [5] 42539 (Float)
  LegReturnRateDeterminationMethod?: string// [6] 42540 (String)
  LegReturnRateFXConversionGrp?: ILegReturnRateFXConversionGrp// [7] NoLegReturnRateFXConversions.42530, LegReturnRateFXCurrencySymbol.42531 .. LegReturnRateFXRateCalc.42533
  LegReturnRateAmountRelativeTo?: number// [8] 42541 (Int)
  LegReturnRateQuoteMeasureType?: string// [9] 42542 (String)
  LegReturnRateQuoteUnits?: string// [10] 42543 (String)
  LegReturnRateQuoteMethod?: number// [11] 42544 (Int)
  LegReturnRateQuoteCurrency?: string// [12] 42545 (String)
  LegReturnRateQuoteCurrencyType?: string// [13] 42546 (String)
  LegReturnRateQuoteTimeType?: number// [14] 42547 (Int)
  LegReturnRateQuoteTime?: string// [15] 42548 (String)
  LegReturnRateQuoteDate?: Date// [16] 42549 (LocalDate)
  LegReturnRateQuoteExpirationTime?: string// [17] 42550 (String)
  LegReturnRateQuoteBusinessCenter?: string// [18] 42551 (String)
  LegReturnRateQuoteExchange?: string// [19] 42552 (String)
  LegReturnRateQuotePricingModel?: string// [20] 42553 (String)
  LegReturnRateCashFlowType?: string// [21] 42554 (String)
  LegReturnRateDateGrp?: ILegReturnRateDateGrp// [22] NoLegReturnRateDates.42508, LegReturnRateDateMode.42509 .. LegReturnRateValuationDateBusinessDayConvention.42529
  LegReturnRateValuationTimeType?: number// [23] 42555 (Int)
  LegReturnRateValuationTime?: string// [24] 42556 (String)
  LegReturnRateValuationTimeBusinessCenter?: string// [25] 42557 (String)
  LegReturnRateValuationPriceOption?: number// [26] 42558 (Int)
  LegReturnRateFinalPriceFallback?: number// [27] 42559 (Int)
}
