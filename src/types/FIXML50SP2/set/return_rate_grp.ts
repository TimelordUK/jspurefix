import { IReturnRatePriceGrp } from './return_rate_price_grp'
import { IReturnRateFXConversionGrp } from './return_rate_fx_conversion_grp'
import { IReturnRateInformationSourceGrp } from './return_rate_information_source_grp'
import { IReturnRateDateGrp } from './return_rate_date_grp'

export interface IReturnRateGrp {
  ReturnRatePriceSequence?: number// 42736
  ReturnRateCommissionBasis?: string// 42737
  ReturnRateCommissionAmount?: number// 42738
  ReturnRateCommissionCurrency?: string// 42739
  ReturnRateTotalCommissionPerTrade?: number// 42740
  ReturnRateDeterminationMethod?: string// 42741
  ReturnRateAmountRelativeTo?: number// 42742
  ReturnRateQuoteMeasureType?: string// 42743
  ReturnRateQuoteUnits?: string// 42744
  ReturnRateQuoteMethod?: number// 42745
  ReturnRateQuoteCurrency?: string// 42746
  ReturnRateQuoteCurrencyType?: string// 42747
  ReturnRateQuoteTimeType?: number// 42748
  ReturnRateQuoteTime?: string// 42749
  ReturnRateQuoteDate?: Date// 42750
  ReturnRateQuoteExpirationTime?: string// 42751
  ReturnRateQuoteBusinessCenter?: string// 42752
  ReturnRateQuoteExchange?: string// 42753
  ReturnRateQuotePricingModel?: string// 42754
  ReturnRateCashFlowType?: string// 42755
  ReturnRateValuationTimeType?: number// 42756
  ReturnRateValuationTime?: string// 42757
  ReturnRateValuationTimeBusinessCenter?: string// 42758
  ReturnRateValuationPriceOption?: number// 42759
  ReturnRateFinalPriceFallback?: number// 42760
  ReturnRatePriceGrp?: IReturnRatePriceGrp[]
  ReturnRateFXConversionGrp?: IReturnRateFXConversionGrp[]
  ReturnRateInformationSourceGrp?: IReturnRateInformationSourceGrp[]
  ReturnRateDateGrp?: IReturnRateDateGrp[]
}
