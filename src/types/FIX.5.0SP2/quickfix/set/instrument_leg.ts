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
  LegSymbol?: string// [1] 600 (String)
  LegSymbolSfx?: string// [2] 601 (String)
  LegSecurityID?: string// [3] 602 (String)
  LegSecurityIDSource?: string// [4] 603 (String)
  LegSecAltIDGrp?: ILegSecAltIDGrp// [5] NoLegSecurityAltID.604, LegSecurityAltID.605 .. LegSymbolPositionNumber.2958
  LegID?: string// [6] 1788 (String)
  LegProduct?: number// [7] 607 (Int)
  LegSecurityGroup?: string// [8] 1594 (String)
  LegCFICode?: string// [9] 608 (String)
  LegUPICode?: string// [10] 2893 (String)
  LegSecurityType?: string// [11] 609 (String)
  LegSecuritySubType?: string// [12] 764 (String)
  LegMaturityMonthYear?: string// [13] 610 (String)
  LegMaturityDate?: Date// [14] 611 (LocalDate)
  LegMaturityTime?: string// [15] 1212 (String)
  LegSettleOnOpenFlag?: string// [16] 2146 (String)
  LegInstrmtAssignmentMethod?: string// [17] 2147 (String)
  LegSecurityStatus?: string// [18] 2148 (String)
  LegCouponPaymentDate?: Date// [19] 248 (LocalDate)
  LegRestructuringType?: string// [20] 2149 (String)
  LegSeniority?: string// [21] 2150 (String)
  LegNotionalPercentageOutstanding?: number// [22] 2151 (Float)
  LegOriginalNotionalPercentageOutstanding?: number// [23] 2152 (Float)
  LegAttachmentPoint?: number// [24] 2153 (Float)
  LegDetachmentPoint?: number// [25] 2154 (Float)
  LegObligationType?: string// [26] 2155 (String)
  LegAssetGroup?: number// [27] 2348 (Int)
  LegAssetClass?: number// [28] 2067 (Int)
  LegAssetSubClass?: number// [29] 2068 (Int)
  LegAssetType?: string// [30] 2069 (String)
  LegAssetSubType?: string// [31] 2739 (String)
  LegSecondaryAssetGrp?: ILegSecondaryAssetGrp// [32] NoLegSecondaryAssetClasses.2076, LegSecondaryAssetClass.2077 .. LegSecondaryAssetSubType.2743
  LegAssetAttributeGrp?: ILegAssetAttributeGrp// [33] NoLegAssetAttributes.2308, LegAssetAttributeType.2309 .. LegAssetAttributeLimit.2311
  LegSwapClass?: string// [34] 2070 (String)
  LegSwapSubClass?: string// [35] 2156 (String)
  LegNthToDefault?: number// [36] 2157 (Int)
  LegMthToDefault?: number// [37] 2158 (Int)
  LegSettledEntityMatrixSource?: string// [38] 2159 (String)
  LegSettledEntityMatrixPublicationDate?: Date// [39] 2160 (LocalDate)
  LegCouponType?: number// [40] 2161 (Int)
  LegTotalIssuedAmount?: number// [41] 2162 (Float)
  LegCouponFrequencyPeriod?: number// [42] 2163 (Int)
  LegCouponFrequencyUnit?: string// [43] 2164 (String)
  LegCouponDayCount?: number// [44] 2165 (Int)
  LegCouponOtherDayCount?: string// [45] 2880 (String)
  LegConvertibleBondEquityID?: string// [46] 2166 (String)
  LegConvertibleBondEquityIDSource?: string// [47] 2167 (String)
  LegContractPriceRefMonth?: string// [48] 2168 (String)
  LegLienSeniority?: number// [49] 2169 (Int)
  LegLoanFacility?: number// [50] 2170 (Int)
  LegReferenceEntityType?: number// [51] 2171 (Int)
  LegIndexSeries?: number// [52] 2172 (Int)
  LegIndexAnnexVersion?: number// [53] 2173 (Int)
  LegIndexAnnexDate?: Date// [54] 2174 (LocalDate)
  LegIndexAnnexSource?: string// [55] 2175 (String)
  LegSettlRateIndex?: string// [56] 2176 (String)
  LegSettlRateIndexLocation?: string// [57] 2177 (String)
  LegOptionExpirationDesc?: string// [58] 2178 (String)
  EncodedLegOptionExpirationDescLen?: number// [59] 2179 (Length)
  EncodedLegOptionExpirationDesc?: Buffer// [60] 2180 (RawData)
  LegIssueDate?: Date// [61] 249 (LocalDate)
  LegRepoCollateralSecurityType?: string// [62] 250 (String)
  LegRepurchaseTerm?: number// [63] 251 (Int)
  LegRepurchaseRate?: number// [64] 252 (Float)
  LegFactor?: number// [65] 253 (Float)
  LegCreditRating?: string// [66] 257 (String)
  LegInstrRegistry?: string// [67] 599 (String)
  LegCountryOfIssue?: string// [68] 596 (String)
  LegStateOrProvinceOfIssue?: string// [69] 597 (String)
  LegLocaleOfIssue?: string// [70] 598 (String)
  LegRedemptionDate?: Date// [71] 254 (LocalDate)
  LegStrikePrice?: number// [72] 612 (Float)
  LegStrikeCurrency?: string// [73] 942 (String)
  LegStrikeCurrencyCodeSource?: string// [74] 2908 (String)
  LegStrikeMultiplier?: number// [75] 2181 (Float)
  LegStrikeValue?: number// [76] 2182 (Float)
  LegStrikeUnitOfMeasure?: string// [77] 2183 (String)
  LegStrikeIndex?: string// [78] 2184 (String)
  LegStrikeIndexCurvePoint?: string// [79] 2604 (String)
  LegStrikeIndexSpread?: number// [80] 2185 (Float)
  LegStrikeIndexQuote?: number// [81] 2605 (Int)
  LegStrikePriceDeterminationMethod?: number// [82] 2186 (Int)
  LegStrikePriceBoundaryMethod?: number// [83] 2187 (Int)
  LegStrikePriceBoundaryPrecision?: number// [84] 2188 (Float)
  LegUnderlyingPriceDeterminationMethod?: number// [85] 2189 (Int)
  LegOptAttribute?: string// [86] 613 (String)
  LegContractMultiplier?: number// [87] 614 (Float)
  LegContractMultiplierUnit?: number// [88] 1436 (Int)
  LegTradingUnitPeriodMultiplier?: number// [89] 2354 (Int)
  LegFlowScheduleType?: number// [90] 1440 (Int)
  LegMinPriceIncrement?: number// [91] 2190 (Float)
  LegMinPriceIncrementAmount?: number// [92] 2191 (Float)
  LegUnitOfMeasure?: string// [93] 999 (String)
  LegUnitOfMeasureQty?: number// [94] 1224 (Float)
  LegUnitOfMeasureCurrency?: string// [95] 1720 (String)
  LegUnitOfMeasureCurrencyCodeSource?: string// [96] 2909 (String)
  LegPriceUnitOfMeasure?: string// [97] 1421 (String)
  LegPriceUnitOfMeasureQty?: number// [98] 1422 (Float)
  LegPriceUnitOfMeasureCurrency?: string// [99] 1721 (String)
  LegPriceUnitOfMeasureCurrencyCodeSource?: string// [100] 2910 (String)
  LegSettlMethod?: string// [101] 2192 (String)
  LegTimeUnit?: string// [102] 1001 (String)
  LegExerciseStyle?: number// [103] 1420 (Int)
  LegOptPayoutType?: number// [104] 2193 (Int)
  LegOptPayoutAmount?: number// [105] 2194 (Float)
  LegReturnTrigger?: number// [106] 2755 (Int)
  LegPriceQuoteMethod?: string// [107] 2195 (String)
  LegValuationMethod?: string// [108] 2196 (String)
  LegValuationSource?: string// [109] 2197 (String)
  LegValuationReferenceModel?: string// [110] 2198 (String)
  LegPriceQuoteCurrency?: string// [111] 1528 (String)
  LegPriceQuoteCurrencyCodeSource?: string// [112] 2911 (String)
  LegListMethod?: number// [113] 2199 (Int)
  LegCapPrice?: number// [114] 2200 (Float)
  LegFloorPrice?: number// [115] 2201 (Float)
  LegFlexibleIndicator?: boolean// [116] 2202 (Boolean)
  LegFlexProductEligibilityIndicator?: boolean// [117] 2203 (Boolean)
  LegCouponRate?: number// [118] 615 (Float)
  LegSecurityExchange?: string// [119] 616 (String)
  LegPositionLimit?: number// [120] 2205 (Int)
  LegNTPositionLimit?: number// [121] 2206 (Int)
  LegIssuer?: string// [122] 617 (String)
  EncodedLegIssuerLen?: number// [123] 618 (Length)
  EncodedLegIssuer?: Buffer// [124] 619 (RawData)
  LegFinancialInstrumentShortName?: string// [125] 2740 (String)
  LegFinancialInstrumentFullName?: string// [126] 2717 (String)
  EncodedLegFinancialInstrumentFullNameLen?: number// [127] 2718 (Length)
  EncodedLegFinancialInstrumentFullName?: Buffer// [128] 2719 (RawData)
  LegSecurityDesc?: string// [129] 620 (String)
  EncodedLegSecurityDescLen?: number// [130] 621 (Length)
  EncodedLegSecurityDesc?: Buffer// [131] 622 (RawData)
  LegSecurityXML?: ILegSecurityXML// [132] LegSecurityXMLLen.1871, LegSecurityXML.1872, LegSecurityXMLSchema.1873
  LegCPProgram?: number// [133] 2207 (Int)
  LegCPRegType?: string// [134] 2208 (String)
  LegRatioQty?: number// [135] 623 (Float)
  LegSide?: string// [136] 624 (String)
  LegCurrency?: string// [137] 556 (String)
  LegCurrencyCodeSource?: string// [138] 2898 (String)
  LegPool?: string// [139] 740 (String)
  LegDatedDate?: Date// [140] 739 (LocalDate)
  LegContractSettlMonth?: string// [141] 955 (String)
  LegInterestAccrualDate?: Date// [142] 956 (LocalDate)
  LegPutOrCall?: number// [143] 1358 (Int)
  LegInTheMoneyCondition?: number// [144] 2682 (Int)
  LegContraryInstructionEligibilityIndicator?: boolean// [145] 2686 (Boolean)
  LegOptionRatio?: number// [146] 1017 (Float)
  LegPrice?: number// [147] 566 (Float)
  LegEvntGrp?: ILegEvntGrp// [148] NoLegEvents.2059, LegEventType.2060 .. EncodedLegEventText.2075
  LegInstrumentParties?: ILegInstrumentParties// [149] NoLegInstrumentParties.2254, LegInstrumentPartyID.2255 .. LegInstrumentPartySubIDType.2260
  LegShortSaleRestriction?: number// [150] 2209 (Int)
  LegComplexEvents?: ILegComplexEvents// [151] NoLegComplexEvents.2218, LegComplexEventType.2219 .. LegComplexEventXIDRef.2249
  LegStrategyType?: string// [152] 2211 (String)
  LegCommonPricingIndicator?: boolean// [153] 2212 (Boolean)
  LegSettlDisruptionProvision?: number// [154] 2213 (Int)
  LegDeliveryRouteOrCharter?: string// [155] 2754 (String)
  LegInstrumentRoundingDirection?: string// [156] 2214 (String)
  LegInstrumentRoundingPrecision?: number// [157] 2215 (Int)
  LegDateAdjustment?: ILegDateAdjustment// [158] LegBusinessDayConvention.40925, LegBusinessCenterGrp.40923 .. LegDateRollConvention.40926
  LegPricingDateTime?: ILegPricingDateTime// [159] LegPricingDateUnadjusted.41609, LegPricingDateBusinessDayConvention.41610 .. LegPricingTimeBusinessCenter.41613
  LegMarketDisruption?: ILegMarketDisruption// [160] LegMarketDisruptionProvision.41462, LegMarketDisruptionEventGrp.41467 .. LegMarketDisruptionMinimumFuturesContracts.41466
  LegOptionExercise?: ILegOptionExercise// [161] LegExerciseDesc.41481, EncodedLegExerciseDescLen.41482 .. LegMakeWholeInterpolationMethod.42398
  LegStreamGrp?: ILegStreamGrp// [162] NoLegStreams.40241, LegStreamType.40242 .. EncodedLegStreamText.40979
  LegProvisionGrp?: ILegProvisionGrp// [163] NoLegProvisions.40448, LegProvisionType.40449 .. LegProvisionPartySubIDType.40539
  LegAdditionalTermGrp?: ILegAdditionalTermGrp// [164] NoLegAdditionalTerms.41335, LegAdditionalTermConditionPrecedentBondIndicator.41336 .. LegAdditionalTermBondDayCount.41334
  LegProtectionTermGrp?: ILegProtectionTermGrp// [165] NoLegProtectionTerms.41616, LegProtectionTermNotional.41618 .. LegProtectionTermXID.41617
  LegCashSettlTermGrp?: ILegCashSettlTermGrp// [166] NoLegCashSettlTerms.41344, LegCashSettlCurrency.41345 .. LegCashSettlTermXID.41362
  LegPhysicalSettlTermGrp?: ILegPhysicalSettlTermGrp// [167] NoLegPhysicalSettlTerms.41599, NoLegPhysicalSettlTerms.41604 .. LegPhysicalSettlTermXID.41600
  LegExtraordinaryEventGrp?: ILegExtraordinaryEventGrp// [168] NoLegExtraordinaryEvents.42388, LegExtraordinaryEventType.42389, LegExtraordinaryEventValue.42390
  LegExtraordinaryEventAdjustmentMethod?: number// [169] 2606 (Int)
  LegExchangeLookAlike?: boolean// [170] 2607 (Boolean)
}
