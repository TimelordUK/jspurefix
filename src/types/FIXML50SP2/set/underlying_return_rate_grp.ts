import { IUnderlyingReturnRatePriceGrp } from './underlying_return_rate_price_grp'
import { IUnderlyingReturnRateFXConversionGrp } from './underlying_return_rate_fx_conversion_grp'
import { IUnderlyingReturnRateInformationSourceGrp } from './underlying_return_rate_information_source_grp'
import { IUnderlyingReturnRateDateGrp } from './underlying_return_rate_date_grp'

export interface IUnderlyingReturnRateGrp {
  UnderlyingReturnRatePriceSequence?: number// [1] 43035 (Int)
  UnderlyingReturnRateCommissionBasis?: string// [1] 43036 (String)
  UnderlyingReturnRateCommissionAmount?: number// [1] 43037 (Float)
  UnderlyingReturnRateCommissionCurrency?: string// [1] 43038 (String)
  UnderlyingReturnRateTotalCommissionPerTrade?: number// [1] 43039 (Float)
  UnderlyingReturnRateDeterminationMethod?: string// [1] 43040 (String)
  UnderlyingReturnRateAmountRelativeTo?: number// [1] 43041 (Int)
  UnderlyingReturnRateQuoteMeasureType?: string// [1] 43042 (String)
  UnderlyingReturnRateQuoteUnits?: string// [1] 43043 (String)
  UnderlyingReturnRateQuoteMethod?: number// [1] 43044 (Int)
  UnderlyingReturnRateQuoteCurrency?: string// [1] 43045 (String)
  UnderlyingReturnRateQuoteCurrencyType?: string// [1] 43046 (String)
  UnderlyingReturnRateQuoteTimeType?: number// [1] 43047 (Int)
  UnderlyingReturnRateQuoteTime?: Date// [1] 43048 (LocalDate)
  UnderlyingReturnRateQuoteDate?: Date// [1] 43049 (LocalDate)
  UnderlyingReturnRateQuoteExpirationTime?: string// [1] 43050 (String)
  UnderlyingReturnRateQuoteBusinessCenter?: string// [1] 43051 (String)
  UnderlyingReturnRateQuoteExchange?: string// [1] 43052 (String)
  UnderlyingReturnRateQuotePricingModel?: string// [1] 43053 (String)
  UnderlyingReturnRateCashFlowType?: string// [1] 43054 (String)
  UnderlyingReturnRateValuationTimeType?: number// [1] 43055 (Int)
  UnderlyingReturnRateValuationTime?: string// [1] 43056 (String)
  UnderlyingReturnRateValuationTimeBusinessCenter?: string// [1] 43057 (String)
  UnderlyingReturnRateValuationPriceOption?: number// [1] 43058 (Int)
  UnderlyingReturnRateFinalPriceFallback?: number// [1] 43059 (Int)
  UnderlyingReturnRatePriceGrp?: IUnderlyingReturnRatePriceGrp[]// [1] PxBasis.43065, Px.43066 .. PxTyp.43068
  UnderlyingReturnRateFXConversionGrp?: IUnderlyingReturnRateFXConversionGrp[]// [2] CcySym.43031, FxRt.43032, FxRtCalc.43033
  UnderlyingReturnRateInformationSourceGrp?: IUnderlyingReturnRateInformationSourceGrp[]// [3] RtSrc.43061, RefPg.43062, RefHdng.43063
  UnderlyingReturnRateDateGrp?: IUnderlyingReturnRateDateGrp[]// [4] Mode.43009, Reltv.43010 .. BizDayCnvtn.43029
}
