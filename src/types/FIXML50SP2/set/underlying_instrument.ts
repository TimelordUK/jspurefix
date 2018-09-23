import { IUndSecAltIDGrp } from './und_sec_alt_id_grp'
import { IUnderlyingSecurityXML } from './underlying_security_xml'
import { IUnderlyingStipulations } from './underlying_stipulations'
import { IUndlyInstrumentParties } from './undly_instrument_parties'
import { IUnderlyingEvntGrp } from './underlying_evnt_grp'
import { IUnderlyingSecondaryAssetGrp } from './underlying_secondary_asset_grp'
import { IUnderlyingAssetAttributeGrp } from './underlying_asset_attribute_grp'
import { IUnderlyingComplexEvents } from './underlying_complex_events'
import { IUnderlyingDateAdjustment } from './underlying_date_adjustment'
import { IUnderlyingPricingDateTime } from './underlying_pricing_date_time'
import { IUnderlyingMarketDisruption } from './underlying_market_disruption'
import { IUnderlyingOptionExercise } from './underlying_option_exercise'
import { IUnderlyingStreamGrp } from './underlying_stream_grp'
import { IUnderlyingProvisionGrp } from './underlying_provision_grp'
import { IUnderlyingAdditionalTermGrp } from './underlying_additional_term_grp'
import { IUnderlyingProtectionTermGrp } from './underlying_protection_term_grp'
import { IUnderlyingCashSettlTermGrp } from './underlying_cash_settl_term_grp'
import { IUnderlyingPhysicalSettlTermGrp } from './underlying_physical_settl_term_grp'
import { IUnderlyingRateSpreadSchedule } from './underlying_rate_spread_schedule'
import { IUnderlyingDividendPayout } from './underlying_dividend_payout'
import { IUnderlyingExtraordinaryEventGrp } from './underlying_extraordinary_event_grp'

