import { IReturnRatePriceGrp } from './return_rate_price_grp'
import { IReturnRateFXConversionGrp } from './return_rate_fx_conversion_grp'
import { IReturnRateInformationSourceGrp } from './return_rate_information_source_grp'
import { IReturnRateDateGrp } from './return_rate_date_grp'

export interface IReturnRateGrp {
  ReturnRatePriceSequence?: number// [1] 42736 (Int)
  ReturnRateCommissionBasis?: string// [1] 42737 (String)
  ReturnRateCommissionAmount?: number// [1] 42738 (Float)
  ReturnRateCommissionCurrency?: string// [1] 42739 (String)
  ReturnRateTotalCommissionPerTrade?: number// [1] 42740 (Float)
  ReturnRateDeterminationMethod?: string// [1] 42741 (String)
  ReturnRateAmountRelativeTo?: number// [1] 42742 (Int)
  ReturnRateQuoteMeasureType?: string// [1] 42743 (String)
  ReturnRateQuoteUnits?: string// [1] 42744 (String)
  ReturnRateQuoteMethod?: number// [1] 42745 (Int)
  ReturnRateQuoteCurrency?: string// [1] 42746 (String)
  ReturnRateQuoteCurrencyType?: string// [1] 42747 (String)
  ReturnRateQuoteTimeType?: number// [1] 42748 (Int)
  ReturnRateQuoteTime?: string// [1] 42749 (String)
  ReturnRateQuoteDate?: Date// [1] 42750 (LocalDate)
  ReturnRateQuoteExpirationTime?: string// [1] 42751 (String)
  ReturnRateQuoteBusinessCenter?: string// [1] 42752 (String)
  ReturnRateQuoteExchange?: string// [1] 42753 (String)
  ReturnRateQuotePricingModel?: string// [1] 42754 (String)
  ReturnRateCashFlowType?: string// [1] 42755 (String)
  ReturnRateValuationTimeType?: number// [1] 42756 (Int)
  ReturnRateValuationTime?: string// [1] 42757 (String)
  ReturnRateValuationTimeBusinessCenter?: string// [1] 42758 (String)
  ReturnRateValuationPriceOption?: number// [1] 42759 (Int)
  ReturnRateFinalPriceFallback?: number// [1] 42760 (Int)
  ReturnRatePriceGrp?: IReturnRatePriceGrp[]// [1] PxBasis.42766, Px.42767 .. PxTyp.42769
  ReturnRateFXConversionGrp?: IReturnRateFXConversionGrp[]// [2] CcySym.42732, FxRt.42733, FxRtCalc.42734
  ReturnRateInformationSourceGrp?: IReturnRateInformationSourceGrp[]// [3] RtSrc.42762, RefPg.42763, RefHdng.42764
  ReturnRateDateGrp?: IReturnRateDateGrp[]// [4] Mode.42710, Reltv.42711 .. BizDayCnvtn.42730
}
