import { IUnderlyingReturnRateFXConversionGrp } from './underlying_return_rate_fx_conversion_grp'
import { IUnderlyingReturnRateDateGrp } from './underlying_return_rate_date_grp'

export interface IUnderlyingReturnRateGrpNoUnderlyingReturnRates {
  UnderlyingReturnRatePriceSequence?: number// [1] 43035 (Int)
  UnderlyingReturnRateCommissionBasis?: string// [2] 43036 (String)
  UnderlyingReturnRateCommissionAmount?: number// [3] 43037 (Float)
  UnderlyingReturnRateCommissionCurrency?: string// [4] 43038 (String)
  UnderlyingReturnRateTotalCommissionPerTrade?: number// [5] 43039 (Float)
  UnderlyingReturnRateDeterminationMethod?: string// [6] 43040 (String)
  UnderlyingReturnRateFXConversionGrp?: IUnderlyingReturnRateFXConversionGrp// [7] NoUnderlyingReturnRateFXConversions.43030, UnderlyingReturnRateFXCurrencySymbol.43031 .. UnderlyingReturnRateFXRateCalc.43033
  UnderlyingReturnRateAmountRelativeTo?: number// [8] 43041 (Int)
  UnderlyingReturnRateQuoteMeasureType?: string// [9] 43042 (String)
  UnderlyingReturnRateQuoteUnits?: string// [10] 43043 (String)
  UnderlyingReturnRateQuoteMethod?: number// [11] 43044 (Int)
  UnderlyingReturnRateQuoteCurrency?: string// [12] 43045 (String)
  UnderlyingReturnRateQuoteCurrencyType?: string// [13] 43046 (String)
  UnderlyingReturnRateQuoteTimeType?: number// [14] 43047 (Int)
  UnderlyingReturnRateQuoteTime?: Date// [15] 43048 (LocalDate)
  UnderlyingReturnRateQuoteDate?: Date// [16] 43049 (LocalDate)
  UnderlyingReturnRateQuoteExpirationTime?: string// [17] 43050 (String)
  UnderlyingReturnRateQuoteBusinessCenter?: string// [18] 43051 (String)
  UnderlyingReturnRateQuoteExchange?: string// [19] 43052 (String)
  UnderlyingReturnRateQuotePricingModel?: string// [20] 43053 (String)
  UnderlyingReturnRateCashFlowType?: string// [21] 43054 (String)
  UnderlyingReturnRateDateGrp?: IUnderlyingReturnRateDateGrp// [22] NoUnderlyingReturnRateDates.43008, UnderlyingReturnRateDateMode.43009 .. UnderlyingReturnRateValuationDateBusinessDayConvention.43029
  UnderlyingReturnRateValuationTimeType?: number// [23] 43055 (Int)
  UnderlyingReturnRateValuationTime?: string// [24] 43056 (String)
  UnderlyingReturnRateValuationTimeBusinessCenter?: string// [25] 43057 (String)
  UnderlyingReturnRateValuationPriceOption?: number// [26] 43058 (Int)
  UnderlyingReturnRateFinalPriceFallback?: number// [27] 43059 (Int)
}