export interface IUnderlyingInstrument {
  RelatedSymbol?: string// 1649
  InstrumentScopeSymbolSfx?: string// 1537
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  InstrumentScopeProduct?: number// 1543
  InstrumentScopeCFICode?: string// 1546
  RelatedSecurityType?: string// 1652
  PaymentSubType?: number// 40993
  RelatedMaturityMonthYear?: string// 1653
  LegMaturityDate?: Date// 611
  InstrumentScopeMaturityTime?: string// 1550
  LegContractPriceRefMonth?: string// 2168
  LegCouponPaymentDate?: Date// 248
  LegRestructuringType?: string// 2149
  UnderlyingAdditionalTermBondSeniority?: string// 42027
  UnderlyingProtectionTermNotional?: number// 42069
  UnderlyingNotionalCurrency?: string// 2615
  UnderlyingStreamNotionalDeterminationMethod?: string// 43085
  UnderlyingStreamNotionalAdjustments?: number// 43086
  UnderlyingStreamNotionalXIDRef?: string// 42018
  LegNotionalPercentageOutstanding?: number// 2151
  LegOriginalNotionalPercentageOutstanding?: number// 2152
  LegAttachmentPoint?: number// 2153
  LegDetachmentPoint?: number// 2154
  LegIssueDate?: Date// 249
  LegRepoCollateralSecurityType?: string// 250
  LegRepurchaseTerm?: number// 251
  LegRepurchaseRate?: number// 252
  LegFactor?: string// 253
  LegCreditRating?: string// 257
  DerivativeInstrRegistry?: string// 1257
  UnderlyingStreamCommoditySettlCountry?: string// 42003
  LegStateOrProvinceOfIssue?: string// 597
  DerivativeLocaleOfIssue?: string// 1260
  LegRedemptionDate?: Date// 254
  UnderlyingDividendPeriodStrikePrice?: number// 42867
  DerivativeStrikeCurrency?: string// 1262
  LegOptAttribute?: string// 613
  RiskInstrumentMultiplier?: string// 1558
  DerivativeContractMultiplierUnit?: number// 1438
  UnderlyingTradingUnitPeriodMultiplier?: number// 2363
  DerivativeFlowScheduleType?: number// 1442
  UnderlyingStreamCommodityUnitOfMeasure?: string// 41971
  UnderlyingUnitOfMeasureQty?: number// 1423
  AllocCommissionUnitOfMeasureCurrency?: string// 2659
  UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure?: string// 42011
  UnderlyingPriceUnitOfMeasureQty?: number// 1425
  DerivativePriceUnitOfMeasureCurrency?: string// 1723
  LegEventTimeUnit?: string// 2063
  UnderlyingProvisionOptionExerciseStyle?: number// 42159
  DerivativePriceQuoteCurrency?: string// 1576
  UnderlyingAdditionalTermBondCouponRate?: number// 42029
  UnderlyingStreamCommodityExchange?: string// 41973
  UnderlyingAdditionalTermBondIssuer?: string// 42017
  EncodedUnderlyingIssuerLen?: string// 362
  EncodedUnderlyingIssuer?: Buffer// 363
  PaymentDesc?: string// 43087
  EncodedUnderlyingSecurityDescLen?: string// 364
  EncodedUnderlyingSecurityDesc?: Buffer// 365
  LegCPProgram?: number// 2207
  LegCPRegType?: string// 2208
  UnderlyingAllocationPercent?: number// 972
  UnderlyingReturnRatePriceCurrency?: string// 43067
  RelatedTradeQuantity?: number// 1860
  InstrumentScopeSettlType?: string// 1557
  UnderlyingCashAmount?: number// 973
  UnderlyingCashType?: string// 974
  UnderlyingReturnRatePrice?: number// 43066
  UnderlyingDirtyPrice?: number// 882
  UnderlyingEndPrice?: number// 883
  UnderlyingStartValue?: number// 884
  UnderlyingCurrentValue?: number// 885
  UnderlyingEndValue?: number// 886
  UnderlyingAdjustedQuantity?: number// 1044
  UnderlyingFXRate?: string// 1045
  UnderlyingFXRateCalc?: string// 1046
  UnderlyingCapValue?: number// 1038
  UnderlyingSettlMethod?: string// 1039
  InstrumentScopePutOrCall?: number// 1553
  DerivativeInTheMoneyCondition?: number// 2684
  DerivativeContraryInstructionEligibilityIndicator?: string// 2688
  UnderlyingConstituentWeight?: string// 1988
  UnderlyingAdditionalTermBondCouponType?: number// 42028
  UnderlyingTotalIssuedAmount?: number// 1990
  UnderlyingAdditionalTermBondCouponFrequencyPeriod?: number// 42033
  UnderlyingAdditionalTermBondCouponFrequencyUnit?: string// 42034
  LegCouponDayCount?: number// 2165
  UnderlyingObligationID?: string// 1994
  UnderlyingObligationIDSource?: string// 1995
  UnderlyingEquityID?: string// 1996
  UnderlyingEquityIDSource?: string// 1997
  UnderlyingFutureID?: string// 2620
  UnderlyingFutureIDSource?: string// 2621
  LegLienSeniority?: number// 2169
  LegLoanFacility?: number// 2170
  LegReferenceEntityType?: number// 2171
  LegIndexSeries?: number// 2172
  LegIndexAnnexVersion?: number// 2173
  LegIndexAnnexDate?: Date// 2174
  LegIndexAnnexSource?: string// 2175
  UnderlyingSettlRateIndex?: string// 2284
  UnderlyingSettlRateIndexLocation?: string// 2285
  UnderlyingOptionExpirationDesc?: string// 2286
  EncodedUnderlyingOptionExpirationDescLen?: string// 2287
  EncodedUnderlyingOptionExpirationDesc?: Buffer// 2288
  UnderlyingProductComplex?: string// 2007
  UnderlyingSecurityGroup?: string// 2008
  LegSettleOnOpenFlag?: string// 2146
  LegInstrmtAssignmentMethod?: string// 2147
  LegSecurityStatus?: string// 2148
  LegObligationType?: string// 2155
  UnderlyingAssetGroup?: number// 2491
  LegAssetClass?: number// 2067
  LegAssetSubClass?: number// 2068
  LegAssetType?: string// 2069
  LegSwapClass?: string// 2070
  UnderlyingSwapSubClass?: string// 2289
  LegNthToDefault?: number// 2157
  LegMthToDefault?: number// 2158
  LegSettledEntityMatrixSource?: string// 2159
  LegSettledEntityMatrixPublicationDate?: Date// 2160
  LegStrikeMultiplier?: string// 2181
  LegStrikeValue?: string// 2182
  UnderlyingStrikeUnitOfMeasure?: string// 2290
  UnderlyingStrikeIndexCurvePoint?: string// 2622
  UnderlyingStrikeIndex?: string// 2291
  UnderlyingStrikeIndexQuote?: number// 2623
  UnderlyingStrikeIndexSpread?: string// 2292
  LegStrikePriceDeterminationMethod?: number// 2186
  LegStrikePriceBoundaryMethod?: number// 2187
  LegStrikePriceBoundaryPrecision?: number// 2188
  LegMinPriceIncrement?: string// 2190
  LegMinPriceIncrementAmount?: number// 2191
  LegOptPayoutType?: number// 2193
  LegComplexOptPayoutAmount?: number// 2223
  LegPriceQuoteMethod?: string// 2195
  UnderlyingCashSettlValuationMethod?: number// 42058
  UnderlyingValuationSource?: string// 2293
  UnderlyingValuationReferenceModel?: string// 2294
  LegListMethod?: number// 2199
  LegCapPrice?: number// 2200
  LegFloorPrice?: number// 2201
  LegFlexibleIndicator?: string// 2202
  LegFlexProductEligibilityIndicator?: string// 2203
  LegPositionLimit?: number// 2205
  LegNTPositionLimit?: number// 2206
  UnderlyingPool?: string// 2039
  UnderlyingContractSettlMonth?: string// 2040
  UnderlyingDatedDate?: Date// 2041
  UnderlyingInterestAccrualDate?: Date// 2042
  LegShortSaleRestriction?: number// 2209
  UnderlyingRefTickTableID?: number// 2044
  UnderlyingProtectionTermXIDRef?: string// 41314
  UnderlyingSettlTermXIDRef?: string// 41315
  UnderlyingStrategyType?: string// 2295
  UnderlyingCommonPricingIndicator?: string// 2296
  UnderlyingSettlDisruptionProvision?: number// 2297
  UnderlyingInstrumentRoundingDirection?: string// 2298
  UnderlyingInstrumentRoundingPrecision?: number// 2299
  UnderlyingExtraordinaryEventAdjustmentMethod?: number// 2624
  UnderlyingExchangeLookAlike?: string// 2625
  UnderlyingAverageVolumeLimitationPercentage?: number// 2626
  UnderlyingAverageVolumeLimitationPeriodDays?: number// 2627
  UnderlyingDepositoryReceiptIndicator?: string// 2628
  UnderlyingMarketDisruptionFallbackOpenUnits?: number// 41875
  UnderlyingBasketDivisor?: string// 2630
  UnderlyingDividendPeriodXID?: string// 42881
  UndSecAltIDGrp?: IUndSecAltIDGrp[]
  UnderlyingSecurityXML?: IUnderlyingSecurityXML
  UnderlyingStipulations?: IUnderlyingStipulations[]
  UndlyInstrumentParties?: IUndlyInstrumentParties[]
  UnderlyingEvntGrp?: IUnderlyingEvntGrp[]
  UnderlyingSecondaryAssetGrp?: IUnderlyingSecondaryAssetGrp[]
  UnderlyingAssetAttributeGrp?: IUnderlyingAssetAttributeGrp[]
  UnderlyingComplexEvents?: IUnderlyingComplexEvents[]
  UnderlyingDateAdjustment?: IUnderlyingDateAdjustment
  UnderlyingPricingDateTime?: IUnderlyingPricingDateTime
  UnderlyingMarketDisruption?: IUnderlyingMarketDisruption
  UnderlyingOptionExercise?: IUnderlyingOptionExercise
  UnderlyingStreamGrp?: IUnderlyingStreamGrp[]
  UnderlyingProvisionGrp?: IUnderlyingProvisionGrp[]
  UnderlyingAdditionalTermGrp?: IUnderlyingAdditionalTermGrp[]
  UnderlyingProtectionTermGrp?: IUnderlyingProtectionTermGrp[]
  UnderlyingCashSettlTermGrp?: IUnderlyingCashSettlTermGrp[]
  UnderlyingPhysicalSettlTermGrp?: IUnderlyingPhysicalSettlTermGrp[]
  UnderlyingRateSpreadSchedule?: IUnderlyingRateSpreadSchedule
  UnderlyingDividendPayout?: IUnderlyingDividendPayout
  UnderlyingExtraordinaryEventGrp?: IUnderlyingExtraordinaryEventGrp[]
}
