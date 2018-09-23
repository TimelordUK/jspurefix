import { ILegSecAltIDGrp } from './leg_sec_alt_id_grp'
import { ILegSecondaryAssetGrp } from './leg_secondary_asset_grp'
import { ILegAssetAttributeGrp } from './leg_asset_attribute_grp'
import { ILegSecurityXML } from './leg_security_xml'
import { ILegEvntGrp } from './leg_evnt_grp'
import { ILegInstrumentParties } from './leg_instrument_parties'
import { ILegComplexEvents } from './leg_complex_events'
import { ILegDateAdjustment } from './leg_date_adjustment'
import { ILegPricingDateTime } from './leg_pricing_date_time'
import { ILegMarketDisruption } from './leg_market_disruption'
import { ILegOptionExercise } from './leg_option_exercise'
import { ILegStreamGrp } from './leg_stream_grp'
import { ILegProvisionGrp } from './leg_provision_grp'
import { ILegAdditionalTermGrp } from './leg_additional_term_grp'
import { ILegProtectionTermGrp } from './leg_protection_term_grp'
import { ILegCashSettlTermGrp } from './leg_cash_settl_term_grp'
import { ILegPhysicalSettlTermGrp } from './leg_physical_settl_term_grp'
import { ILegExtraordinaryEventGrp } from './leg_extraordinary_event_grp'

