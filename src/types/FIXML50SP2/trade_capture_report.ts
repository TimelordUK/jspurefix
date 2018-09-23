import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ITradePriceConditionGrp } from './set/trade_price_condition_grp'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
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

/*
******************************************************
* TradeCaptureReport can be found in Volume 5 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface ITradeCaptureReport {
  MDStatisticRptID?: string// 2453
  LegTradeID?: string// 1894
  SecondaryTradeID?: string// 1
  FirmTradeID?: string// 1041
  SecondaryFirmTradeID?: string// 1042
  PackageID?: string// 2489
  TradeNumber?: number// 2490
  TransferTransType?: number// 2439
  TransferReportType?: number// 2444
  TrdRptStatus?: number// 939
  MDStatisticReqID?: string// 2452
  TrdType?: number// 828
  SideTrdSubTyp?: number// 1008
  SecondaryTrdType?: number// 855
  AlgorithmicTradeIndicator?: number// 2667
  OffsetInstruction?: number// 1849
  TradeHandlingInstr?: string// 1123
  OrigTradeHandlingInstr?: string// 1124
  OrigTradeDate?: Date// 1125
  SideOrigTradeID?: string// 1507
  OrigSecondaryTradeID?: string// 1127
  TransferReason?: string// 830
  ExecType?: string// 150
  TotNumTradeReports?: number// 748
  LastRptRequested?: string// 912
  UnsolicitedIndicator?: string// 325
  SubscriptionRequestType?: string// 263
  AllocReportRefID?: string// 795
  SecondaryTradeReportRefID?: string// 881
  SecondaryTradeReportID?: string// 818
  TradeLinkID?: string// 820
  TradeMatchID?: string// 1
  LegExecID?: string// 1893
  SecondaryExecID?: string// 527
  ExecRestatementReason?: number// 378
  RegulatoryTransactionType?: number// 2347
  PreviouslyReported?: string// 570
  UnderlyingReturnRatePriceType?: number// 43068
  CrossType?: number// 549
  AsOfIndicator?: string// 1015
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  SideVenueType?: string// 1899
  SideCollateralAmountMarketSegmentID?: string// 2693
  SideCollateralAmountMarketID?: string// 2692
  TaxonomyType?: string// 2375
  LegQtyType?: number// 1591
  UnderlyingTradingSessionID?: string// 822
  UnderlyingTradingSessionSubID?: string// 823
  LegLastQty?: number// 1418
  LastQtyVariance?: number// 1828
  LastQtyChanged?: number// 2301
  LastMultipliedQty?: number// 2368
  TotalTradeQty?: number// 2367
  TotalTradeMultipliedQty?: number// 2370
  LegLastPx?: number// 637
  LegMidPx?: number// 2346
  LegDifferentialPrice?: string// 2492
  CalculatedCcyLastQty?: number// 1056
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  SettlPriceFxRateCalc?: string// 2366
  LastParPx?: number// 669
  LastSpotRate?: number// 194
  LastForwardPoints?: string// 195
  LastSwapPoints?: string// 1071
  InstrumentPricePrecision?: number// 2576
  LastMkt?: string// 30
  SideClearingTradePrice?: number// 1597
  TradePriceNegotiationMethod?: number// 1740
  LastUpfrontPrice?: number// 1743
  UpfrontPriceType?: number// 1741
  TradeDate?: Date// 75
  ClearingBusinessDate?: Date// 715
  SideAvgPx?: number// 1852
  SideAvgPxGroupID?: string// 1854
  SideAvgPxIndicator?: number// 1853
  UnderlyingDividendPeriodValuationDateAdjusted?: Date// 42874
  UnderlyingReturnRateValuationTime?: string// 43056
  ValuationBusinessCenter?: string// 2087
  SideMultiLegReportingType?: number// 752
  TradeLegRefID?: string// 824
  RelSymTransactTime?: Date// 1504
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  UnderlyingSettlementDate?: Date// 987
  MatchStatus?: string// 573
  ExecMethod?: number// 2405
  MatchType?: string// 574
  Volatility?: string// 1188
  TimeToExpiration?: string// 1189
  DividendYield?: number// 1380
  RiskFreeRate?: string// 1190
  PriceDelta?: string// 811
  CurrencyRatio?: string// 1382
  CopyMsgIndicator?: string// 797
  PublishTrdIndicator?: string// 852
  TradePublishIndicator?: number// 1390
  ShortSaleReason?: number// 853
  TierCode?: string// 994
  MessageEventSource?: string// 1011
  LastUpdateTime?: Date// 779
  RndPx?: number// 991
  TZTransactTime?: string// 1132
  ReportedPxDiff?: string// 1134
  AllocGrossTradeAmt?: number// 2300
  TotalGrossTradeAmt?: number// 2369
  CollRptRejectReason?: number// 2487
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  FeeMultiplier?: string// 1329
  ClearedIndicator?: number// 1832
  ClearingIntention?: number// 1924
  TradeClearingInstruction?: number// 1925
  BackloadedTradeIndicator?: string// 1926
  ConfirmationMethod?: number// 1927
  MandatoryClearingIndicator?: string// 1928
  MixedSwapIndicator?: string// 1929
  MultiAssetSwapIndicator?: string// 2527
  InternationalSwapIndicator?: string// 2526
  OffMarketPriceIndicator?: string// 1930
  VerificationMethod?: number// 1931
  ClearingRequirementException?: number// 1932
  IRSDirection?: string// 1933
  RegulatoryReportType?: number// 1934
  VoluntaryRegulatoryReport?: string// 1935
  TradeCollateralization?: number// 1936
  TradeContinuation?: number// 1937
  UnderlyingDeliveryStreamDeliveryContingency?: string// 41783
  TradeVersion?: string// 2302
  HistoricalReportIndicator?: string// 2303
  DeltaCrossed?: string// 2596
  TradeContinuationText?: string// 2374
  EncodedTradeContinuationTextLen?: string// 2372
  EncodedTradeContinuationText?: Buffer// 2371
  IntraFirmTradeIndicator?: string// 2373
  AffiliatedFirmsTradeIndicator?: string// 2525
  AllocRiskLimitCheckStatus?: number// 2483
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  TradePriceConditionGrp?: ITradePriceConditionGrp[]
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]
  RootParties?: IRootParties[]
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  PaymentGrp?: IPaymentGrp[]
  YieldData?: IYieldData
  UndInstrmtGrp?: IUndInstrmtGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  CollateralAmountGrp?: ICollateralAmountGrp[]
  RateSource?: IRateSource[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  PositionAmountData?: IPositionAmountData[]
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp[]
  TrdRegTimestamps?: ITrdRegTimestamps[]
  TradeQtyGrp?: ITradeQtyGrp[]
  TrdCapRptSideGrp?: ITrdCapRptSideGrp[]
  TrdRepIndicatorsGrp?: ITrdRepIndicatorsGrp[]
  TrdRegPublicationGrp?: ITrdRegPublicationGrp[]
  MandatoryClearingJurisdictionGrp?: IMandatoryClearingJurisdictionGrp[]
  AttachmentGrp?: IAttachmentGrp[]
}
