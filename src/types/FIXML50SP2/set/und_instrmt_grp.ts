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

export interface IUndInstrmtGrp {
  UnderlyingSymbol?: string// [1] 311 (String)
  UnderlyingSymbolSfx?: string// [1] 312 (String)
  UnderlyingSecurityID?: string// [1] 309 (String)
  UnderlyingSecurityIDSource?: string// [1] 305 (String)
  UnderlyingProduct?: number// [1] 462 (Int)
  UnderlyingCFICode?: string// [1] 463 (String)
  UnderlyingSecurityType?: string// [1] 310 (String)
  UnderlyingSecuritySubType?: string// [1] 763 (String)
  UnderlyingMaturityMonthYear?: string// [1] 313 (String)
  UnderlyingMaturityDate?: Date// [1] 542 (LocalDate)
  UnderlyingMaturityTime?: string// [1] 1213 (String)
  UnderlyingContractPriceRefMonth?: string// [1] 1837 (String)
  UnderlyingCouponPaymentDate?: Date// [1] 241 (LocalDate)
  UnderlyingRestructuringType?: string// [1] 1453 (String)
  UnderlyingSeniority?: string// [1] 1454 (String)
  UnderlyingNotional?: number// [1] 2614 (Float)
  UnderlyingNotionalCurrency?: string// [1] 2615 (String)
  UnderlyingNotionalDeterminationMethod?: string// [1] 2616 (String)
  UnderlyingNotionalAdjustments?: number// [1] 2617 (Int)
  UnderlyingNotionalXIDRef?: string// [1] 2619 (String)
  UnderlyingNotionalPercentageOutstanding?: number// [1] 1455 (Float)
  UnderlyingOriginalNotionalPercentageOutstanding?: number// [1] 1456 (Float)
  UnderlyingAttachmentPoint?: number// [1] 1459 (Float)
  UnderlyingDetachmentPoint?: number// [1] 1460 (Float)
  UnderlyingIssueDate?: Date// [1] 242 (LocalDate)
  UnderlyingRepoCollateralSecurityType?: string// [1] 243 (String)
  UnderlyingRepurchaseTerm?: number// [1] 244 (Int)
  UnderlyingRepurchaseRate?: number// [1] 245 (Float)
  UnderlyingFactor?: number// [1] 246 (Float)
  UnderlyingCreditRating?: string// [1] 256 (String)
  UnderlyingInstrRegistry?: string// [1] 595 (String)
  UnderlyingCountryOfIssue?: string// [1] 592 (String)
  UnderlyingStateOrProvinceOfIssue?: string// [1] 593 (String)
  UnderlyingLocaleOfIssue?: string// [1] 594 (String)
  UnderlyingRedemptionDate?: Date// [1] 247 (LocalDate)
  UnderlyingStrikePrice?: number// [1] 316 (Float)
  UnderlyingStrikeCurrency?: string// [1] 941 (String)
  UnderlyingOptAttribute?: string// [1] 317 (String)
  UnderlyingContractMultiplier?: number// [1] 436 (Float)
  UnderlyingContractMultiplierUnit?: number// [1] 1437 (Int)
  UnderlyingTradingUnitPeriodMultiplier?: number// [1] 2363 (Int)
  FlowScheduleType?: number// [1] 1439 (Int)
  UnderlyingUnitOfMeasure?: string// [1] 998 (String)
  UnderlyingUnitOfMeasureQty?: number// [1] 1423 (Float)
  UnderlyingUnitOfMeasureCurrency?: string// [1] 1718 (String)
  UnderlyingPriceUnitOfMeasure?: string// [1] 1424 (String)
  UnderlyingPriceUnitOfMeasureQty?: number// [1] 1425 (Float)
  UnderlyingPriceUnitOfMeasureCurrency?: string// [1] 1719 (String)
  UnderlyingTimeUnit?: string// [1] 1000 (String)
  UnderlyingExerciseStyle?: number// [1] 1419 (Int)
  UnderlyingPriceQuoteCurrency?: string// [1] 1526 (String)
  UnderlyingCouponRate?: number// [1] 435 (Float)
  UnderlyingSecurityExchange?: string// [1] 308 (String)
  UnderlyingIssuer?: string// [1] 306 (String)
  EncodedUnderlyingIssuerLen?: number// [1] 362 (Length)
  EncodedUnderlyingIssuer?: Buffer// [1] 363 (RawData)
  UnderlyingSecurityDesc?: string// [1] 307 (String)
  EncodedUnderlyingSecurityDescLen?: number// [1] 364 (Length)
  EncodedUnderlyingSecurityDesc?: Buffer// [1] 365 (RawData)
  CPProgram?: number// [1] 875 (Int)
  UnderlyingCPRegType?: string// [1] 878 (String)
  UnderlyingAllocationPercent?: number// [1] 972 (Float)
  UnderlyingCurrency?: string// [1] 318 (String)
  UnderlyingQty?: number// [1] 879 (Float)
  UnderlyingSettlementType?: number// [1] 975 (Int)
  UnderlyingCashAmount?: number// [1] 973 (Float)
  UnderlyingCashType?: string// [1] 974 (String)
  UnderlyingPx?: number// [1] 810 (Float)
  UnderlyingDirtyPrice?: number// [1] 882 (Float)
  UnderlyingEndPrice?: number// [1] 883 (Float)
  UnderlyingStartValue?: number// [1] 884 (Float)
  UnderlyingCurrentValue?: number// [1] 885 (Float)
  UnderlyingEndValue?: number// [1] 886 (Float)
  UnderlyingAdjustedQuantity?: number// [1] 1044 (Float)
  UnderlyingFXRate?: number// [1] 1045 (Float)
  UnderlyingFXRateCalc?: string// [1] 1046 (String)
  UnderlyingCapValue?: number// [1] 1038 (Float)
  UnderlyingSettlMethod?: string// [1] 1039 (String)
  UnderlyingPutOrCall?: number// [1] 315 (Int)
  UnderlyingInTheMoneyCondition?: number// [1] 2683 (Int)
  UnderlyingContraryInstructionEligibilityIndicator?: boolean// [1] 2687 (Boolean)
  UnderlyingConstituentWeight?: number// [1] 1988 (Float)
  UnderlyingCouponType?: number// [1] 1989 (Int)
  UnderlyingTotalIssuedAmount?: number// [1] 1990 (Float)
  UnderlyingCouponFrequencyPeriod?: number// [1] 1991 (Int)
  UnderlyingCouponFrequencyUnit?: string// [1] 1992 (String)
  CouponDayCount?: number// [1] 1950 (Int)
  UnderlyingObligationID?: string// [1] 1994 (String)
  UnderlyingObligationIDSource?: string// [1] 1995 (String)
  UnderlyingEquityID?: string// [1] 1996 (String)
  UnderlyingEquityIDSource?: string// [1] 1997 (String)
  UnderlyingFutureID?: string// [1] 2620 (String)
  UnderlyingFutureIDSource?: string// [1] 2621 (String)
  UnderlyingLienSeniority?: number// [1] 1998 (Int)
  UnderlyingLoanFacility?: number// [1] 1999 (Int)
  UnderlyingReferenceEntityType?: number// [1] 2000 (Int)
  UnderlyingIndexSeries?: number// [1] 2003 (Int)
  UnderlyingIndexAnnexVersion?: number// [1] 2004 (Int)
  UnderlyingIndexAnnexDate?: Date// [1] 2005 (LocalDate)
  UnderlyingIndexAnnexSource?: string// [1] 2006 (String)
  UnderlyingSettlRateIndex?: string// [1] 2284 (String)
  UnderlyingSettlRateIndexLocation?: string// [1] 2285 (String)
  UnderlyingOptionExpirationDesc?: string// [1] 2286 (String)
  EncodedUnderlyingOptionExpirationDescLen?: number// [1] 2287 (Length)
  EncodedUnderlyingOptionExpirationDesc?: Buffer// [1] 2288 (RawData)
  UnderlyingProductComplex?: string// [1] 2007 (String)
  UnderlyingSecurityGroup?: string// [1] 2008 (String)
  UnderlyingSettleOnOpenFlag?: string// [1] 2009 (String)
  UnderlyingAssignmentMethod?: string// [1] 2010 (String)
  UnderlyingSecurityStatus?: string// [1] 2011 (String)
  UnderlyingObligationType?: string// [1] 2012 (String)
  UnderlyingAssetGroup?: number// [1] 2491 (Int)
  UnderlyingAssetClass?: number// [1] 2013 (Int)
  AssetSubClass?: number// [1] 1939 (Int)
  UnderlyingAssetType?: string// [1] 2015 (String)
  UnderlyingSwapClass?: string// [1] 2016 (String)
  UnderlyingSwapSubClass?: string// [1] 2289 (String)
  UnderlyingNthToDefault?: number// [1] 2017 (Int)
  UnderlyingMthToDefault?: number// [1] 2018 (Int)
  UnderlyingSettledEntityMatrixSource?: string// [1] 2019 (String)
  UnderlyingSettledEntityMatrixPublicationDate?: Date// [1] 2020 (LocalDate)
  UnderlyingStrikeMultiplier?: number// [1] 2021 (Float)
  UnderlyingStrikeValue?: number// [1] 2022 (Float)
  UnderlyingStrikeUnitOfMeasure?: string// [1] 2290 (String)
  UnderlyingStrikeIndexCurvePoint?: string// [1] 2622 (String)
  UnderlyingStrikeIndex?: string// [1] 2291 (String)
  UnderlyingStrikeIndexQuote?: number// [1] 2623 (Int)
  UnderlyingStrikeIndexSpread?: number// [1] 2292 (Float)
  UnderlyingStrikePriceDeterminationMethod?: number// [1] 2023 (Int)
  UnderlyingStrikePriceBoundaryMethod?: number// [1] 2024 (Int)
  UnderlyingStrikePriceBoundaryPrecision?: number// [1] 2025 (Float)
  UnderlyingMinPriceIncrement?: number// [1] 2026 (Float)
  UnderlyingMinPriceIncrementAmount?: number// [1] 2027 (Float)
  UnderlyingOptPayoutType?: number// [1] 2028 (Int)
  UnderlyingOptPayoutAmount?: number// [1] 2029 (Float)
  UnderlyingPriceQuoteMethod?: string// [1] 2030 (String)
  UnderlyingValuationMethod?: string// [1] 2031 (String)
  UnderlyingValuationSource?: string// [1] 2293 (String)
  UnderlyingValuationReferenceModel?: string// [1] 2294 (String)
  UnderlyingListMethod?: number// [1] 2032 (Int)
  UnderlyingCapPrice?: number// [1] 2033 (Float)
  UnderlyingFloorPrice?: number// [1] 2034 (Float)
  UnderlyingFlexibleIndicator?: boolean// [1] 2035 (Boolean)
  UnderlyingFlexProductEligibilityIndicator?: boolean// [1] 2036 (Boolean)
  UnderlyingPositionLimit?: number// [1] 2037 (Int)
  UnderlyingNTPositionLimit?: number// [1] 2038 (Int)
  UnderlyingPool?: string// [1] 2039 (String)
  UnderlyingContractSettlMonth?: string// [1] 2040 (String)
  UnderlyingDatedDate?: Date// [1] 2041 (LocalDate)
  UnderlyingInterestAccrualDate?: Date// [1] 2042 (LocalDate)
  UnderlyingShortSaleRestriction?: number// [1] 2043 (Int)
  UnderlyingRefTickTableID?: number// [1] 2044 (Int)
  UnderlyingProtectionTermXIDRef?: string// [1] 41314 (String)
  UnderlyingSettlTermXIDRef?: string// [1] 41315 (String)
  UnderlyingStrategyType?: string// [1] 2295 (String)
  UnderlyingCommonPricingIndicator?: boolean// [1] 2296 (Boolean)
  UnderlyingSettlDisruptionProvision?: number// [1] 2297 (Int)
  UnderlyingInstrumentRoundingDirection?: string// [1] 2298 (String)
  UnderlyingInstrumentRoundingPrecision?: number// [1] 2299 (Int)
  UnderlyingExtraordinaryEventAdjustmentMethod?: number// [1] 2624 (Int)
  UnderlyingExchangeLookAlike?: boolean// [1] 2625 (Boolean)
  UnderlyingAverageVolumeLimitationPercentage?: number// [1] 2626 (Float)
  UnderlyingAverageVolumeLimitationPeriodDays?: number// [1] 2627 (Int)
  UnderlyingDepositoryReceiptIndicator?: boolean// [1] 2628 (Boolean)
  UnderlyingOpenUnits?: number// [1] 2629 (Float)
  UnderlyingBasketDivisor?: number// [1] 2630 (Float)
  UnderlyingInstrumentXID?: string// [1] 2631 (String)
  UndSecAltIDGrp?: IUndSecAltIDGrp[]// [1] AltID.458, AltIDSrc.459
  UnderlyingSecurityXML?: IUnderlyingSecurityXML// [2] Schema.1876
  UnderlyingStipulations?: IUnderlyingStipulations[]// [3] Typ.888, Val.889
  UndlyInstrumentParties?: IUndlyInstrumentParties[]// [4] ID.1059, Src.1060 .. Qual.2391
  UnderlyingEvntGrp?: IUnderlyingEvntGrp[]// [5] Typ.1982, Dt.1983 .. EncTxt.2073
  UnderlyingSecondaryAssetGrp?: IUnderlyingSecondaryAssetGrp[]// [6] Clss.2081, SubClss.1978, Typ.2083
  UnderlyingAssetAttributeGrp?: IUnderlyingAssetAttributeGrp[]// [7] Typ.2313, Val.2314, Lmt.2315
  UnderlyingComplexEvents?: IUnderlyingComplexEvents[]// [8] Typ.2046, OptPay.2261 .. XIDRef.2283
  UnderlyingDateAdjustment?: IUnderlyingDateAdjustment// [9] BizDayCnvtn.40964, Roll.40965
  UnderlyingPricingDateTime?: IUnderlyingPricingDateTime// [10] DtUnadj.41949, BizDayCnvtn.41950 .. TmBizCtr.41953
  UnderlyingMarketDisruption?: IUnderlyingMarketDisruption// [11] Prov.41859, FallbckProv.41860 .. MinCtrcts.41863
  UnderlyingOptionExercise?: IUnderlyingOptionExercise// [12] Desc.41810, EncDescLen.41811 .. SettlMethElctngSide.42887
  UnderlyingStreamGrp?: IUnderlyingStreamGrp[]// [13] Typ.40541, XID.42016 .. EncTxt.40989
  UnderlyingProvisionGrp?: IUnderlyingProvisionGrp[]// [14] Typ.42150, DtUnadj.42151 .. EncTxt.42172
  UnderlyingAdditionalTermGrp?: IUnderlyingAdditionalTermGrp[]// [15] PrcdntInd.42037, DscrpncyInd.42038
  UnderlyingProtectionTermGrp?: IUnderlyingProtectionTermGrp[]// [16] Notl.42069, Ccy.42070 .. XID.42076
  UnderlyingCashSettlTermGrp?: IUnderlyingCashSettlTermGrp[]// [17] Ccy.42042, BizDayOfst.42043 .. XID.42059
  UnderlyingPhysicalSettlTermGrp?: IUnderlyingPhysicalSettlTermGrp[]// [18] Ccy.42061, BizDays.42062 .. XID.42064
  UnderlyingRateSpreadSchedule?: IUnderlyingRateSpreadSchedule// [19] InitVal.43004
  UnderlyingDividendPayout?: IUnderlyingDividendPayout// [20] Ratio.42860, Conds.42861
  UnderlyingExtraordinaryEventGrp?: IUnderlyingExtraordinaryEventGrp[]// [21] Typ.42885, Val.42886
}