export interface IInstrumentLeg {
  RelatedSymbol?: string// 1649
  InstrumentScopeSymbolSfx?: string// 1537
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  LegID?: string// 1788
  InstrumentScopeProduct?: number// 1543
  UnderlyingSecurityGroup?: string// 2008
  InstrumentScopeCFICode?: string// 1546
  RelatedSecurityType?: string// 1652
  InstrumentScopeSecuritySubType?: string// 1548
  RelatedMaturityMonthYear?: string// 1653
  LegMaturityDate?: Date// 611
  InstrumentScopeMaturityTime?: string// 1550
  LegSettleOnOpenFlag?: string// 2146
  LegInstrmtAssignmentMethod?: string// 2147
  LegSecurityStatus?: string// 2148
  LegCouponPaymentDate?: Date// 248
  LegRestructuringType?: string// 2149
  UnderlyingAdditionalTermBondSeniority?: string// 42027
  LegNotionalPercentageOutstanding?: number// 2151
  LegOriginalNotionalPercentageOutstanding?: number// 2152
  LegAttachmentPoint?: number// 2153
  LegDetachmentPoint?: number// 2154
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
  UnderlyingAdditionalTermBondCouponType?: number// 42028
  LegTotalIssuedAmount?: number// 2162
  UnderlyingAdditionalTermBondCouponFrequencyPeriod?: number// 42033
  UnderlyingAdditionalTermBondCouponFrequencyUnit?: string// 42034
  LegCouponDayCount?: number// 2165
  LegConvertibleBondEquityID?: string// 2166
  LegConvertibleBondEquityIDSource?: string// 2167
  LegContractPriceRefMonth?: string// 2168
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
  LegStrikePrice?: number// 612
  DerivativeStrikeCurrency?: string// 1262
  LegStrikeMultiplier?: string// 2181
  LegStrikeValue?: string// 2182
  UnderlyingStrikeUnitOfMeasure?: string// 2290
  UnderlyingStrikeIndex?: string// 2291
  UnderlyingStrikeIndexCurvePoint?: string// 2622
  UnderlyingStrikeIndexSpread?: string// 2292
  UnderlyingStrikeIndexQuote?: number// 2623
  LegStrikePriceDeterminationMethod?: number// 2186
  LegStrikePriceBoundaryMethod?: number// 2187
  LegStrikePriceBoundaryPrecision?: number// 2188
  LegUnderlyingPriceDeterminationMethod?: number// 2189
  LegOptAttribute?: string// 613
  LegContractMultiplier?: string// 614
  DerivativeContractMultiplierUnit?: number// 1438
  UnderlyingTradingUnitPeriodMultiplier?: number// 2363
  DerivativeFlowScheduleType?: number// 1442
  LegMinPriceIncrement?: string// 2190
  LegMinPriceIncrementAmount?: number// 2191
  UnderlyingStreamCommodityUnitOfMeasure?: string// 41971
  UnderlyingUnitOfMeasureQty?: number// 1423
  AllocCommissionUnitOfMeasureCurrency?: string// 2659
  UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure?: string// 42011
  UnderlyingPriceUnitOfMeasureQty?: number// 1425
  DerivativePriceUnitOfMeasureCurrency?: string// 1723
  UnderlyingProvisionCashSettlMethod?: number// 42166
  LegEventTimeUnit?: string// 2063
  UnderlyingProvisionOptionExerciseStyle?: number// 42159
  LegOptPayoutType?: number// 2193
  LegComplexOptPayoutAmount?: number// 2223
  LegPriceQuoteMethod?: string// 2195
  UnderlyingCashSettlValuationMethod?: number// 42058
  UnderlyingValuationSource?: string// 2293
  UnderlyingValuationReferenceModel?: string// 2294
  DerivativePriceQuoteCurrency?: string// 1576
  LegListMethod?: number// 2199
  LegCapPrice?: number// 2200
  LegFloorPrice?: number// 2201
  LegFlexibleIndicator?: string// 2202
  LegFlexProductEligibilityIndicator?: string// 2203
  UnderlyingAdditionalTermBondCouponRate?: number// 42029
  UnderlyingStreamCommodityExchange?: string// 41973
  LegPositionLimit?: number// 2205
  LegNTPositionLimit?: number// 2206
  UnderlyingAdditionalTermBondIssuer?: string// 42017
  EncodedLegIssuerLen?: string// 618
  EncodedLegIssuer?: Buffer// 619
  PaymentDesc?: string// 43087
  EncodedLegSecurityDescLen?: string// 621
  EncodedLegSecurityDesc?: Buffer// 622
  LegCPProgram?: number// 2207
  LegCPRegType?: string// 2208
  LegRatioQty?: string// 623
  RelativeValueSide?: number// 2532
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingPool?: string// 2039
  UnderlyingDatedDate?: Date// 2041
  UnderlyingContractSettlMonth?: string// 2040
  UnderlyingInterestAccrualDate?: Date// 2042
  InstrumentScopePutOrCall?: number// 1553
  DerivativeInTheMoneyCondition?: number// 2684
  DerivativeContraryInstructionEligibilityIndicator?: string// 2688
  LegOptionRatio?: string// 1017
  UnderlyingReturnRatePrice?: number// 43066
  LegShortSaleRestriction?: number// 2209
  UnderlyingStrategyType?: string// 2295
  UnderlyingCommonPricingIndicator?: string// 2296
  UnderlyingSettlDisruptionProvision?: number// 2297
  UnderlyingInstrumentRoundingDirection?: string// 2298
  UnderlyingInstrumentRoundingPrecision?: number// 2299
  UnderlyingExtraordinaryEventAdjustmentMethod?: number// 2624
  UnderlyingExchangeLookAlike?: string// 2625
  LegSecAltIDGrp?: ILegSecAltIDGrp[]
  LegSecondaryAssetGrp?: ILegSecondaryAssetGrp[]
  LegAssetAttributeGrp?: ILegAssetAttributeGrp[]
  LegSecurityXML?: ILegSecurityXML
  LegEvntGrp?: ILegEvntGrp[]
  LegInstrumentParties?: ILegInstrumentParties[]
  LegComplexEvents?: ILegComplexEvents[]
  LegDateAdjustment?: ILegDateAdjustment
  LegPricingDateTime?: ILegPricingDateTime
  LegMarketDisruption?: ILegMarketDisruption
  LegOptionExercise?: ILegOptionExercise
  LegStreamGrp?: ILegStreamGrp[]
  LegProvisionGrp?: ILegProvisionGrp[]
  LegAdditionalTermGrp?: ILegAdditionalTermGrp[]
  LegProtectionTermGrp?: ILegProtectionTermGrp[]
  LegCashSettlTermGrp?: ILegCashSettlTermGrp[]
  LegPhysicalSettlTermGrp?: ILegPhysicalSettlTermGrp[]
  LegExtraordinaryEventGrp?: ILegExtraordinaryEventGrp[]
}
