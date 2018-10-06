import { ILegReturnRatePriceGrp } from './leg_return_rate_price_grp'
import { ILegReturnRateFXConversionGrp } from './leg_return_rate_fx_conversion_grp'
import { ILegReturnRateInformationSourceGrp } from './leg_return_rate_information_source_grp'
import { ILegReturnRateDateGrp } from './leg_return_rate_date_grp'

export interface ILegReturnRateGrp {
  LegReturnRatePriceSequence?: number// 42535
  LegReturnRateCommissionBasis?: string// 42536
  LegReturnRateCommissionAmount?: number// 42537
  LegReturnRateCommissionCurrency?: string// 42538
  LegReturnRateTotalCommissionPerTrade?: number// 42539
  LegReturnRateDeterminationMethod?: string// 42540
  LegReturnRateAmountRelativeTo?: number// 42541
  LegReturnRateQuoteMeasureType?: string// 42542
  LegReturnRateQuoteUnits?: string// 42543
  LegReturnRateQuoteMethod?: number// 42544
  LegReturnRateQuoteCurrency?: string// 42545
  LegReturnRateQuoteCurrencyType?: string// 42546
  LegReturnRateQuoteTimeType?: number// 42547
  LegReturnRateQuoteTime?: string// 42548
  LegReturnRateQuoteDate?: Date// 42549
  LegReturnRateQuoteExpirationTime?: string// 42550
  LegReturnRateQuoteBusinessCenter?: string// 42551
  LegReturnRateQuoteExchange?: string// 42552
  LegReturnRateQuotePricingModel?: string// 42553
  LegReturnRateCashFlowType?: string// 42554
  LegReturnRateValuationTimeType?: number// 42555
  LegReturnRateValuationTime?: string// 42556
  LegReturnRateValuationTimeBusinessCenter?: string// 42557
  LegReturnRateValuationPriceOption?: number// 42558
  LegReturnRateFinalPriceFallback?: number// 42559
  LegReturnRatePriceGrp?: ILegReturnRatePriceGrp[]
  LegReturnRateFXConversionGrp?: ILegReturnRateFXConversionGrp[]
  LegReturnRateInformationSourceGrp?: ILegReturnRateInformationSourceGrp[]
  LegReturnRateDateGrp?: ILegReturnRateDateGrp[]
}
