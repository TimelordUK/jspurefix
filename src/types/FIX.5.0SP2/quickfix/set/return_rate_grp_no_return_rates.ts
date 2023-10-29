import { IReturnRateFXConversionGrp } from './return_rate_fx_conversion_grp'
import { IReturnRateDateGrp } from './return_rate_date_grp'

export interface IReturnRateGrpNoReturnRates {
  ReturnRatePriceSequence?: number// [1] 42736 (Int)
  ReturnRateCommissionBasis?: string// [2] 42737 (String)
  ReturnRateCommissionAmount?: number// [3] 42738 (Float)
  ReturnRateCommissionCurrency?: string// [4] 42739 (String)
  ReturnRateTotalCommissionPerTrade?: number// [5] 42740 (Float)
  ReturnRateDeterminationMethod?: string// [6] 42741 (String)
  ReturnRateFXConversionGrp?: IReturnRateFXConversionGrp// [7] NoReturnRateFXConversions.42731, ReturnRateFXCurrencySymbol.42732 .. ReturnRateFXRateCalc.42734
  ReturnRateAmountRelativeTo?: number// [8] 42742 (Int)
  ReturnRateQuoteMeasureType?: string// [9] 42743 (String)
  ReturnRateQuoteUnits?: string// [10] 42744 (String)
  ReturnRateQuoteMethod?: number// [11] 42745 (Int)
  ReturnRateQuoteCurrency?: string// [12] 42746 (String)
  ReturnRateQuoteCurrencyType?: string// [13] 42747 (String)
  ReturnRateQuoteTimeType?: number// [14] 42748 (Int)
  ReturnRateQuoteTime?: string// [15] 42749 (String)
  ReturnRateQuoteDate?: Date// [16] 42750 (LocalDate)
  ReturnRateQuoteExpirationTime?: string// [17] 42751 (String)
  ReturnRateQuoteBusinessCenter?: string// [18] 42752 (String)
  ReturnRateQuoteExchange?: string// [19] 42753 (String)
  ReturnRateQuotePricingModel?: string// [20] 42754 (String)
  ReturnRateCashFlowType?: string// [21] 42755 (String)
  ReturnRateDateGrp?: IReturnRateDateGrp// [22] NoReturnRateDates.42709, ReturnRateDateMode.42710 .. ReturnRateValuationDateBusinessDayConvention.42730
  ReturnRateValuationTimeType?: number// [23] 42756 (Int)
  ReturnRateValuationTime?: string// [24] 42757 (String)
  ReturnRateValuationTimeBusinessCenter?: string// [25] 42758 (String)
  ReturnRateValuationPriceOption?: number// [26] 42759 (Int)
  ReturnRateFinalPriceFallback?: number// [27] 42760 (Int)
}
