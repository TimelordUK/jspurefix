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

export interface IInstrmtLegGrp {
  LegSymbol?: string// 600
  LegSymbolSfx?: string// 601
  LegSecurityID?: string// 602
  LegSecurityIDSource?: string// 603
  LegID?: string// 1788
  LegProduct?: number// 607
  LegSecurityGroup?: string// 1594
  LegCFICode?: string// 608
  LegSecurityType?: string// 609
  LegSecuritySubType?: string// 764
  LegMaturityMonthYear?: string// 610
  LegMaturityDate?: Date// 611
  LegMaturityTime?: string// 1212
  LegSettleOnOpenFlag?: string// 2146
  LegInstrmtAssignmentMethod?: string// 2147
  LegSecurityStatus?: string// 2148
  LegCouponPaymentDate?: Date// 248
  LegRestructuringType?: string// 2149
  LegSeniority?: string// 2150
  LegNotionalPercentageOutstanding?: number// 2151
  LegOriginalNotionalPercentageOutstanding?: number// 2152
  LegAttachmentPoint?: number// 2153
  LegDetachmentPoint?: number// 2154
  LegObligationType?: string// 2155
  LegAssetGroup?: number// 2348
  LegAssetClass?: number// 2067
  LegAssetSubClass?: number// 2068
  LegAssetType?: string// 2069
  LegSwapClass?: string// 2070
  LegSwapSubClass?: string// 2156
  LegNthToDefault?: number// 2157
  LegMthToDefault?: number// 2158
  LegSettledEntityMatrixSource?: string// 2159
  LegSettledEntityMatrixPublicationDate?: Date// 2160
  LegCouponType?: number// 2161
  LegTotalIssuedAmount?: number// 2162
  LegCouponFrequencyPeriod?: number// 2163
  LegCouponFrequencyUnit?: string// 2164
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
  LegSettlRateIndex?: string// 2176
  LegSettlRateIndexLocation?: string// 2177
  LegOptionExpirationDesc?: string// 2178
  EncodedLegOptionExpirationDescLen?: number// 2179
  EncodedLegOptionExpirationDesc?: Buffer// 2180
  LegIssueDate?: Date// 249
  LegRepoCollateralSecurityType?: string// 250
  LegRepurchaseTerm?: number// 251
  LegRepurchaseRate?: number// 252
  LegFactor?: number// 253
  LegCreditRating?: string// 257
  LegInstrRegistry?: string// 599
  LegCountryOfIssue?: string// 596
  LegStateOrProvinceOfIssue?: string// 597
  LegLocaleOfIssue?: string// 598
  LegRedemptionDate?: Date// 254
  LegStrikePrice?: number// 612
  LegStrikeCurrency?: string// 942
  LegStrikeMultiplier?: number// 2181
  LegStrikeValue?: number// 2182
  LegStrikeUnitOfMeasure?: string// 2183
  LegStrikeIndex?: string// 2184
  LegStrikeIndexCurvePoint?: string// 2604
  LegStrikeIndexSpread?: number// 2185
  LegStrikeIndexQuote?: number// 2605
  LegStrikePriceDeterminationMethod?: number// 2186
  LegStrikePriceBoundaryMethod?: number// 2187
  LegStrikePriceBoundaryPrecision?: number// 2188
  LegUnderlyingPriceDeterminationMethod?: number// 2189
  LegOptAttribute?: string// 613
  LegContractMultiplier?: number// 614
  LegContractMultiplierUnit?: number// 1436
  LegTradingUnitPeriodMultiplier?: number// 2354
  DerivativeFlowScheduleType?: number// 1442
  LegMinPriceIncrement?: number// 2190
  LegMinPriceIncrementAmount?: number// 2191
  LegUnitOfMeasure?: string// 999
  LegUnitOfMeasureQty?: number// 1224
  LegUnitOfMeasureCurrency?: string// 1720
  LegPriceUnitOfMeasure?: string// 1421
  LegPriceUnitOfMeasureQty?: number// 1422
  LegPriceUnitOfMeasureCurrency?: string// 1721
  LegSettlMethod?: string// 2192
  LegTimeUnit?: string// 1001
  LegExerciseStyle?: number// 1420
  LegOptPayoutType?: number// 2193
  LegOptPayoutAmount?: number// 2194
  LegPriceQuoteMethod?: string// 2195
  LegValuationMethod?: string// 2196
  LegValuationSource?: string// 2197
  LegValuationReferenceModel?: string// 2198
  LegPriceQuoteCurrency?: string// 1528
  LegListMethod?: number// 2199
  LegCapPrice?: number// 2200
  LegFloorPrice?: number// 2201
  LegFlexibleIndicator?: boolean// 2202
  LegFlexProductEligibilityIndicator?: boolean// 2203
  LegCouponRate?: number// 615
  LegSecurityExchange?: string// 616
  LegPositionLimit?: number// 2205
  LegNTPositionLimit?: number// 2206
  LegIssuer?: string// 617
  EncodedLegIssuerLen?: number// 618
  EncodedLegIssuer?: Buffer// 619
  LegSecurityDesc?: string// 620
  EncodedLegSecurityDescLen?: number// 621
  EncodedLegSecurityDesc?: Buffer// 622
  LegCPProgram?: number// 2207
  LegCPRegType?: string// 2208
  LegRatioQty?: number// 623
  LegSide?: string// 624
  LegCurrency?: string// 556
  LegPool?: string// 740
  LegDatedDate?: Date// 739
  LegContractSettlMonth?: string// 955
  LegInterestAccrualDate?: Date// 956
  LegPutOrCall?: number// 1358
  LegInTheMoneyCondition?: number// 2682
  LegContraryInstructionEligibilityIndicator?: boolean// 2686
  LegOptionRatio?: number// 1017
  LegPrice?: number// 566
  LegShortSaleRestriction?: number// 2209
  LegStrategyType?: string// 2211
  LegCommonPricingIndicator?: boolean// 2212
  LegSettlDisruptionProvision?: number// 2213
  LegInstrumentRoundingDirection?: string// 2214
  LegInstrumentRoundingPrecision?: number// 2215
  LegExtraordinaryEventAdjustmentMethod?: number// 2606
  LegExchangeLookAlike?: boolean// 2607
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
