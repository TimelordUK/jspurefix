import { IUnderlyingReturnRatePriceGrp } from './underlying_return_rate_price_grp'
import { IUnderlyingReturnRateFXConversionGrp } from './underlying_return_rate_fx_conversion_grp'
import { IUnderlyingReturnRateInformationSourceGrp } from './underlying_return_rate_information_source_grp'
import { IUnderlyingReturnRateDateGrp } from './underlying_return_rate_date_grp'

export interface IUnderlyingReturnRateGrpNoUnderlyingReturnRates {
  UnderlyingReturnRatePriceSequence?: number// [1] 43035 (Int)
  UnderlyingReturnRateCommissionBasis?: string// [2] 43036 (String)
  UnderlyingReturnRateCommissionAmount?: number// [3] 43037 (Float)
  UnderlyingReturnRateCommissionCurrency?: string// [4] 43038 (String)
  UnderlyingReturnRateTotalCommissionPerTrade?: number// [5] 43039 (Float)
  UnderlyingReturnRateDeterminationMethod?: string// [6] 43040 (String)
  UnderlyingReturnRatePriceGrp?: IUnderlyingReturnRatePriceGrp// [7] NoUnderlyingReturnRatePrices.43064, UnderlyingReturnRatePriceBasis.43065 .. UnderlyingReturnRatePriceType.43068
  UnderlyingReturnRateFXConversionGrp?: IUnderlyingReturnRateFXConversionGrp// [8] NoUnderlyingReturnRateFXConversions.43030, UnderlyingReturnRateFXCurrencySymbol.43031 .. UnderlyingReturnRateFXRateCalc.43033
  UnderlyingReturnRateAmountRelativeTo?: number// [9] 43041 (Int)
  UnderlyingReturnRateQuoteMeasureType?: string// [10] 43042 (String)
  UnderlyingReturnRateQuoteUnits?: string// [11] 43043 (String)
  UnderlyingReturnRateQuoteMethod?: number// [12] 43044 (Int)
  UnderlyingReturnRateQuoteCurrency?: string// [13] 43045 (String)
  UnderlyingReturnRateQuoteCurrencyType?: string// [14] 43046 (String)
  UnderlyingReturnRateQuoteTimeType?: number// [15] 43047 (Int)
  UnderlyingReturnRateQuoteTime?: Date// [16] 43048 (LocalDate)
  UnderlyingReturnRateQuoteDate?: Date// [17] 43049 (LocalDate)
  UnderlyingReturnRateQuoteExpirationTime?: string// [18] 43050 (String)
  UnderlyingReturnRateQuoteBusinessCenter?: string// [19] 43051 (String)
  UnderlyingReturnRateQuoteExchange?: string// [20] 43052 (String)
  UnderlyingReturnRateInformationSourceGrp?: IUnderlyingReturnRateInformationSourceGrp// [21] NoUnderlyingReturnRateInformationSources.43060, UnderlyingReturnRateInformationSource.43061 .. UnderlyingReturnRateReferencePageHeading.43063
  UnderlyingReturnRateQuotePricingModel?: string// [22] 43053 (String)
  UnderlyingReturnRateCashFlowType?: string// [23] 43054 (String)
  UnderlyingReturnRateDateGrp?: IUnderlyingReturnRateDateGrp// [24] NoUnderlyingReturnRateDates.43008, UnderlyingReturnRateDateMode.43009 .. UnderlyingReturnRateValuationDateBusinessCenter.43070
  UnderlyingReturnRateValuationTimeType?: number// [25] 43055 (Int)
  UnderlyingReturnRateValuationTime?: string// [26] 43056 (String)
  UnderlyingReturnRateValuationTimeBusinessCenter?: string// [27] 43057 (String)
  UnderlyingReturnRateValuationPriceOption?: number// [28] 43058 (Int)
  UnderlyingReturnRateFinalPriceFallback?: number// [29] 43059 (Int)
}
