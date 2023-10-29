import { IReturnRatePriceGrp } from './return_rate_price_grp'
import { IReturnRateFXConversionGrp } from './return_rate_fx_conversion_grp'
import { IReturnRateInformationSourceGrp } from './return_rate_information_source_grp'
import { IReturnRateDateGrp } from './return_rate_date_grp'

export interface IReturnRateGrpNoReturnRates {
  ReturnRatePriceSequence?: number// [1] 42736 (Int)
  ReturnRateCommissionBasis?: string// [2] 42737 (String)
  ReturnRateCommissionAmount?: number// [3] 42738 (Float)
  ReturnRateCommissionCurrency?: string// [4] 42739 (String)
  ReturnRateTotalCommissionPerTrade?: number// [5] 42740 (Float)
  ReturnRateDeterminationMethod?: string// [6] 42741 (String)
  ReturnRatePriceGrp?: IReturnRatePriceGrp// [7] NoReturnRatePrices.42765, ReturnRatePriceBasis.42766 .. ReturnRatePriceType.42769
  ReturnRateFXConversionGrp?: IReturnRateFXConversionGrp// [8] NoReturnRateFXConversions.42731, ReturnRateFXCurrencySymbol.42732 .. ReturnRateFXRateCalc.42734
  ReturnRateAmountRelativeTo?: number// [9] 42742 (Int)
  ReturnRateQuoteMeasureType?: string// [10] 42743 (String)
  ReturnRateQuoteUnits?: string// [11] 42744 (String)
  ReturnRateQuoteMethod?: number// [12] 42745 (Int)
  ReturnRateQuoteCurrency?: string// [13] 42746 (String)
  ReturnRateQuoteCurrencyType?: string// [14] 42747 (String)
  ReturnRateQuoteTimeType?: number// [15] 42748 (Int)
  ReturnRateQuoteTime?: string// [16] 42749 (String)
  ReturnRateQuoteDate?: Date// [17] 42750 (LocalDate)
  ReturnRateQuoteExpirationTime?: string// [18] 42751 (String)
  ReturnRateQuoteBusinessCenter?: string// [19] 42752 (String)
  ReturnRateQuoteExchange?: string// [20] 42753 (String)
  ReturnRateInformationSourceGrp?: IReturnRateInformationSourceGrp// [21] NoReturnRateInformationSources.42761, ReturnRateInformationSource.42762 .. ReturnRateReferencePageHeading.42764
  ReturnRateQuotePricingModel?: string// [22] 42754 (String)
  ReturnRateCashFlowType?: string// [23] 42755 (String)
  ReturnRateDateGrp?: IReturnRateDateGrp// [24] NoReturnRateDates.42709, ReturnRateDateMode.42710 .. ReturnRateValuationDateBusinessCenter.42771
  ReturnRateValuationTimeType?: number// [25] 42756 (Int)
  ReturnRateValuationTime?: string// [26] 42757 (String)
  ReturnRateValuationTimeBusinessCenter?: string// [27] 42758 (String)
  ReturnRateValuationPriceOption?: number// [28] 42759 (Int)
  ReturnRateFinalPriceFallback?: number// [29] 42760 (Int)
}
