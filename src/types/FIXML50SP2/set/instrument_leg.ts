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
  LegSymbolSfx?: string// [1] 601 (String)
  LegSecurityID?: string// [1] 602 (String)
  LegSecurityIDSource?: string// [1] 603 (String)
  LegID?: string// [1] 1788 (String)
  LegProduct?: number// [1] 607 (Int)
  LegSecurityGroup?: string// [1] 1594 (String)
  LegCFICode?: string// [1] 608 (String)
  LegSecurityType?: string// [1] 609 (String)
  LegSecuritySubType?: string// [1] 764 (String)
  LegMaturityMonthYear?: string// [1] 610 (String)
  LegMaturityDate?: Date// [1] 611 (LocalDate)
  LegMaturityTime?: string// [1] 1212 (String)
  LegSettleOnOpenFlag?: string// [1] 2146 (String)
  LegInstrmtAssignmentMethod?: string// [1] 2147 (String)
  LegSecurityStatus?: string// [1] 2148 (String)
  LegCouponPaymentDate?: Date// [1] 248 (LocalDate)
  LegRestructuringType?: string// [1] 2149 (String)
  LegSeniority?: string// [1] 2150 (String)
  LegNotionalPercentageOutstanding?: number// [1] 2151 (Float)
  LegOriginalNotionalPercentageOutstanding?: number// [1] 2152 (Float)
  LegAttachmentPoint?: number// [1] 2153 (Float)
  LegDetachmentPoint?: number// [1] 2154 (Float)
  LegObligationType?: string// [1] 2155 (String)
  LegAssetGroup?: number// [1] 2348 (Int)
  LegAssetClass?: number// [1] 2067 (Int)
  AssetSubClass?: number// [1] 1939 (Int)
  LegAssetType?: string// [1] 2069 (String)
  LegSwapClass?: string// [1] 2070 (String)
  LegSwapSubClass?: string// [1] 2156 (String)
  LegNthToDefault?: number// [1] 2157 (Int)
  LegMthToDefault?: number// [1] 2158 (Int)
  LegSettledEntityMatrixSource?: string// [1] 2159 (String)
  LegSettledEntityMatrixPublicationDate?: Date// [1] 2160 (LocalDate)
  LegCouponType?: number// [1] 2161 (Int)
  LegTotalIssuedAmount?: number// [1] 2162 (Float)
  LegCouponFrequencyPeriod?: number// [1] 2163 (Int)
  LegCouponFrequencyUnit?: string// [1] 2164 (String)
  CouponDayCount?: number// [1] 1950 (Int)
  LegConvertibleBondEquityID?: string// [1] 2166 (String)
  ConvertibleBondEquityIDSource?: string// [1] 1952 (String)
  LegContractPriceRefMonth?: string// [1] 2168 (String)
  LegLienSeniority?: number// [1] 2169 (Int)
  LegLoanFacility?: number// [1] 2170 (Int)
  LegReferenceEntityType?: number// [1] 2171 (Int)
  LegIndexSeries?: number// [1] 2172 (Int)
  LegIndexAnnexVersion?: number// [1] 2173 (Int)
  LegIndexAnnexDate?: Date// [1] 2174 (LocalDate)
  LegIndexAnnexSource?: string// [1] 2175 (String)
  LegSettlRateIndex?: string// [1] 2176 (String)
  LegSettlRateIndexLocation?: string// [1] 2177 (String)
  LegOptionExpirationDesc?: string// [1] 2178 (String)
  EncodedLegOptionExpirationDescLen?: number// [1] 2179 (Length)
  EncodedLegOptionExpirationDesc?: Buffer// [1] 2180 (RawData)
  LegIssueDate?: Date// [1] 249 (LocalDate)
  LegRepoCollateralSecurityType?: string// [1] 250 (String)
  LegRepurchaseTerm?: number// [1] 251 (Int)
  LegRepurchaseRate?: number// [1] 252 (Float)
  LegFactor?: number// [1] 253 (Float)
  LegCreditRating?: string// [1] 257 (String)
  LegInstrRegistry?: string// [1] 599 (String)
  LegCountryOfIssue?: string// [1] 596 (String)
  LegStateOrProvinceOfIssue?: string// [1] 597 (String)
  LegLocaleOfIssue?: string// [1] 598 (String)
  LegRedemptionDate?: Date// [1] 254 (LocalDate)
  LegStrikePrice?: number// [1] 612 (Float)
  LegStrikeCurrency?: string// [1] 942 (String)
  LegStrikeMultiplier?: number// [1] 2181 (Float)
  LegStrikeValue?: number// [1] 2182 (Float)
  LegStrikeUnitOfMeasure?: string// [1] 2183 (String)
  LegStrikeIndex?: string// [1] 2184 (String)
  LegStrikeIndexCurvePoint?: string// [1] 2604 (String)
  LegStrikeIndexSpread?: number// [1] 2185 (Float)
  LegStrikeIndexQuote?: number// [1] 2605 (Int)
  LegStrikePriceDeterminationMethod?: number// [1] 2186 (Int)
  LegStrikePriceBoundaryMethod?: number// [1] 2187 (Int)
  LegStrikePriceBoundaryPrecision?: number// [1] 2188 (Float)
  LegUnderlyingPriceDeterminationMethod?: number// [1] 2189 (Int)
  LegOptAttribute?: string// [1] 613 (String)
  LegContractMultiplier?: number// [1] 614 (Float)
  LegContractMultiplierUnit?: number// [1] 1436 (Int)
  LegTradingUnitPeriodMultiplier?: number// [1] 2354 (Int)
  FlowScheduleType?: number// [1] 1439 (Int)
  LegMinPriceIncrement?: number// [1] 2190 (Float)
  LegMinPriceIncrementAmount?: number// [1] 2191 (Float)
  LegUnitOfMeasure?: string// [1] 999 (String)
  LegUnitOfMeasureQty?: number// [1] 1224 (Float)
  LegUnitOfMeasureCurrency?: string// [1] 1720 (String)
  LegPriceUnitOfMeasure?: string// [1] 1421 (String)
  LegPriceUnitOfMeasureQty?: number// [1] 1422 (Float)
  LegPriceUnitOfMeasureCurrency?: string// [1] 1721 (String)
  LegSettlMethod?: string// [1] 2192 (String)
  LegTimeUnit?: string// [1] 1001 (String)
  LegExerciseStyle?: number// [1] 1420 (Int)
  LegOptPayoutType?: number// [1] 2193 (Int)
  LegOptPayoutAmount?: number// [1] 2194 (Float)
  LegPriceQuoteMethod?: string// [1] 2195 (String)
  LegValuationMethod?: string// [1] 2196 (String)
  LegValuationSource?: string// [1] 2197 (String)
  LegValuationReferenceModel?: string// [1] 2198 (String)
  LegPriceQuoteCurrency?: string// [1] 1528 (String)
  LegListMethod?: number// [1] 2199 (Int)
  LegCapPrice?: number// [1] 2200 (Float)
  LegFloorPrice?: number// [1] 2201 (Float)
  LegFlexibleIndicator?: boolean// [1] 2202 (Boolean)
  LegFlexProductEligibilityIndicator?: boolean// [1] 2203 (Boolean)
  LegCouponRate?: number// [1] 615 (Float)
  LegSecurityExchange?: string// [1] 616 (String)
  LegPositionLimit?: number// [1] 2205 (Int)
  LegNTPositionLimit?: number// [1] 2206 (Int)
  LegIssuer?: string// [1] 617 (String)
  EncodedLegIssuerLen?: number// [1] 618 (Length)
  EncodedLegIssuer?: Buffer// [1] 619 (RawData)
  LegSecurityDesc?: string// [1] 620 (String)
  EncodedLegSecurityDescLen?: number// [1] 621 (Length)
  EncodedLegSecurityDesc?: Buffer// [1] 622 (RawData)
  CPProgram?: number// [1] 875 (Int)
  LegCPRegType?: string// [1] 2208 (String)
  LegRatioQty?: number// [1] 623 (Float)
  LegSide?: string// [1] 624 (String)
  LegCurrency?: string// [1] 556 (String)
  LegPool?: string// [1] 740 (String)
  LegDatedDate?: Date// [1] 739 (LocalDate)
  LegContractSettlMonth?: string// [1] 955 (String)
  LegInterestAccrualDate?: Date// [1] 956 (LocalDate)
  LegPutOrCall?: number// [1] 1358 (Int)
  LegInTheMoneyCondition?: number// [1] 2682 (Int)
  LegContraryInstructionEligibilityIndicator?: boolean// [1] 2686 (Boolean)
  LegOptionRatio?: number// [1] 1017 (Float)
  LegPrice?: number// [1] 566 (Float)
  LegShortSaleRestriction?: number// [1] 2209 (Int)
  LegStrategyType?: string// [1] 2211 (String)
  LegCommonPricingIndicator?: boolean// [1] 2212 (Boolean)
  LegSettlDisruptionProvision?: number// [1] 2213 (Int)
  LegInstrumentRoundingDirection?: string// [1] 2214 (String)
  LegInstrumentRoundingPrecision?: number// [1] 2215 (Int)
  LegExtraordinaryEventAdjustmentMethod?: number// [1] 2606 (Int)
  LegExchangeLookAlike?: boolean// [1] 2607 (Boolean)
  LegSecAltIDGrp?: ILegSecAltIDGrp[]// [1] SecAltID.605, SecAltIDSrc.606
  LegSecondaryAssetGrp?: ILegSecondaryAssetGrp[]// [2] Clss.2077, SubClss.1978, Typ.2079
  LegAssetAttributeGrp?: ILegAssetAttributeGrp[]// [3] Typ.2309, Val.2310, Lmt.2311
  LegSecurityXML?: ILegSecurityXML// [4] Schema.1873
  LegEvntGrp?: ILegEvntGrp[]// [5] Typ.2060, Dt.2061 .. EncTxt.2075
  LegInstrumentParties?: ILegInstrumentParties[]// [6] ID.2255, Src.2256 .. Qual.2379
  LegComplexEvents?: ILegComplexEvents[]// [7] Typ.2219, OptPay.2220 .. XIDRef.2249
  LegDateAdjustment?: ILegDateAdjustment// [8] BizDayCnvtn.40925, Roll.40926
  LegPricingDateTime?: ILegPricingDateTime// [9] DtUnadj.41609, BizDayCnvtn.41610 .. TmBizCtr.41613
  LegMarketDisruption?: ILegMarketDisruption// [10] Prov.41462, FallbckProv.41463 .. MinCtrcts.41466
  LegOptionExercise?: ILegOptionExercise// [11] Desc.41481, EncDescLen.41482 .. SettlMethElctngSide.42391
  LegStreamGrp?: ILegStreamGrp[]// [12] Typ.40242, XID.41700 .. EncTxt.40979
  LegProvisionGrp?: ILegProvisionGrp[]// [13] Typ.40449, DtUnadj.40450 .. EncTxt.40981
  LegAdditionalTermGrp?: ILegAdditionalTermGrp[]// [14] PrcdntInd.41336, DscrpncyInd.41337
  LegProtectionTermGrp?: ILegProtectionTermGrp[]// [15] Notl.41618, Ccy.41619 .. XID.41617
  LegCashSettlTermGrp?: ILegCashSettlTermGrp[]// [16] Ccy.41345, BizDayOfst.41346 .. XID.41362
  LegPhysicalSettlTermGrp?: ILegPhysicalSettlTermGrp[]// [17] Ccy.41601, BizDays.41602 .. XID.41600
  LegExtraordinaryEventGrp?: ILegExtraordinaryEventGrp[]// [18] Typ.42389, Val.42390
}
