import { ILegPaymentStreamPricingBusinessCenterGrp } from './leg_payment_stream_pricing_business_center_grp'
import { ILegPaymentStreamPricingDayGrp } from './leg_payment_stream_pricing_day_grp'
import { ILegPaymentStreamPricingDateGrp } from './leg_payment_stream_pricing_date_grp'
import { ILegPaymentStreamFormula } from './leg_payment_stream_formula'
import { ILegDividendConditions } from './leg_dividend_conditions'
import { ILegReturnRateGrp } from './leg_return_rate_grp'

export interface ILegPaymentStreamFloatingRate {
  LegPaymentStreamRateIndex?: string// [1] 40331 (String)
  LegPaymentStreamRateIndexSource?: number// [1] 40332 (Int)
  LegPaymentStreamRateIndexCurveUnit?: string// [1] 40333 (String)
  LegPaymentStreamRateIndexCurvePeriod?: number// [1] 40334 (Int)
  LegPaymentStreamRateIndex2CurveUnit?: string// [1] 41563 (String)
  LegPaymentStreamRateIndex2CurvePeriod?: number// [1] 41564 (Int)
  LegPaymentStreamRateIndexLocation?: string// [1] 41565 (String)
  LegPaymentStreamRateIndexLevel?: number// [1] 41566 (Float)
  LegPaymentStreamRateIndexUnitOfMeasure?: string// [1] 41567 (String)
  LegPaymentStreamSettlLevel?: number// [1] 41568 (Int)
  LegPaymentStreamReferenceLevel?: number// [1] 41569 (Float)
  LegPaymentStreamReferenceLevelUnitOfMeasure?: string// [1] 41570 (String)
  LegPaymentStreamReferenceLevelEqualsZeroIndicator?: boolean// [1] 41571 (Boolean)
  LegPaymentStreamRateMultiplier?: number// [1] 40335 (Float)
  LegPaymentStreamRateSpread?: number// [1] 40336 (Float)
  LegPaymentStreamRateSpreadCurrency?: string// [1] 41572 (String)
  LegPaymentStreamRateSpreadUnitOfMeasure?: string// [1] 41573 (String)
  LegPaymentStreamRateConversionFactor?: number// [1] 41574 (Float)
  LegPaymentStreamRateSpreadType?: number// [1] 41575 (Int)
  LegPaymentStreamRateSpreadPositionType?: number// [1] 40337 (Int)
  LegPaymentStreamRateTreatment?: number// [1] 40338 (Int)
  LegPaymentStreamCapRate?: number// [1] 40339 (Float)
  LegPaymentStreamCapRateBuySide?: number// [1] 40340 (Int)
  LegPaymentStreamCapRateSellSide?: number// [1] 40341 (Int)
  LegPaymentStreamFloorRate?: number// [1] 40342 (Float)
  LegPaymentStreamFloorRateBuySide?: number// [1] 40343 (Int)
  LegPaymentStreamFloorRateSellSide?: number// [1] 40344 (Int)
  LegPaymentStreamInitialRate?: number// [1] 40345 (Float)
  LegPaymentStreamLastResetRate?: number// [1] 41576 (Float)
  LegPaymentStreamFinalRate?: number// [1] 41577 (Float)
  LegPaymentStreamFinalRateRoundingDirection?: string// [1] 40346 (String)
  LegPaymentStreamFinalRatePrecision?: number// [1] 40347 (Int)
  LegPaymentStreamAveragingMethod?: number// [1] 40348 (Int)
  LegPaymentStreamNegativeRateTreatment?: number// [1] 40349 (Int)
  LegPaymentStreamCalculationLagPeriod?: number// [1] 41578 (Int)
  LegPaymentStreamCalculationLagUnit?: string// [1] 41579 (String)
  LegPaymentStreamFirstObservationDateUnadjusted?: Date// [1] 42462 (LocalDate)
  LegPaymentStreamFirstObservationDateRelativeTo?: number// [1] 42463 (Int)
  LegPaymentStreamFirstObservationDateOffsetDayType?: number// [1] 42464 (Int)
  LegPaymentStreamFirstObservationDateOffsetPeriod?: number// [1] 41580 (Int)
  LegPaymentStreamFirstObservationDateOffsetUnit?: string// [1] 41581 (String)
  LegPaymentStreamFirstObservationDateAdjusted?: Date// [1] 42465 (LocalDate)
  LegPaymentStreamPricingDayType?: number// [1] 41582 (Int)
  LegPaymentStreamPricingDayDistribution?: number// [1] 41583 (Int)
  LegPaymentStreamPricingDayCount?: number// [1] 41584 (Int)
  LegPaymentStreamPricingBusinessCalendar?: string// [1] 41585 (String)
  LegPaymentStreamPricingBusinessDayConvention?: number// [1] 41586 (Int)
  LegPaymentStreamInflationLagPeriod?: number// [1] 40350 (Int)
  LegPaymentStreamInflationLagUnit?: string// [1] 40351 (String)
  LegPaymentStreamInflationLagDayType?: number// [1] 40352 (Int)
  LegPaymentStreamInflationInterpolationMethod?: number// [1] 40353 (Int)
  LegPaymentStreamInflationIndexSource?: number// [1] 40354 (Int)
  LegPaymentStreamInflationPublicationSource?: string// [1] 40355 (String)
  LegPaymentStreamInflationInitialIndexLevel?: number// [1] 40356 (Float)
  LegPaymentStreamInflationFallbackBondApplicable?: boolean// [1] 40357 (Boolean)
  LegPaymentStreamFRADiscounting?: number// [1] 40358 (Int)
  LegPaymentStreamUnderlierRefID?: string// [1] 42466 (String)
  LegReturnRateNotionalReset?: boolean// [1] 42467 (Boolean)
  LegPaymentStreamLinkInitialLevel?: number// [1] 42468 (Float)
  LegPaymentStreamLinkClosingLevelIndicator?: boolean// [1] 42469 (Boolean)
  LegPaymentStreamLinkExpiringLevelIndicator?: boolean// [1] 42470 (Boolean)
  LegPaymentStreamLinkEstimatedTradingDays?: number// [1] 42471 (Int)
  LegPaymentStreamLinkStrikePrice?: number// [1] 42472 (Float)
  LegPaymentStreamLinkStrikePriceType?: number// [1] 42473 (Int)
  LegPaymentStreamLinkMaximumBoundary?: number// [1] 42474 (Float)
  LegPaymentStreamLinkMinimumBoundary?: number// [1] 42475 (Float)
  LegPaymentStreamLinkNumberOfDataSeries?: number// [1] 42476 (Int)
  LegPaymentStreamVarianceUnadjustedCap?: number// [1] 42477 (Float)
  LegPaymentStreamRealizedVarianceMethod?: number// [1] 42478 (Int)
  LegPaymentStreamDaysAdjustmentIndicator?: boolean// [1] 42479 (Boolean)
  LegPaymentStreamNearestExchangeContractRefID?: string// [1] 42480 (String)
  LegPaymentStreamVegaNotionalAmount?: number// [1] 42481 (Float)
  LegPaymentStreamPricingBusinessCenterGrp?: ILegPaymentStreamPricingBusinessCenterGrp[]// [1] Ctr.41562
  LegPaymentStreamPricingDayGrp?: ILegPaymentStreamPricingDayGrp[]// [2] DayOfWk.41597, DayNum.41598
  LegPaymentStreamPricingDateGrp?: ILegPaymentStreamPricingDateGrp[]// [3] Dt.41594, Typ.41595
  LegPaymentStreamFormula?: ILegPaymentStreamFormula// [4] Ccy.42482, CcyDtrmnMeth.42483, RefAmt.42484
  LegDividendConditions?: ILegDividendConditions// [5] RnvstmntInd.42337, EntlmntEvnt.42338 .. AllDividendInd.42356
  LegReturnRateGrp?: ILegReturnRateGrp[]// [6] PxSeq.42535, CommBasis.42536 .. FnlPxFallbck.42559
}
