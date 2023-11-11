import { ILegReturnRatePriceGrp } from './leg_return_rate_price_grp'
import { ILegReturnRateFXConversionGrp } from './leg_return_rate_fx_conversion_grp'
import { ILegReturnRateInformationSourceGrp } from './leg_return_rate_information_source_grp'
import { ILegReturnRateDateGrp } from './leg_return_rate_date_grp'

export interface ILegReturnRateGrpNoLegReturnRates {
  LegReturnRatePriceSequence?: number// [1] 42535 (Int)
  LegReturnRateCommissionBasis?: string// [2] 42536 (String)
  LegReturnRateCommissionAmount?: number// [3] 42537 (Float)
  LegReturnRateCommissionCurrency?: string// [4] 42538 (String)
  LegReturnRateTotalCommissionPerTrade?: number// [5] 42539 (Float)
  LegReturnRateDeterminationMethod?: string// [6] 42540 (String)
  LegReturnRatePriceGrp?: ILegReturnRatePriceGrp// [7] NoLegReturnRatePrices.42564, LegReturnRatePriceBasis.42565 .. LegReturnRatePriceType.42568
  LegReturnRateFXConversionGrp?: ILegReturnRateFXConversionGrp// [8] NoLegReturnRateFXConversions.42530, LegReturnRateFXCurrencySymbol.42531 .. LegReturnRateFXRateCalc.42533
  LegReturnRateAmountRelativeTo?: number// [9] 42541 (Int)
  LegReturnRateQuoteMeasureType?: string// [10] 42542 (String)
  LegReturnRateQuoteUnits?: string// [11] 42543 (String)
  LegReturnRateQuoteMethod?: number// [12] 42544 (Int)
  LegReturnRateQuoteCurrency?: string// [13] 42545 (String)
  LegReturnRateQuoteCurrencyType?: string// [14] 42546 (String)
  LegReturnRateQuoteTimeType?: number// [15] 42547 (Int)
  LegReturnRateQuoteTime?: string// [16] 42548 (String)
  LegReturnRateQuoteDate?: Date// [17] 42549 (LocalDate)
  LegReturnRateQuoteExpirationTime?: string// [18] 42550 (String)
  LegReturnRateQuoteBusinessCenter?: string// [19] 42551 (String)
  LegReturnRateQuoteExchange?: string// [20] 42552 (String)
  LegReturnRateInformationSourceGrp?: ILegReturnRateInformationSourceGrp// [21] NoLegReturnRateInformationSources.42560, LegReturnRateInformationSource.42561 .. LegReturnRateReferencePageHeading.42563
  LegReturnRateQuotePricingModel?: string// [22] 42553 (String)
  LegReturnRateCashFlowType?: string// [23] 42554 (String)
  LegReturnRateDateGrp?: ILegReturnRateDateGrp// [24] NoLegReturnRateDates.42508, LegReturnRateDateMode.42509 .. LegReturnRateValuationDateBusinessCenter.42570
  LegReturnRateValuationTimeType?: number// [25] 42555 (Int)
  LegReturnRateValuationTime?: string// [26] 42556 (String)
  LegReturnRateValuationTimeBusinessCenter?: string// [27] 42557 (String)
  LegReturnRateValuationPriceOption?: number// [28] 42558 (Int)
  LegReturnRateFinalPriceFallback?: number// [29] 42559 (Int)
}
