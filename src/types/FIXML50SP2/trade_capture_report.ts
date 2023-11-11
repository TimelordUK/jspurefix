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
  TradeReportID?: string// [2] 571 (String)
  TradeID?: string// [2] 1003 (String)
  SecondaryTradeID?: string// [2] 1040 (String)
  FirmTradeID?: string// [2] 1041 (String)
  SecondaryFirmTradeID?: string// [2] 1042 (String)
  PackageID?: string// [2] 2489 (String)
  TradeNumber?: number// [2] 2490 (Int)
  TradeReportTransType?: number// [2] 487 (Int)
  TradeReportType?: number// [2] 856 (Int)
  TrdRptStatus?: number// [2] 939 (Int)
  TradeRequestID?: string// [2] 568 (String)
  TrdType?: number// [2] 828 (Int)
  TrdSubType?: number// [2] 829 (Int)
  SecondaryTrdType?: number// [2] 855 (Int)
  AlgorithmicTradeIndicator?: number// [2] 2667 (Int)
  OffsetInstruction?: number// [2] 1849 (Int)
  TradeHandlingInstr?: string// [2] 1123 (String)
  OrigTradeHandlingInstr?: string// [2] 1124 (String)
  OrigTradeDate?: Date// [2] 1125 (LocalDate)
  OrigTradeID?: string// [2] 1126 (String)
  OrigSecondaryTradeID?: string// [2] 1127 (String)
  TransferReason?: string// [2] 830 (String)
  ExecType?: string// [2] 150 (String)
  TotNumTradeReports?: number// [2] 748 (Int)
  LastRptRequested?: boolean// [2] 912 (Boolean)
  UnsolicitedIndicator?: boolean// [2] 325 (Boolean)
  SubscriptionRequestType?: string// [2] 263 (String)
  TradeReportRefID?: string// [2] 572 (String)
  SecondaryTradeReportRefID?: string// [2] 881 (String)
  SecondaryTradeReportID?: string// [2] 818 (String)
  TradeLinkID?: string// [2] 820 (String)
  TrdMatchID?: string// [2] 880 (String)
  ExecID?: string// [2] 17 (String)
  SecondaryExecID?: string// [2] 527 (String)
  ExecRestatementReason?: number// [2] 378 (Int)
  RegulatoryTransactionType?: number// [2] 2347 (Int)
  PreviouslyReported?: boolean// [2] 570 (Boolean)
  PriceType?: number// [2] 423 (Int)
  CrossType?: number// [2] 549 (Int)
  AsOfIndicator?: string// [2] 1015 (String)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  VenueType?: string// [2] 1430 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  MarketID?: string// [2] 1301 (String)
  TaxonomyType?: string// [2] 2375 (String)
  QtyType?: number// [2] 854 (Int)
  UnderlyingTradingSessionID?: string// [2] 822 (String)
  UnderlyingTradingSessionSubID?: string// [2] 823 (String)
  LastQty?: number// [2] 32 (Float)
  LastQtyVariance?: number// [2] 1828 (Float)
  LastQtyChanged?: number// [2] 2301 (Float)
  LastMultipliedQty?: number// [2] 2368 (Float)
  TotalTradeQty?: number// [2] 2367 (Float)
  TotalTradeMultipliedQty?: number// [2] 2370 (Float)
  LastPx?: number// [2] 31 (Float)
  MidPx?: number// [2] 631 (Float)
  DifferentialPrice?: number// [2] 1522 (Float)
  CalculatedCcyLastQty?: number// [2] 1056 (Float)
  Currency?: string// [2] 15 (String)
  SettlCurrency?: string// [2] 120 (String)
  SettlPriceFxRateCalc?: string// [2] 2366 (String)
  LastParPx?: number// [2] 669 (Float)
  LastSpotRate?: number// [2] 194 (Float)
  LastForwardPoints?: number// [2] 195 (Float)
  LastSwapPoints?: number// [2] 1071 (Float)
  PricePrecision?: number// [2] 2349 (Int)
  LastMkt?: string// [2] 30 (String)
  ClearingTradePrice?: number// [2] 1596 (Float)
  TradePriceNegotiationMethod?: number// [2] 1740 (Int)
  LastUpfrontPrice?: number// [2] 1743 (Float)
  UpfrontPriceType?: number// [2] 1741 (Int)
  TradeDate?: Date// [2] 75 (LocalDate)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  AvgPx?: number// [2] 6 (Float)
  AvgPxGroupID?: string// [2] 1731 (String)
  AvgPxIndicator?: number// [2] 819 (Int)
  ValuationDate?: Date// [2] 2085 (LocalDate)
  ValuationTime?: string// [2] 2086 (String)
  ValuationBusinessCenter?: string// [2] 2087 (String)
  MultiLegReportingType?: string// [2] 442 (String)
  TradeLegRefID?: string// [2] 824 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  SettlType?: string// [2] 63 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  UnderlyingSettlementDate?: Date// [2] 987 (LocalDate)
  MatchStatus?: string// [2] 573 (String)
  ExecMethod?: number// [2] 2405 (Int)
  MatchType?: string// [2] 574 (String)
  Volatility?: number// [2] 1188 (Float)
  TimeToExpiration?: number// [2] 1189 (Float)
  DividendYield?: number// [2] 1380 (Float)
  RiskFreeRate?: number// [2] 1190 (Float)
  PriceDelta?: number// [2] 811 (Float)
  CurrencyRatio?: number// [2] 1382 (Float)
  CopyMsgIndicator?: boolean// [2] 797 (Boolean)
  PublishTrdIndicator?: boolean// [2] 852 (Boolean)
  TradePublishIndicator?: number// [2] 1390 (Int)
  ShortSaleReason?: number// [2] 853 (Int)
  TierCode?: string// [2] 994 (String)
  MessageEventSource?: string// [2] 1011 (String)
  LastUpdateTime?: Date// [2] 779 (UtcTimestamp)
  RndPx?: number// [2] 991 (Float)
  TZTransactTime?: string// [2] 1132 (String)
  ReportedPxDiff?: boolean// [2] 1134 (Boolean)
  GrossTradeAmt?: number// [2] 381 (Float)
  TotalGrossTradeAmt?: number// [2] 2369 (Float)
  OrdRejReason?: number// [2] 103 (Int)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  FeeMultiplier?: number// [2] 1329 (Float)
  ClearedIndicator?: number// [2] 1832 (Int)
  ClearingIntention?: number// [2] 1924 (Int)
  ClearingInstruction?: number// [2] 577 (Int)
  BackloadedTradeIndicator?: boolean// [2] 1926 (Boolean)
  ConfirmationMethod?: number// [2] 1927 (Int)
  MandatoryClearingIndicator?: boolean// [2] 1928 (Boolean)
  MixedSwapIndicator?: boolean// [2] 1929 (Boolean)
  MultiAssetSwapIndicator?: boolean// [2] 2527 (Boolean)
  InternationalSwapIndicator?: boolean// [2] 2526 (Boolean)
  OffMarketPriceIndicator?: boolean// [2] 1930 (Boolean)
  VerificationMethod?: number// [2] 1931 (Int)
  ClearingRequirementException?: number// [2] 1932 (Int)
  IRSDirection?: string// [2] 1933 (String)
  RegulatoryReportType?: number// [2] 1934 (Int)
  VoluntaryRegulatoryReport?: boolean// [2] 1935 (Boolean)
  TradeCollateralization?: number// [2] 1936 (Int)
  TradeContinuation?: number// [2] 1937 (Int)
  TradeContingency?: number// [2] 2387 (Int)
  TradeVersion?: string// [2] 2302 (String)
  HistoricalReportIndicator?: boolean// [2] 2303 (Boolean)
  DeltaCrossed?: boolean// [2] 2596 (Boolean)
  TradeContinuationText?: string// [2] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [2] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [2] 2371 (RawData)
  IntraFirmTradeIndicator?: boolean// [2] 2373 (Boolean)
  AffiliatedFirmsTradeIndicator?: boolean// [2] 2525 (Boolean)
  RiskLimitCheckStatus?: number// [2] 2343 (Int)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  TradePriceConditionGrp?: ITradePriceConditionGrp[]// [3] TrdPxCond.1839
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]// [4] ID.1903, Src.1905 .. Scope.2397
  RootParties?: IRootParties[]// [5] ID.1117, Src.1118 .. Qual.2388
  Instrument?: IInstrument// [6] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [7] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [8] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  PaymentGrp?: IPaymentGrp[]// [9] Typ.139, SubTyp.40993 .. EncTxt.40985
  YieldData?: IYieldData// [10] Typ.235, Yld.236 .. RedPxTyp.698
  UndInstrmtGrp?: IUndInstrmtGrp[]// [11] Sym.311, Sfx.312 .. XID.2631
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [12] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  CollateralAmountGrp?: ICollateralAmountGrp[]// [13] Amt.1704, Ccy.1705 .. MktPx.2689
  RateSource?: IRateSource[]// [14] RtSrc.1446, RtSrcTyp.1447 .. RefHdng.2412
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [15] Spread.218, Ccy.220 .. SecIDSrc.761
  PositionAmountData?: IPositionAmountData[]// [16] Typ.707, Amt.708 .. MktID.2100
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp[]// [17] OrdQty.685, Qty.687 .. DiffPx.2492
  TrdRegTimestamps?: ITrdRegTimestamps[]// [18] TS.769, Typ.770 .. InfoBrrID.1727
  TradeQtyGrp?: ITradeQtyGrp[]// [19] Typ.1842, Qty.1843
  TrdCapRptSideGrp?: ITrdCapRptSideGrp[]// [20] Side.54, SMEInd.2102 .. CmprsnGrpID.2361
  TrdRepIndicatorsGrp?: ITrdRepIndicatorsGrp[]// [21] PtyRole.1388, TrdRepInd.1389
  TrdRegPublicationGrp?: ITrdRegPublicationGrp[]// [22] Typ.2669, Rsn.2670
  MandatoryClearingJurisdictionGrp?: IMandatoryClearingJurisdictionGrp[]// [23] Jrsdctn.41313
  AttachmentGrp?: IAttachmentGrp[]// [24] Name.2105, MediaTyp.2106 .. EncAttchmnt.2112
}
