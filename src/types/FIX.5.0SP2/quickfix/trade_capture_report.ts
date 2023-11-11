import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ITradePriceConditionGrp } from './set/trade_price_condition_grp'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IPriceQualifierGrp } from './set/price_qualifier_grp'
import { IRootParties } from './set/root_parties'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IPaymentGrp } from './set/payment_grp'
import { IYieldData } from './set/yield_data'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { ICollateralAmountGrp } from './set/collateral_amount_grp'
import { IRateSource } from './set/rate_source'
import { ITransactionAttributeGrp } from './set/transaction_attribute_grp'
import { IAveragePriceDetail } from './set/average_price_detail'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IPositionAmountData } from './set/position_amount_data'
import { ITrdInstrmtLegGrp } from './set/trd_instrmt_leg_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { ITradeQtyGrp } from './set/trade_qty_grp'
import { ITrdCapRptSideGrp } from './set/trd_cap_rpt_side_grp'
import { ITrdRepIndicatorsGrp } from './set/trd_rep_indicators_grp'
import { ITrdRegPublicationGrp } from './set/trd_reg_publication_grp'
import { IMandatoryClearingJurisdictionGrp } from './set/mandatory_clearing_jurisdiction_grp'
import { IAttachmentGrp } from './set/attachment_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeCaptureReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  TradeReportID?: string// [3] 571 (String)
  TradeID?: string// [4] 1003 (String)
  SecondaryTradeID?: string// [5] 1040 (String)
  FirmTradeID?: string// [6] 1041 (String)
  SecondaryFirmTradeID?: string// [7] 1042 (String)
  PackageID?: string// [8] 2489 (String)
  TradeNumber?: number// [9] 2490 (Int)
  TradeReportTransType?: number// [10] 487 (Int)
  TradeReportType?: number// [11] 856 (Int)
  TrdRptStatus?: number// [12] 939 (Int)
  TradeRequestID?: string// [13] 568 (String)
  TrdType?: number// [14] 828 (Int)
  TrdSubType?: number// [15] 829 (Int)
  SecondaryTrdType?: number// [16] 855 (Int)
  TertiaryTrdType?: number// [17] 2896 (Int)
  AnonymousTradeIndicator?: boolean// [18] 2961 (Boolean)
  AlgorithmicTradeIndicator?: number// [19] 2667 (Int)
  OffsetInstruction?: number// [20] 1849 (Int)
  TradePriceConditionGrp?: ITradePriceConditionGrp// [21] NoTradePriceConditions.1838, TradePriceCondition.1839
  TradeHandlingInstr?: string// [22] 1123 (String)
  OrigTradeHandlingInstr?: string// [23] 1124 (String)
  OrigTradeDate?: Date// [24] 1125 (LocalDate)
  OrigTradeID?: string// [25] 1126 (String)
  OrigSecondaryTradeID?: string// [26] 1127 (String)
  TransferReason?: string// [27] 830 (String)
  ExecType?: string// [28] 150 (String)
  TotNumTradeReports?: number// [29] 748 (Int)
  LastRptRequested?: boolean// [30] 912 (Boolean)
  ManualOrderIndicator?: boolean// [31] 1028 (Boolean)
  UnsolicitedIndicator?: boolean// [32] 325 (Boolean)
  SubscriptionRequestType?: string// [33] 263 (String)
  TradeReportRefID?: string// [34] 572 (String)
  SecondaryTradeReportRefID?: string// [35] 881 (String)
  SecondaryTradeReportID?: string// [36] 818 (String)
  TradeLinkID?: string// [37] 820 (String)
  TrdMatchID?: string// [38] 880 (String)
  ExecID?: string// [39] 17 (String)
  ExecRefID?: string// [40] 19 (String)
  SecondaryExecID?: string// [41] 527 (String)
  ExecRestatementReason?: number// [42] 378 (Int)
  RegulatoryTransactionType?: number// [43] 2347 (Int)
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [44] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  PreviouslyReported?: boolean// [45] 570 (Boolean)
  PriceType?: number// [46] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [47] NoPriceQualifiers.2709, PriceQualifier.2710
  CrossType?: number// [48] 549 (Int)
  RootParties?: IRootParties// [49] NoRootPartyIDs.1116, RootPartyID.1117 .. RootPartySubIDType.1122
  AsOfIndicator?: string// [50] 1015 (String)
  SettlSessID?: string// [51] 716 (String)
  SettlSessSubID?: string// [52] 717 (String)
  VenueType?: string// [53] 1430 (String)
  MarketSegmentID?: string// [54] 1300 (String)
  MarketID?: string// [55] 1301 (String)
  TaxonomyType?: string// [56] 2375 (String)
  Instrument?: IInstrument// [57] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [58] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [59] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  PaymentGrp?: IPaymentGrp// [60] NoPayments.40212, PaymentType.40213 .. EncodedPaymentText.40985
  QtyType?: number// [61] 854 (Int)
  YieldData?: IYieldData// [62] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  UndInstrmtGrp?: IUndInstrmtGrp// [63] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [64] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  CollateralAmountGrp?: ICollateralAmountGrp// [65] NoCollateralAmounts.1703, CurrentCollateralAmount.1704 .. UnderlyingRefID.2841
  CollateralizationValueDate?: Date// [66] 2868 (LocalDate)
  RateSource?: IRateSource// [67] NoRateSources.1445, RateSource.1446 .. FXBenchmarkRateFix.2796
  TransactionAttributeGrp?: ITransactionAttributeGrp// [68] NoTransactionAttributes.2871, TransactionAttributeType.2872, TransactionAttributeValue.2873
  UnderlyingTradingSessionID?: string// [69] 822 (String)
  UnderlyingTradingSessionSubID?: string// [70] 823 (String)
  LastQty?: number// [71] 32 (Float)
  LastQtyVariance?: number// [72] 1828 (Float)
  LastQtyChanged?: number// [73] 2301 (Float)
  LastMultipliedQty?: number// [74] 2368 (Float)
  TotalTradeQty?: number// [75] 2367 (Float)
  TotalTradeMultipliedQty?: number// [76] 2370 (Float)
  LastPx?: number// [77] 31 (Float)
  MidPx?: number// [78] 631 (Float)
  DifferentialPrice?: number// [79] 1522 (Float)
  CalculatedCcyLastQty?: number// [80] 1056 (Float)
  PriceMarkup?: number// [81] 2762 (Float)
  AveragePriceDetail?: IAveragePriceDetail// [82] AveragePriceType.2763, AveragePriceStartTime.2764, AveragePriceEndTime.2765
  Currency?: string// [83] 15 (String)
  CurrencyCodeSource?: string// [84] 2897 (String)
  SettlCurrency?: string// [85] 120 (String)
  SettlCurrencyCodeSource?: string// [86] 2899 (String)
  SettlPriceFxRateCalc?: string// [87] 2366 (String)
  LastParPx?: number// [88] 669 (Float)
  LastSpotRate?: number// [89] 194 (Float)
  LastForwardPoints?: number// [90] 195 (Float)
  LastSwapPoints?: number// [91] 1071 (Float)
  PricePrecision?: number// [92] 2349 (Int)
  LastMkt?: string// [93] 30 (String)
  ClearingTradePrice?: number// [94] 1596 (Float)
  TradePriceNegotiationMethod?: number// [95] 1740 (Int)
  LastUpfrontPrice?: number// [96] 1743 (Float)
  UpfrontPriceType?: number// [97] 1741 (Int)
  TradeDate?: Date// [98] 75 (LocalDate)
  ClearingBusinessDate?: Date// [99] 715 (LocalDate)
  ClearingPortfolioID?: string// [100] 2870 (String)
  AvgPx?: number// [101] 6 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [102] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  AvgPxGroupID?: string// [103] 1731 (String)
  AvgPxIndicator?: number// [104] 819 (Int)
  ValuationDate?: Date// [105] 2085 (LocalDate)
  ValuationTime?: string// [106] 2086 (String)
  ValuationBusinessCenter?: string// [107] 2087 (String)
  PositionAmountData?: IPositionAmountData// [108] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  MultiLegReportingType?: string// [109] 442 (String)
  TradeLegRefID?: string// [110] 824 (String)
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp// [111] NoLegs.555, LegSymbol.600 .. LegDifferentialPrice.2492
  TransactTime?: Date// [112] 60 (UtcTimestamp)
  TrdRegTimestamps?: ITrdRegTimestamps// [113] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  SettlType?: string// [114] 63 (String)
  SettlDate?: Date// [115] 64 (LocalDate)
  TerminationDate?: Date// [116] 2878 (LocalDate)
  UnderlyingSettlementDate?: Date// [117] 987 (LocalDate)
  MatchStatus?: string// [118] 573 (String)
  ExecMethod?: number// [119] 2405 (Int)
  MatchType?: string// [120] 574 (String)
  TradeQtyGrp?: ITradeQtyGrp// [121] NoTradeQtys.1841, TradeQtyType.1842, TradeQty.1843
  TrdCapRptSideGrp?: ITrdCapRptSideGrp// [122] NoSides.552, Side.54 .. SideUnderlyingRefID.2863
  Volatility?: number// [123] 1188 (Float)
  TimeToExpiration?: number// [124] 1189 (Float)
  DividendYield?: number// [125] 1380 (Float)
  RiskFreeRate?: number// [126] 1190 (Float)
  PriceDelta?: number// [127] 811 (Float)
  CurrencyRatio?: number// [128] 1382 (Float)
  CopyMsgIndicator?: boolean// [129] 797 (Boolean)
  TrdRepIndicatorsGrp?: ITrdRepIndicatorsGrp// [130] NoTrdRepIndicators.1387, TrdRepPartyRole.1388, TrdRepIndicator.1389
  TradeReportingIndicator?: number// [131] 2524 (Int)
  PublishTrdIndicator?: boolean// [132] 852 (Boolean)
  TradePublishIndicator?: number// [133] 1390 (Int)
  TrdRegPublicationGrp?: ITrdRegPublicationGrp// [134] NoTrdRegPublications.2668, TrdRegPublicationType.2669, TrdRegPublicationReason.2670
  ShortSaleReason?: number// [135] 853 (Int)
  TierCode?: string// [136] 994 (String)
  MessageEventSource?: string// [137] 1011 (String)
  LastUpdateTime?: Date// [138] 779 (UtcTimestamp)
  RndPx?: number// [139] 991 (Float)
  TZTransactTime?: string// [140] 1132 (String)
  ReportedPxDiff?: boolean// [141] 1134 (Boolean)
  GrossTradeAmt?: number// [142] 381 (Float)
  TotalGrossTradeAmt?: number// [143] 2369 (Float)
  TradeReportRejectReason?: number// [144] 751 (Int)
  RejectText?: string// [145] 1328 (String)
  EncodedRejectTextLen?: number// [146] 1664 (Length)
  EncodedRejectText?: Buffer// [147] 1665 (RawData)
  FeeMultiplier?: number// [148] 1329 (Float)
  ClearedIndicator?: number// [149] 1832 (Int)
  ClearingIntention?: number// [150] 1924 (Int)
  TradeClearingInstruction?: number// [151] 1925 (Int)
  BackloadedTradeIndicator?: boolean// [152] 1926 (Boolean)
  ConfirmationMethod?: number// [153] 1927 (Int)
  MandatoryClearingIndicator?: boolean// [154] 1928 (Boolean)
  MandatoryClearingJurisdictionGrp?: IMandatoryClearingJurisdictionGrp// [155] NoMandatoryClearingJurisdictions.41312, MandatoryClearingJurisdiction.41313
  MixedSwapIndicator?: boolean// [156] 1929 (Boolean)
  MultiAssetSwapIndicator?: boolean// [157] 2527 (Boolean)
  InternationalSwapIndicator?: boolean// [158] 2526 (Boolean)
  OffMarketPriceIndicator?: boolean// [159] 1930 (Boolean)
  VerificationMethod?: number// [160] 1931 (Int)
  ClearingRequirementException?: number// [161] 1932 (Int)
  IRSDirection?: string// [162] 1933 (String)
  RegulatoryReportType?: number// [163] 1934 (Int)
  RegulatoryReportTypeBusinessDate?: Date// [164] 2869 (LocalDate)
  VoluntaryRegulatoryReport?: boolean// [165] 1935 (Boolean)
  MultiJurisdictionReportingIndicator?: number// [166] 2963 (Int)
  TradeCollateralization?: number// [167] 1936 (Int)
  TradeContinuation?: number// [168] 1937 (Int)
  TradeContingency?: number// [169] 2387 (Int)
  TradeVersion?: string// [170] 2302 (String)
  HistoricalReportIndicator?: boolean// [171] 2303 (Boolean)
  DeltaCrossed?: boolean// [172] 2596 (Boolean)
  TradeContinuationText?: string// [173] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [174] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [175] 2371 (RawData)
  IntraFirmTradeIndicator?: boolean// [176] 2373 (Boolean)
  AffiliatedFirmsTradeIndicator?: boolean// [177] 2525 (Boolean)
  AttachmentGrp?: IAttachmentGrp// [178] NoAttachments.2104, AttachmentName.2105 .. AttachmentKeyword.2114
  RiskLimitCheckStatus?: number// [179] 2343 (Int)
  StandardTrailer: IStandardTrailer// [180] SignatureLength.93, Signature.89, CheckSum.10
}
