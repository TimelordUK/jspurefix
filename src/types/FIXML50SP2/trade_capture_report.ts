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
  TradeReportID?: string// 571
  TradeID?: string// 1003
  SecondaryTradeID?: string// 1040
  FirmTradeID?: string// 1041
  SecondaryFirmTradeID?: string// 1042
  PackageID?: string// 2489
  TradeNumber?: number// 2490
  TradeReportTransType?: number// 487
  TradeReportType?: number// 856
  TrdRptStatus?: number// 939
  TradeRequestID?: string// 568
  TrdType?: number// 828
  TrdSubType?: number// 829
  SecondaryTrdType?: number// 855
  AlgorithmicTradeIndicator?: number// 2667
  OffsetInstruction?: number// 1849
  TradeHandlingInstr?: string// 1123
  OrigTradeHandlingInstr?: string// 1124
  OrigTradeDate?: Date// 1125
  OrigTradeID?: string// 1126
  OrigSecondaryTradeID?: string// 1127
  TransferReason?: string// 830
  ExecType?: string// 150
  TotNumTradeReports?: number// 748
  LastRptRequested?: boolean// 912
  UnsolicitedIndicator?: boolean// 325
  SubscriptionRequestType?: string// 263
  TradeReportRefID?: string// 572
  SecondaryTradeReportRefID?: string// 881
  SecondaryTradeReportID?: string// 818
  TradeLinkID?: string// 820
  TrdMatchID?: string// 880
  ExecID?: string// 17
  SecondaryExecID?: string// 527
  ExecRestatementReason?: number// 378
  RegulatoryTransactionType?: number// 2347
  PreviouslyReported?: boolean// 570
  PriceType?: number// 423
  CrossType?: number// 549
  AsOfIndicator?: string// 1015
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  VenueType?: string// 1430
  MarketSegmentID?: string// 1300
  MarketID?: string// 1301
  TaxonomyType?: string// 2375
  QtyType?: number// 854
  UnderlyingTradingSessionID?: string// 822
  UnderlyingTradingSessionSubID?: string// 823
  LastQty?: number// 32
  LastQtyVariance?: number// 1828
  LastQtyChanged?: number// 2301
  LastMultipliedQty?: number// 2368
  TotalTradeQty?: number// 2367
  TotalTradeMultipliedQty?: number// 2370
  LastPx?: number// 31
  MidPx?: number// 631
  DifferentialPrice?: number// 1522
  CalculatedCcyLastQty?: number// 1056
  Currency?: string// 15
  SettlCurrency?: string// 120
  SettlPriceFxRateCalc?: string// 2366
  LastParPx?: number// 669
  LastSpotRate?: number// 194
  LastForwardPoints?: number// 195
  LastSwapPoints?: number// 1071
  PricePrecision?: number// 2349
  LastMkt?: string// 30
  ClearingTradePrice?: number// 1596
  TradePriceNegotiationMethod?: number// 1740
  LastUpfrontPrice?: number// 1743
  UpfrontPriceType?: number// 1741
  TradeDate?: Date// 75
  ClearingBusinessDate?: Date// 715
  AvgPx?: number// 6
  AvgPxGroupID?: string// 1731
  AvgPxIndicator?: number// 819
  ValuationDate?: Date// 2085
  ValuationTime?: string// 2086
  ValuationBusinessCenter?: string// 2087
  MultiLegReportingType?: string// 442
  TradeLegRefID?: string// 824
  TransactTime?: Date// 60
  SettlType?: string// 63
  SettlDate?: Date// 64
  UnderlyingSettlementDate?: Date// 987
  MatchStatus?: string// 573
  ExecMethod?: number// 2405
  MatchType?: string// 574
  Volatility?: number// 1188
  TimeToExpiration?: number// 1189
  DividendYield?: number// 1380
  RiskFreeRate?: number// 1190
  PriceDelta?: number// 811
  CurrencyRatio?: number// 1382
  CopyMsgIndicator?: boolean// 797
  PublishTrdIndicator?: boolean// 852
  TradePublishIndicator?: number// 1390
  ShortSaleReason?: number// 853
  TierCode?: string// 994
  MessageEventSource?: string// 1011
  LastUpdateTime?: Date// 779
  RndPx?: number// 991
  TZTransactTime?: string// 1132
  ReportedPxDiff?: boolean// 1134
  GrossTradeAmt?: number// 381
  TotalGrossTradeAmt?: number// 2369
  OrdRejReason?: number// 103
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  FeeMultiplier?: number// 1329
  ClearedIndicator?: number// 1832
  ClearingIntention?: number// 1924
  ClearingInstruction?: number// 577
  BackloadedTradeIndicator?: boolean// 1926
  ConfirmationMethod?: number// 1927
  MandatoryClearingIndicator?: boolean// 1928
  MixedSwapIndicator?: boolean// 1929
  MultiAssetSwapIndicator?: boolean// 2527
  InternationalSwapIndicator?: boolean// 2526
  OffMarketPriceIndicator?: boolean// 1930
  VerificationMethod?: number// 1931
  ClearingRequirementException?: number// 1932
  IRSDirection?: string// 1933
  RegulatoryReportType?: number// 1934
  VoluntaryRegulatoryReport?: boolean// 1935
  TradeCollateralization?: number// 1936
  TradeContinuation?: number// 1937
  TradeContingency?: number// 2387
  TradeVersion?: string// 2302
  HistoricalReportIndicator?: boolean// 2303
  DeltaCrossed?: boolean// 2596
  TradeContinuationText?: string// 2374
  EncodedTradeContinuationTextLen?: number// 2372
  EncodedTradeContinuationText?: Buffer// 2371
  IntraFirmTradeIndicator?: boolean// 2373
  AffiliatedFirmsTradeIndicator?: boolean// 2525
  RiskLimitCheckStatus?: number// 2343
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
