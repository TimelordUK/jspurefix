import { IUnderlyingPaymentStreamPricingBusinessCenterGrp } from './underlying_payment_stream_pricing_business_center_grp'
import { IUnderlyingPaymentStreamPricingDayGrp } from './underlying_payment_stream_pricing_day_grp'
import { IUnderlyingPaymentStreamPricingDateGrp } from './underlying_payment_stream_pricing_date_grp'
import { IUnderlyingPaymentStreamFormula } from './underlying_payment_stream_formula'
import { IUnderlyingDividendConditions } from './underlying_dividend_conditions'
import { IUnderlyingReturnRateGrp } from './underlying_return_rate_grp'

export interface IUnderlyingPaymentStreamFloatingRate {
  UnderlyingPaymentStreamRateIndex?: string// 40620
  UnderlyingPaymentStreamRateIndexSource?: number// 40621
  UnderlyingPaymentStreamRateIndexCurveUnit?: string// 40622
  UnderlyingPaymentStreamRateIndexCurvePeriod?: number// 40623
  UnderlyingPaymentStreamRateIndex2CurveUnit?: string// 41911
  UnderlyingPaymentStreamRateIndex2CurvePeriod?: number// 41912
  UnderlyingPaymentStreamRateIndexLocation?: string// 41913
  UnderlyingPaymentStreamRateIndexLevel?: number// 41914
  UnderlyingPaymentStreamRateIndexUnitOfMeasure?: string// 41915
  UnderlyingPaymentStreamSettlLevel?: number// 41916
  UnderlyingPaymentStreamReferenceLevel?: number// 41917
  UnderlyingPaymentStreamReferenceLevelUnitOfMeasure?: string// 41918
  UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator?: boolean// 41919
  UnderlyingPaymentStreamRateMultiplier?: number// 40624
  UnderlyingPaymentStreamRateSpread?: number// 40625
  UnderlyingPaymentStreamRateSpreadCurrency?: string// 41920
  UnderlyingPaymentStreamRateSpreadUnitOfMeasure?: string// 41921
  UnderlyingPaymentStreamRateConversionFactor?: number// 41922
  UnderlyingPaymentStreamRateSpreadType?: number// 41923
  UnderlyingPaymentStreamRateSpreadPositionType?: number// 40626
  UnderlyingPaymentStreamRateTreatment?: number// 40627
  UnderlyingPaymentStreamCapRate?: number// 40628
  UnderlyingPaymentStreamCapRateBuySide?: number// 40629
  UnderlyingPaymentStreamCapRateSellSide?: number// 40630
  UnderlyingPaymentStreamFloorRate?: number// 40631
  UnderlyingPaymentStreamFloorRateBuySide?: number// 40632
  UnderlyingPaymentStreamFloorRateSellSide?: number// 40633
  UnderlyingPaymentStreamInitialRate?: number// 40634
  UnderlyingPaymentStreamLastResetRate?: number// 41924
  UnderlyingPaymentStreamFinalRate?: number// 41925
  UnderlyingPaymentStreamFinalRateRoundingDirection?: string// 40635
  UnderlyingPaymentStreamFinalRatePrecision?: number// 40636
  UnderlyingPaymentStreamAveragingMethod?: number// 40637
  UnderlyingPaymentStreamNegativeRateTreatment?: number// 40638
  UnderlyingPaymentStreamCalculationLagPeriod?: number// 41926
  UnderlyingPaymentStreamCalculationLagUnit?: string// 41927
  UnderlyingPaymentStreamFirstObservationDateUnadjusted?: Date// 42958
  UnderlyingPaymentStreamFirstObservationDateRelativeTo?: number// 42959
  UnderlyingPaymentStreamFirstObservationDateOffsetDayType?: number// 42960
  UnderlyingPaymentStreamFirstObservationDateOffsetPeriod?: number// 41928
  UnderlyingPaymentStreamFirstObservationDateOffsetUnit?: string// 41929
  UnderlyingPaymentStreamFirstObservationDateAdjusted?: Date// 42961
  UnderlyingPaymentStreamPricingDayType?: number// 41930
  UnderlyingPaymentStreamPricingDayDistribution?: number// 41931
  UnderlyingPaymentStreamPricingDayCount?: number// 41932
  UnderlyingPaymentStreamPricingBusinessCalendar?: string// 41933
  UnderlyingPaymentStreamPricingBusinessDayConvention?: number// 41934
  UnderlyingPaymentStreamInflationLagPeriod?: number// 40639
  UnderlyingPaymentStreamInflationLagUnit?: string// 40640
  UnderlyingPaymentStreamInflationLagDayType?: number// 40641
  UnderlyingPaymentStreamInflationInterpolationMethod?: number// 40642
  UnderlyingPaymentStreamInflationIndexSource?: number// 40643
  UnderlyingPaymentStreamInflationPublicationSource?: string// 40644
  UnderlyingPaymentStreamInflationInitialIndexLevel?: number// 40645
  UnderlyingPaymentStreamInflationFallbackBondApplicable?: boolean// 40646
  UnderlyingPaymentStreamFRADiscounting?: number// 40647
  UnderlyingPaymentStreamUnderlierRefID?: string// 42962
  UnderlyingReturnRateNotionalReset?: boolean// 42963
  UnderlyingPaymentStreamLinkInitialLevel?: number// 42964
  UnderlyingPaymentStreamLinkClosingLevelIndicator?: boolean// 42965
  UnderlyingPaymentStreamLinkExpiringLevelIndicator?: boolean// 42966
  UnderlyingPaymentStreamLinkEstimatedTradingDays?: number// 42967
  UnderlyingPaymentStreamLinkStrikePrice?: number// 42968
  UnderlyingPaymentStreamLinkStrikePriceType?: number// 42969
  UnderlyingPaymentStreamLinkMaximumBoundary?: number// 42970
  UnderlyingPaymentStreamLinkMinimumBoundary?: number// 42971
  UnderlyingPaymentStreamLinkNumberOfDataSeries?: number// 42972
  UnderlyingPaymentStreamVarianceUnadjustedCap?: number// 42973
  UnderlyingPaymentStreamRealizedVarianceMethod?: number// 42974
  UnderlyingPaymentStreamDaysAdjustmentIndicator?: boolean// 42975
  UnderlyingPaymentStreamNearestExchangeContractRefID?: string// 42976
  UnderlyingPaymentStreamVegaNotionalAmount?: number// 42977
  UnderlyingPaymentStreamPricingBusinessCenterGrp?: IUnderlyingPaymentStreamPricingBusinessCenterGrp[]
  UnderlyingPaymentStreamPricingDayGrp?: IUnderlyingPaymentStreamPricingDayGrp[]
  UnderlyingPaymentStreamPricingDateGrp?: IUnderlyingPaymentStreamPricingDateGrp[]
  UnderlyingPaymentStreamFormula?: IUnderlyingPaymentStreamFormula
  UnderlyingDividendConditions?: IUnderlyingDividendConditions
  UnderlyingReturnRateGrp?: IUnderlyingReturnRateGrp[]
}
