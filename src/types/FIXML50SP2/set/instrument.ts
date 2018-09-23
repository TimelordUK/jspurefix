import { ISecAltIDGrp } from './sec_alt_id_grp'
import { ISecondaryAssetGrp } from './secondary_asset_grp'
import { IAssetAttributeGrp } from './asset_attribute_grp'
import { ISecurityXML } from './security_xml'
import { IEvntGrp } from './evnt_grp'
import { IInstrumentParties } from './instrument_parties'
import { IComplexEvents } from './complex_events'
import { IDateAdjustment } from './date_adjustment'
import { IPricingDateTime } from './pricing_date_time'
import { IMarketDisruption } from './market_disruption'
import { IOptionExercise } from './option_exercise'
import { IStreamGrp } from './stream_grp'
import { IProvisionGrp } from './provision_grp'
import { IAdditionalTermGrp } from './additional_term_grp'
import { IProtectionTermGrp } from './protection_term_grp'
import { ICashSettlTermGrp } from './cash_settl_term_grp'
import { IPhysicalSettlTermGrp } from './physical_settl_term_grp'
import { IExtraordinaryEventGrp } from './extraordinary_event_grp'

export interface IInstrument {
  RelatedSymbol?: string// 1649
  InstrumentScopeSymbolSfx?: string// 1537
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  InstrumentScopeProduct?: number// 1543
  UnderlyingProductComplex?: string// 2007
  UnderlyingSecurityGroup?: string// 2008
  InstrumentScopeCFICode?: string// 1546
  RelatedSecurityType?: string// 1652
  PaymentSubType?: number// 40993
  RelatedMaturityMonthYear?: string// 1653
  UnderlyingAdditionalTermBondMaturityDate?: Date// 42030
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
  UnderlyingTotalIssuedAmount?: number// 1990
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
  CountryOfIssue?: string// 470
  DerivativeStateOrProvinceOfIssue?: string// 1259
  DerivativeLocaleOfIssue?: string// 1260
  LegRedemptionDate?: Date// 254
  UnderlyingDividendPeriodStrikePrice?: number// 42867
  OrigStrikePrice?: number// 2578
  StrikePricePrecision?: number// 2577
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
  UnderlyingLegOptAttribute?: string// 1391
  RiskInstrumentMultiplier?: string// 1558
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
  SettlSubMethod?: number// 2579
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
  InstrumentScopePutOrCall?: number// 1553
  DerivativeInTheMoneyCondition?: number// 2684
  DerivativeContraryInstructionEligibilityIndicator?: string// 2688
  LegFlexibleIndicator?: string// 2202
  LegFlexProductEligibilityIndicator?: string// 2203
  BlockTradeEligibilityIndicator?: string// 2575
  LowExercisePriceOptionIndicator?: string// 2574
  LegEventTimeUnit?: string// 2063
  UnderlyingAdditionalTermBondCouponRate?: number// 42029
  UnderlyingStreamCommodityExchange?: string// 41973
  LegPositionLimit?: number// 2205
  LegNTPositionLimit?: number// 2206
  UnderlyingAdditionalTermBondIssuer?: string// 42017
  EncodedUnderlyingAdditionalTermBondIssuerLen?: string// 42025
  EncodedUnderlyingAdditionalTermBondIssuer?: Buffer// 42026
  PaymentDesc?: string// 43087
  DerivativeEncodedSecurityDescLen?: string// 1280
  DerivativeEncodedSecurityDesc?: Buffer// 1281
  UnderlyingPool?: string// 2039
  UnderlyingContractSettlMonth?: string// 2040
  LegCPProgram?: number// 2207
  CPRegType?: string// 876
  UnderlyingDatedDate?: Date// 2041
  UnderlyingInterestAccrualDate?: Date// 2042
  LegShortSaleRestriction?: number// 2209
  UnderlyingRefTickTableID?: number// 2044
  UnderlyingStrategyType?: string// 2295
  UnderlyingCommonPricingIndicator?: string// 2296
  UnderlyingSettlDisruptionProvision?: number// 2297
  UnderlyingInstrumentRoundingDirection?: string// 2298
  UnderlyingInstrumentRoundingPrecision?: number// 2299
  InstrumentPricePrecision?: number// 2576
  UnderlyingExtraordinaryEventAdjustmentMethod?: number// 2624
  UnderlyingExchangeLookAlike?: string// 2625
  SecAltIDGrp?: ISecAltIDGrp[]
  SecondaryAssetGrp?: ISecondaryAssetGrp[]
  AssetAttributeGrp?: IAssetAttributeGrp[]
  SecurityXML?: ISecurityXML
  EvntGrp?: IEvntGrp[]
  InstrumentParties?: IInstrumentParties[]
  ComplexEvents?: IComplexEvents[]
  DateAdjustment?: IDateAdjustment
  PricingDateTime?: IPricingDateTime
  MarketDisruption?: IMarketDisruption
  OptionExercise?: IOptionExercise
  StreamGrp?: IStreamGrp[]
  ProvisionGrp?: IProvisionGrp[]
  AdditionalTermGrp?: IAdditionalTermGrp[]
  ProtectionTermGrp?: IProtectionTermGrp[]
  CashSettlTermGrp?: ICashSettlTermGrp[]
  PhysicalSettlTermGrp?: IPhysicalSettlTermGrp[]
  ExtraordinaryEventGrp?: IExtraordinaryEventGrp[]
}
