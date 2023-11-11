import { ILegReturnRatePriceGrp } from './leg_return_rate_price_grp'
import { ILegReturnRateFXConversionGrp } from './leg_return_rate_fx_conversion_grp'
import { ILegReturnRateInformationSourceGrp } from './leg_return_rate_information_source_grp'
import { ILegReturnRateDateGrp } from './leg_return_rate_date_grp'

export interface ILegReturnRateGrp {
  LegReturnRatePriceSequence?: number// [1] 42535 (Int)
  LegReturnRateCommissionBasis?: string// [1] 42536 (String)
  LegReturnRateCommissionAmount?: number// [1] 42537 (Float)
  LegReturnRateCommissionCurrency?: string// [1] 42538 (String)
  LegReturnRateTotalCommissionPerTrade?: number// [1] 42539 (Float)
  LegReturnRateDeterminationMethod?: string// [1] 42540 (String)
  LegReturnRateAmountRelativeTo?: number// [1] 42541 (Int)
  LegReturnRateQuoteMeasureType?: string// [1] 42542 (String)
  LegReturnRateQuoteUnits?: string// [1] 42543 (String)
  LegReturnRateQuoteMethod?: number// [1] 42544 (Int)
  LegReturnRateQuoteCurrency?: string// [1] 42545 (String)
  LegReturnRateQuoteCurrencyType?: string// [1] 42546 (String)
  LegReturnRateQuoteTimeType?: number// [1] 42547 (Int)
  LegReturnRateQuoteTime?: string// [1] 42548 (String)
  LegReturnRateQuoteDate?: Date// [1] 42549 (LocalDate)
  LegReturnRateQuoteExpirationTime?: string// [1] 42550 (String)
  LegReturnRateQuoteBusinessCenter?: string// [1] 42551 (String)
  LegReturnRateQuoteExchange?: string// [1] 42552 (String)
  LegReturnRateQuotePricingModel?: string// [1] 42553 (String)
  LegReturnRateCashFlowType?: string// [1] 42554 (String)
  LegReturnRateValuationTimeType?: number// [1] 42555 (Int)
  LegReturnRateValuationTime?: string// [1] 42556 (String)
  LegReturnRateValuationTimeBusinessCenter?: string// [1] 42557 (String)
  LegReturnRateValuationPriceOption?: number// [1] 42558 (Int)
  LegReturnRateFinalPriceFallback?: number// [1] 42559 (Int)
  LegReturnRatePriceGrp?: ILegReturnRatePriceGrp[]// [1] PxBasis.42565, Px.42566 .. PxTyp.42568
  LegReturnRateFXConversionGrp?: ILegReturnRateFXConversionGrp[]// [2] CcySym.42531, FxRt.42532, FxRtCalc.42533
  LegReturnRateInformationSourceGrp?: ILegReturnRateInformationSourceGrp[]// [3] RtSrc.42561, RefPg.42562, RefHdng.42563
  LegReturnRateDateGrp?: ILegReturnRateDateGrp[]// [4] Mode.42509, Reltv.42510 .. BizDayCnvtn.42529
}
