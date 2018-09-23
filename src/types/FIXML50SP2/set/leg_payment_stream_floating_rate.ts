import { ILegPaymentStreamPricingBusinessCenterGrp } from './leg_payment_stream_pricing_business_center_grp'
import { ILegPaymentStreamPricingDayGrp } from './leg_payment_stream_pricing_day_grp'
import { ILegPaymentStreamPricingDateGrp } from './leg_payment_stream_pricing_date_grp'
import { ILegPaymentStreamFormula } from './leg_payment_stream_formula'
import { ILegDividendConditions } from './leg_dividend_conditions'
import { ILegReturnRateGrp } from './leg_return_rate_grp'

export interface ILegPaymentStreamFloatingRate {
  UnderlyingPaymentStreamCompoundingRateIndex?: string// 42923
  PaymentStubIndexSource?: number// 40879
  UnderlyingPaymentStreamCompoundingRateIndexCurveUnit?: string// 42925
  UnderlyingPaymentStreamCompoundingRateIndexCurvePeriod?: number// 42924
  UnderlyingPaymentStreamRateIndex2CurveUnit?: string// 41911
  UnderlyingPaymentStreamRateIndex2CurvePeriod?: number// 41912
  UnderlyingPaymentStreamRateIndexLocation?: string// 41913
  UnderlyingPaymentStreamRateIndexLevel?: number// 41914
  UnderlyingPaymentStreamRateIndexUnitOfMeasure?: string// 41915
  UnderlyingPaymentStreamSettlLevel?: number// 41916
  UnderlyingPaymentStreamReferenceLevel?: number// 41917
  UnderlyingPaymentStreamReferenceLevelUnitOfMeasure?: string// 41918
  UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator?: string// 41919
  UnderlyingPaymentStreamCompoundingRateMultiplier?: string// 42926
  UnderlyingPaymentStreamCompoundingRateSpread?: string// 42927
  UnderlyingPaymentStreamRateSpreadCurrency?: string// 41920
  UnderlyingPaymentStreamRateSpreadUnitOfMeasure?: string// 41921
  UnderlyingPaymentStreamRateConversionFactor?: string// 41922
  UnderlyingPaymentStreamRateSpreadType?: number// 41923
  UnderlyingPaymentStreamCompoundingRateSpreadPositionType?: number// 42928
  UnderlyingPaymentStreamCompoundingRateTreatment?: number// 42929
  UnderlyingPaymentStreamCompoundingCapRate?: number// 42930
  UnderlyingPaymentStreamCompoundingCapRateBuySide?: number// 42931
  UnderlyingPaymentStreamCompoundingCapRateSellSide?: number// 42932
  UnderlyingPaymentStreamCompoundingFloorRate?: number// 42933
  UnderlyingPaymentStreamCompoundingFloorRateBuySide?: number// 42934
  UnderlyingPaymentStreamCompoundingFloorRateSellSide?: number// 42935
  UnderlyingPaymentStreamCompoundingInitialRate?: number// 42936
  UnderlyingPaymentStreamLastResetRate?: number// 41924
  UnderlyingPaymentStreamFinalRate?: number// 41925
  UnderlyingPaymentStreamCompoundingFinalRateRoundingDirection?: string// 42937
  UnderlyingPaymentStreamCompoundingFinalRatePrecision?: number// 42938
  UnderlyingPaymentStreamCompoundingAveragingMethod?: number// 42939
  UnderlyingPaymentStreamCompoundingNegativeRateTreatment?: number// 42940
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
  PaymentStreamInflationLagPeriod?: number// 40808
  PaymentStreamInflationLagUnit?: string// 40809
  PaymentStreamInflationLagDayType?: number// 40810
  UnderlyingPaymentStreamInterpolationMethod?: number// 42898
  PaymentStreamInflationIndexSource?: number// 40812
  PaymentStreamInflationPublicationSource?: string// 40813
  PaymentStreamInflationInitialIndexLevel?: string// 40814
  PaymentStreamInflationFallbackBondApplicable?: string// 40815
  PaymentStreamFRADiscounting?: number// 40816
  UnderlyingPaymentStreamUnderlierRefID?: string// 42962
  UnderlyingReturnRateNotionalReset?: string// 42963
  UnderlyingPaymentStreamLinkInitialLevel?: number// 42964
  LegPaymentStreamLinkClosingLevelIndicator?: string// 42469
  UnderlyingPaymentStreamLinkExpiringLevelIndicator?: string// 42966
  UnderlyingPaymentStreamLinkEstimatedTradingDays?: number// 42967
  UnderlyingPaymentStreamLinkStrikePrice?: number// 42968
  UnderlyingPaymentStreamLinkStrikePriceType?: number// 42969
  UnderlyingPaymentStreamLinkMaximumBoundary?: string// 42970
  UnderlyingPaymentStreamLinkMinimumBoundary?: string// 42971
  UnderlyingPaymentStreamLinkNumberOfDataSeries?: number// 42972
  UnderlyingPaymentStreamVarianceUnadjustedCap?: string// 42973
  UnderlyingPaymentStreamRealizedVarianceMethod?: number// 42974
  UnderlyingPaymentStreamDaysAdjustmentIndicator?: string// 42975
  UnderlyingPaymentStreamNearestExchangeContractRefID?: string// 42976
  UnderlyingPaymentStreamVegaNotionalAmount?: string// 42977
  LegPaymentStreamPricingBusinessCenterGrp?: ILegPaymentStreamPricingBusinessCenterGrp[]
  LegPaymentStreamPricingDayGrp?: ILegPaymentStreamPricingDayGrp[]
  LegPaymentStreamPricingDateGrp?: ILegPaymentStreamPricingDateGrp[]
  LegPaymentStreamFormula?: ILegPaymentStreamFormula
  LegDividendConditions?: ILegDividendConditions
  LegReturnRateGrp?: ILegReturnRateGrp[]
}
