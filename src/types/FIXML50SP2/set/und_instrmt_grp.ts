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
  UnderlyingSymbol?: string// 311
  UnderlyingSymbolSfx?: string// 312
  UnderlyingSecurityID?: string// 309
  UnderlyingSecurityIDSource?: string// 305
  UnderlyingProduct?: number// 462
  UnderlyingCFICode?: string// 463
  UnderlyingSecurityType?: string// 310
  UnderlyingSecuritySubType?: string// 763
  UnderlyingMaturityMonthYear?: string// 313
  UnderlyingMaturityDate?: Date// 542
  UnderlyingMaturityTime?: string// 1213
  UnderlyingContractPriceRefMonth?: string// 1837
  UnderlyingCouponPaymentDate?: Date// 241
  UnderlyingRestructuringType?: string// 1453
  UnderlyingSeniority?: string// 1454
  UnderlyingNotional?: number// 2614
  UnderlyingNotionalCurrency?: string// 2615
  UnderlyingNotionalDeterminationMethod?: string// 2616
  UnderlyingNotionalAdjustments?: number// 2617
  UnderlyingNotionalXIDRef?: string// 2619
  UnderlyingNotionalPercentageOutstanding?: number// 1455
  UnderlyingOriginalNotionalPercentageOutstanding?: number// 1456
  UnderlyingAttachmentPoint?: number// 1459
  UnderlyingDetachmentPoint?: number// 1460
  UnderlyingIssueDate?: Date// 242
  UnderlyingRepoCollateralSecurityType?: string// 243
  UnderlyingRepurchaseTerm?: number// 244
  UnderlyingRepurchaseRate?: number// 245
  UnderlyingFactor?: number// 246
  UnderlyingCreditRating?: string// 256
  UnderlyingInstrRegistry?: string// 595
  UnderlyingCountryOfIssue?: string// 592
  UnderlyingStateOrProvinceOfIssue?: string// 593
  UnderlyingLocaleOfIssue?: string// 594
  UnderlyingRedemptionDate?: Date// 247
  UnderlyingStrikePrice?: number// 316
  UnderlyingStrikeCurrency?: string// 941
  UnderlyingOptAttribute?: string// 317
  UnderlyingContractMultiplier?: number// 436
  UnderlyingContractMultiplierUnit?: number// 1437
  UnderlyingTradingUnitPeriodMultiplier?: number// 2363
  DerivativeFlowScheduleType?: number// 1442
  UnderlyingUnitOfMeasure?: string// 998
  UnderlyingUnitOfMeasureQty?: number// 1423
  UnderlyingUnitOfMeasureCurrency?: string// 1718
  UnderlyingPriceUnitOfMeasure?: string// 1424
  UnderlyingPriceUnitOfMeasureQty?: number// 1425
  UnderlyingPriceUnitOfMeasureCurrency?: string// 1719
  UnderlyingTimeUnit?: string// 1000
  UnderlyingExerciseStyle?: number// 1419
  UnderlyingPriceQuoteCurrency?: string// 1526
  UnderlyingCouponRate?: number// 435
  UnderlyingSecurityExchange?: string// 308
  UnderlyingIssuer?: string// 306
  EncodedUnderlyingIssuerLen?: number// 362
  EncodedUnderlyingIssuer?: Buffer// 363
  UnderlyingSecurityDesc?: string// 307
  EncodedUnderlyingSecurityDescLen?: number// 364
  EncodedUnderlyingSecurityDesc?: Buffer// 365
  LegCPProgram?: number// 2207
  UnderlyingCPRegType?: string// 878
  UnderlyingAllocationPercent?: number// 972
  UnderlyingCurrency?: string// 318
  UnderlyingQty?: number// 879
  UnderlyingSettlementType?: number// 975
  UnderlyingCashAmount?: number// 973
  UnderlyingCashType?: string// 974
  UnderlyingPx?: number// 810
  UnderlyingDirtyPrice?: number// 882
  UnderlyingEndPrice?: number// 883
  UnderlyingStartValue?: number// 884
  UnderlyingCurrentValue?: number// 885
  UnderlyingEndValue?: number// 886
  UnderlyingAdjustedQuantity?: number// 1044
  UnderlyingFXRate?: number// 1045
  UnderlyingFXRateCalc?: string// 1046
  UnderlyingCapValue?: number// 1038
  UnderlyingSettlMethod?: string// 1039
  UnderlyingPutOrCall?: number// 315
  UnderlyingInTheMoneyCondition?: number// 2683
  UnderlyingContraryInstructionEligibilityIndicator?: boolean// 2687
  UnderlyingConstituentWeight?: number// 1988
  UnderlyingCouponType?: number// 1989
  UnderlyingTotalIssuedAmount?: number// 1990
  UnderlyingCouponFrequencyPeriod?: number// 1991
  UnderlyingCouponFrequencyUnit?: string// 1992
  LegCouponDayCount?: number// 2165
  UnderlyingObligationID?: string// 1994
  UnderlyingObligationIDSource?: string// 1995
  UnderlyingEquityID?: string// 1996
  UnderlyingEquityIDSource?: string// 1997
  UnderlyingFutureID?: string// 2620
  UnderlyingFutureIDSource?: string// 2621
  UnderlyingLienSeniority?: number// 1998
  UnderlyingLoanFacility?: number// 1999
  UnderlyingReferenceEntityType?: number// 2000
  UnderlyingIndexSeries?: number// 2003
  UnderlyingIndexAnnexVersion?: number// 2004
  UnderlyingIndexAnnexDate?: Date// 2005
  UnderlyingIndexAnnexSource?: string// 2006
  UnderlyingSettlRateIndex?: string// 2284
  UnderlyingSettlRateIndexLocation?: string// 2285
  UnderlyingOptionExpirationDesc?: string// 2286
  EncodedUnderlyingOptionExpirationDescLen?: number// 2287
  EncodedUnderlyingOptionExpirationDesc?: Buffer// 2288
  UnderlyingProductComplex?: string// 2007
  UnderlyingSecurityGroup?: string// 2008
  UnderlyingSettleOnOpenFlag?: string// 2009
  UnderlyingAssignmentMethod?: string// 2010
  UnderlyingSecurityStatus?: string// 2011
  UnderlyingObligationType?: string// 2012
  UnderlyingAssetGroup?: number// 2491
  UnderlyingAssetClass?: number// 2013
  LegAssetSubClass?: number// 2068
  UnderlyingAssetType?: string// 2015
  UnderlyingSwapClass?: string// 2016
  UnderlyingSwapSubClass?: string// 2289
  UnderlyingNthToDefault?: number// 2017
  UnderlyingMthToDefault?: number// 2018
  UnderlyingSettledEntityMatrixSource?: string// 2019
  UnderlyingSettledEntityMatrixPublicationDate?: Date// 2020
  UnderlyingStrikeMultiplier?: number// 2021
  UnderlyingStrikeValue?: number// 2022
  UnderlyingStrikeUnitOfMeasure?: string// 2290
  UnderlyingStrikeIndexCurvePoint?: string// 2622
  UnderlyingStrikeIndex?: string// 2291
  UnderlyingStrikeIndexQuote?: number// 2623
  UnderlyingStrikeIndexSpread?: number// 2292
  UnderlyingStrikePriceDeterminationMethod?: number// 2023
  UnderlyingStrikePriceBoundaryMethod?: number// 2024
  UnderlyingStrikePriceBoundaryPrecision?: number// 2025
  UnderlyingMinPriceIncrement?: number// 2026
  UnderlyingMinPriceIncrementAmount?: number// 2027
  UnderlyingOptPayoutType?: number// 2028
  UnderlyingOptPayoutAmount?: number// 2029
  UnderlyingPriceQuoteMethod?: string// 2030
  UnderlyingValuationMethod?: string// 2031
  UnderlyingValuationSource?: string// 2293
  UnderlyingValuationReferenceModel?: string// 2294
  UnderlyingListMethod?: number// 2032
  UnderlyingCapPrice?: number// 2033
  UnderlyingFloorPrice?: number// 2034
  UnderlyingFlexibleIndicator?: boolean// 2035
  UnderlyingFlexProductEligibilityIndicator?: boolean// 2036
  UnderlyingPositionLimit?: number// 2037
  UnderlyingNTPositionLimit?: number// 2038
  UnderlyingPool?: string// 2039
  UnderlyingContractSettlMonth?: string// 2040
  UnderlyingDatedDate?: Date// 2041
  UnderlyingInterestAccrualDate?: Date// 2042
  UnderlyingShortSaleRestriction?: number// 2043
  UnderlyingRefTickTableID?: number// 2044
  UnderlyingProtectionTermXIDRef?: string// 41314
  UnderlyingSettlTermXIDRef?: string// 41315
  UnderlyingStrategyType?: string// 2295
  UnderlyingCommonPricingIndicator?: boolean// 2296
  UnderlyingSettlDisruptionProvision?: number// 2297
  UnderlyingInstrumentRoundingDirection?: string// 2298
  UnderlyingInstrumentRoundingPrecision?: number// 2299
  UnderlyingExtraordinaryEventAdjustmentMethod?: number// 2624
  UnderlyingExchangeLookAlike?: boolean// 2625
  UnderlyingAverageVolumeLimitationPercentage?: number// 2626
  UnderlyingAverageVolumeLimitationPeriodDays?: number// 2627
  UnderlyingDepositoryReceiptIndicator?: boolean// 2628
  UnderlyingOpenUnits?: number// 2629
  UnderlyingBasketDivisor?: number// 2630
  UnderlyingInstrumentXID?: string// 2631
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
