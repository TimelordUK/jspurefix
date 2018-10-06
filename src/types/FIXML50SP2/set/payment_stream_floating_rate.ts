import { IPaymentStreamPricingBusinessCenterGrp } from './payment_stream_pricing_business_center_grp'
import { IPaymentStreamPricingDayGrp } from './payment_stream_pricing_day_grp'
import { IPaymentStreamPricingDateGrp } from './payment_stream_pricing_date_grp'
import { IPaymentStreamFormula } from './payment_stream_formula'
import { IDividendConditions } from './dividend_conditions'
import { IReturnRateGrp } from './return_rate_grp'

export interface IPaymentStreamFloatingRate {
  PaymentStreamRateIndex?: string// 40789
  PaymentStreamRateIndexSource?: number// 40790
  PaymentStreamRateIndexCurveUnit?: string// 40791
  PaymentStreamRateIndexCurvePeriod?: number// 40792
  PaymentStreamRateIndex2CurvePeriod?: number// 41194
  PaymentStreamRateIndex2CurveUnit?: string// 41195
  PaymentStreamRateIndexLocation?: string// 41196
  PaymentStreamRateIndexLevel?: number// 41197
  PaymentStreamRateIndexUnitOfMeasure?: string// 41198
  PaymentStreamSettlLevel?: number// 41199
  PaymentStreamReferenceLevel?: number// 41200
  PaymentStreamReferenceLevelUnitOfMeasure?: string// 41201
  PaymentStreamReferenceLevelEqualsZeroIndicator?: boolean// 41202
  PaymentStreamRateMultiplier?: number// 40793
  PaymentStreamRateSpread?: number// 40794
  PaymentStreamRateSpreadCurrency?: string// 41203
  PaymentStreamRateSpreadUnitOfMeasure?: string// 41204
  PaymentStreamRateConversionFactor?: number// 41205
  PaymentStreamRateSpreadType?: number// 41206
  PaymentStreamRateSpreadPositionType?: number// 40795
  PaymentStreamRateTreatment?: number// 40796
  PaymentStreamCapRate?: number// 40797
  PaymentStreamCapRateBuySide?: number// 40798
  PaymentStreamCapRateSellSide?: number// 40799
  PaymentStreamFloorRate?: number// 40800
  PaymentStreamFloorRateBuySide?: number// 40801
  PaymentStreamFloorRateSellSide?: number// 40802
  PaymentStreamInitialRate?: number// 40803
  PaymentStreamLastResetRate?: number// 41207
  PaymentStreamFinalRate?: number// 41208
  PaymentStreamFinalRateRoundingDirection?: string// 40804
  PaymentStreamFinalRatePrecision?: number// 40805
  PaymentStreamAveragingMethod?: number// 40806
  PaymentStreamNegativeRateTreatment?: number// 40807
  PaymentStreamCalculationLagPeriod?: number// 41209
  PaymentStreamCalculationLagUnit?: string// 41210
  PaymentStreamFirstObservationDateUnadjusted?: Date// 42663
  PaymentStreamFirstObservationDateRelativeTo?: number// 42664
  PaymentStreamFirstObservationDateOffsetDayType?: number// 42665
  PaymentStreamFirstObservationDateOffsetPeriod?: number// 41211
  PaymentStreamFirstObservationDateOffsetUnit?: string// 41212
  PaymentStreamFirstObservationDateAdjusted?: Date// 42666
  PaymentStreamPricingDayType?: number// 41213
  PaymentStreamPricingDayDistribution?: number// 41214
  PaymentStreamPricingDayCount?: number// 41215
  PaymentStreamPricingBusinessCalendar?: string// 41216
  PaymentStreamPricingBusinessDayConvention?: number// 41217
  PaymentStreamInflationLagPeriod?: number// 40808
  PaymentStreamInflationLagUnit?: string// 40809
  PaymentStreamInflationLagDayType?: number// 40810
  PaymentStreamInflationInterpolationMethod?: number// 40811
  PaymentStreamInflationIndexSource?: number// 40812
  PaymentStreamInflationPublicationSource?: string// 40813
  PaymentStreamInflationInitialIndexLevel?: number// 40814
  PaymentStreamInflationFallbackBondApplicable?: boolean// 40815
  PaymentStreamFRADiscounting?: number// 40816
  PaymentStreamUnderlierRefID?: string// 42667
  ReturnRateNotionalReset?: boolean// 42668
  PaymentStreamLinkInitialLevel?: number// 42669
  PaymentStreamLinkClosingLevelIndicator?: boolean// 42670
  PaymentStreamLinkExpiringLevelIndicator?: boolean// 42671
  PaymentStreamLinkEstimatedTradingDays?: number// 42672
  PaymentStreamLinkStrikePrice?: number// 42673
  PaymentStreamLinkStrikePriceType?: number// 42674
  PaymentStreamLinkMaximumBoundary?: number// 42675
  PaymentStreamLinkMinimumBoundary?: number// 42676
  PaymentStreamLinkNumberOfDataSeries?: number// 42677
  PaymentStreamVarianceUnadjustedCap?: number// 42678
  PaymentStreamRealizedVarianceMethod?: number// 42679
  PaymentStreamDaysAdjustmentIndicator?: boolean// 42680
  PaymentStreamNearestExchangeContractRefID?: string// 42681
  PaymentStreamVegaNotionalAmount?: number// 42682
  PaymentStreamPricingBusinessCenterGrp?: IPaymentStreamPricingBusinessCenterGrp[]
  PaymentStreamPricingDayGrp?: IPaymentStreamPricingDayGrp[]
  PaymentStreamPricingDateGrp?: IPaymentStreamPricingDateGrp[]
  PaymentStreamFormula?: IPaymentStreamFormula
  DividendConditions?: IDividendConditions
  ReturnRateGrp?: IReturnRateGrp[]
}
