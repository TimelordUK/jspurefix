import { ILegPaymentStreamPricingBusinessCenterGrp } from './leg_payment_stream_pricing_business_center_grp'
import { ILegPaymentStreamPricingDayGrp } from './leg_payment_stream_pricing_day_grp'
import { ILegPaymentStreamPricingDateGrp } from './leg_payment_stream_pricing_date_grp'
import { ILegPaymentStreamFormula } from './leg_payment_stream_formula'
import { ILegDividendConditions } from './leg_dividend_conditions'
import { ILegReturnRateGrp } from './leg_return_rate_grp'

export interface ILegPaymentStreamFloatingRate {
  LegPaymentStreamRateIndex?: string// 40331
  LegPaymentStreamRateIndexSource?: number// 40332
  LegPaymentStreamRateIndexCurveUnit?: string// 40333
  LegPaymentStreamRateIndexCurvePeriod?: number// 40334
  LegPaymentStreamRateIndex2CurveUnit?: string// 41563
  LegPaymentStreamRateIndex2CurvePeriod?: number// 41564
  LegPaymentStreamRateIndexLocation?: string// 41565
  LegPaymentStreamRateIndexLevel?: number// 41566
  LegPaymentStreamRateIndexUnitOfMeasure?: string// 41567
  LegPaymentStreamSettlLevel?: number// 41568
  LegPaymentStreamReferenceLevel?: number// 41569
  LegPaymentStreamReferenceLevelUnitOfMeasure?: string// 41570
  LegPaymentStreamReferenceLevelEqualsZeroIndicator?: boolean// 41571
  LegPaymentStreamRateMultiplier?: number// 40335
  LegPaymentStreamRateSpread?: number// 40336
  LegPaymentStreamRateSpreadCurrency?: string// 41572
  LegPaymentStreamRateSpreadUnitOfMeasure?: string// 41573
  LegPaymentStreamRateConversionFactor?: number// 41574
  LegPaymentStreamRateSpreadType?: number// 41575
  LegPaymentStreamRateSpreadPositionType?: number// 40337
  LegPaymentStreamRateTreatment?: number// 40338
  LegPaymentStreamCapRate?: number// 40339
  LegPaymentStreamCapRateBuySide?: number// 40340
  LegPaymentStreamCapRateSellSide?: number// 40341
  LegPaymentStreamFloorRate?: number// 40342
  LegPaymentStreamFloorRateBuySide?: number// 40343
  LegPaymentStreamFloorRateSellSide?: number// 40344
  LegPaymentStreamInitialRate?: number// 40345
  LegPaymentStreamLastResetRate?: number// 41576
  LegPaymentStreamFinalRate?: number// 41577
  LegPaymentStreamFinalRateRoundingDirection?: string// 40346
  LegPaymentStreamFinalRatePrecision?: number// 40347
  LegPaymentStreamAveragingMethod?: number// 40348
  LegPaymentStreamNegativeRateTreatment?: number// 40349
  LegPaymentStreamCalculationLagPeriod?: number// 41578
  LegPaymentStreamCalculationLagUnit?: string// 41579
  LegPaymentStreamFirstObservationDateUnadjusted?: Date// 42462
  LegPaymentStreamFirstObservationDateRelativeTo?: number// 42463
  LegPaymentStreamFirstObservationDateOffsetDayType?: number// 42464
  LegPaymentStreamFirstObservationDateOffsetPeriod?: number// 41580
  LegPaymentStreamFirstObservationDateOffsetUnit?: string// 41581
  LegPaymentStreamFirstObservationDateAdjusted?: Date// 42465
  LegPaymentStreamPricingDayType?: number// 41582
  LegPaymentStreamPricingDayDistribution?: number// 41583
  LegPaymentStreamPricingDayCount?: number// 41584
  LegPaymentStreamPricingBusinessCalendar?: string// 41585
  LegPaymentStreamPricingBusinessDayConvention?: number// 41586
  LegPaymentStreamInflationLagPeriod?: number// 40350
  LegPaymentStreamInflationLagUnit?: string// 40351
  LegPaymentStreamInflationLagDayType?: number// 40352
  LegPaymentStreamInflationInterpolationMethod?: number// 40353
  LegPaymentStreamInflationIndexSource?: number// 40354
  LegPaymentStreamInflationPublicationSource?: string// 40355
  LegPaymentStreamInflationInitialIndexLevel?: number// 40356
  LegPaymentStreamInflationFallbackBondApplicable?: boolean// 40357
  LegPaymentStreamFRADiscounting?: number// 40358
  LegPaymentStreamUnderlierRefID?: string// 42466
  LegReturnRateNotionalReset?: boolean// 42467
  LegPaymentStreamLinkInitialLevel?: number// 42468
  LegPaymentStreamLinkClosingLevelIndicator?: boolean// 42469
  LegPaymentStreamLinkExpiringLevelIndicator?: boolean// 42470
  LegPaymentStreamLinkEstimatedTradingDays?: number// 42471
  LegPaymentStreamLinkStrikePrice?: number// 42472
  LegPaymentStreamLinkStrikePriceType?: number// 42473
  LegPaymentStreamLinkMaximumBoundary?: number// 42474
  LegPaymentStreamLinkMinimumBoundary?: number// 42475
  LegPaymentStreamLinkNumberOfDataSeries?: number// 42476
  LegPaymentStreamVarianceUnadjustedCap?: number// 42477
  LegPaymentStreamRealizedVarianceMethod?: number// 42478
  LegPaymentStreamDaysAdjustmentIndicator?: boolean// 42479
  LegPaymentStreamNearestExchangeContractRefID?: string// 42480
  LegPaymentStreamVegaNotionalAmount?: number// 42481
  LegPaymentStreamPricingBusinessCenterGrp?: ILegPaymentStreamPricingBusinessCenterGrp[]
  LegPaymentStreamPricingDayGrp?: ILegPaymentStreamPricingDayGrp[]
  LegPaymentStreamPricingDateGrp?: ILegPaymentStreamPricingDateGrp[]
  LegPaymentStreamFormula?: ILegPaymentStreamFormula
  LegDividendConditions?: ILegDividendConditions
  LegReturnRateGrp?: ILegReturnRateGrp[]
}
