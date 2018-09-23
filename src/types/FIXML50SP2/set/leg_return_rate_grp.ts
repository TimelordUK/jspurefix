import { ILegReturnRatePriceGrp } from './leg_return_rate_price_grp'
import { ILegReturnRateFXConversionGrp } from './leg_return_rate_fx_conversion_grp'
import { ILegReturnRateInformationSourceGrp } from './leg_return_rate_information_source_grp'
import { ILegReturnRateDateGrp } from './leg_return_rate_date_grp'

export interface ILegReturnRateGrp {
  UnderlyingReturnRatePriceSequence?: number// 43035
  UnderlyingReturnRateCommissionBasis?: string// 43036
  UnderlyingReturnRateCommissionAmount?: number// 43037
  UnderlyingReturnRateCommissionCurrency?: string// 43038
  UnderlyingReturnRateTotalCommissionPerTrade?: number// 43039
  UnderlyingReturnRateDeterminationMethod?: string// 43040
  UnderlyingReturnRateAmountRelativeTo?: number// 43041
  UnderlyingReturnRateQuoteMeasureType?: string// 43042
  UnderlyingReturnRateQuoteUnits?: string// 43043
  UnderlyingReturnRateQuoteMethod?: number// 43044
  UnderlyingReturnRateQuoteCurrency?: string// 43045
  UnderlyingReturnRateQuoteCurrencyType?: string// 43046
  UnderlyingReturnRateQuoteTimeType?: number// 43047
  UnderlyingReturnRateQuoteTime?: Date// 43048
  UnderlyingReturnRateQuoteDate?: Date// 43049
  UnderlyingReturnRateQuoteExpirationTime?: string// 43050
  UnderlyingReturnRateQuoteBusinessCenter?: string// 43051
  UnderlyingReturnRateQuoteExchange?: string// 43052
  UnderlyingReturnRateQuotePricingModel?: string// 43053
  UnderlyingReturnRateCashFlowType?: string// 43054
  UnderlyingReturnRateValuationTimeType?: number// 43055
  UnderlyingReturnRateValuationTime?: string// 43056
  UnderlyingReturnRateValuationTimeBusinessCenter?: string// 43057
  UnderlyingReturnRateValuationPriceOption?: number// 43058
  UnderlyingReturnRateFinalPriceFallback?: number// 43059
  LegReturnRatePriceGrp?: ILegReturnRatePriceGrp[]
  LegReturnRateFXConversionGrp?: ILegReturnRateFXConversionGrp[]
  LegReturnRateInformationSourceGrp?: ILegReturnRateInformationSourceGrp[]
  LegReturnRateDateGrp?: ILegReturnRateDateGrp[]
}
