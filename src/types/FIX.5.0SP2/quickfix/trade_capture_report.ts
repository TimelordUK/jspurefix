import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IRootParties } from './set/root_parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IYieldData } from './set/yield_data'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IPositionAmountData } from './set/position_amount_data'
import { ITrdInstrmtLegGrp } from './set/trd_instrmt_leg_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { ITrdCapRptSideGrp } from './set/trd_cap_rpt_side_grp'
import { ITrdRepIndicatorsGrp } from './set/trd_rep_indicators_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* The Trade Capture Report message can be:              *
* " Used to report trades between counterparties.       *
* " Used to report trades to a trade matching system    *
* " Can be sent unsolicited between counterparties.     *
* " Sent as a reply to a Trade Capture Report Request.  *
* " Can be used to report unmatched and matched trades. *
*********************************************************
*/
export interface ITradeCaptureReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  TradeReportID?: string// [3] 571 (String)
  TradeID?: string// [4] 1003 (String)
  SecondaryTradeID?: string// [5] 1040 (String)
  FirmTradeID?: string// [6] 1041 (String)
  SecondaryFirmTradeID?: string// [7] 1042 (String)
  TradeReportTransType?: number// [8] 487 (Int)
  TradeReportType?: number// [9] 856 (Int)
  TrdRptStatus?: number// [10] 939 (Int)
  TradeRequestID?: string// [11] 568 (String)
  TrdType?: number// [12] 828 (Int)
  TrdSubType?: number// [13] 829 (Int)
  SecondaryTrdType?: number// [14] 855 (Int)
  TradeHandlingInstr?: string// [15] 1123 (String)
  OrigTradeHandlingInstr?: string// [16] 1124 (String)
  OrigTradeDate?: Date// [17] 1125 (LocalDate)
  OrigTradeID?: string// [18] 1126 (String)
  OrigSecondaryTradeID?: string// [19] 1127 (String)
  TransferReason?: string// [20] 830 (String)
  ExecType?: string// [21] 150 (String)
  TotNumTradeReports?: number// [22] 748 (Int)
  LastRptRequested?: boolean// [23] 912 (Boolean)
  UnsolicitedIndicator?: boolean// [24] 325 (Boolean)
  SubscriptionRequestType?: string// [25] 263 (String)
  TradeReportRefID?: string// [26] 572 (String)
  SecondaryTradeReportRefID?: string// [27] 881 (String)
  SecondaryTradeReportID?: string// [28] 818 (String)
  TradeLinkID?: string// [29] 820 (String)
  TrdMatchID?: string// [30] 880 (String)
  ExecID?: string// [31] 17 (String)
  SecondaryExecID?: string// [32] 527 (String)
  ExecRestatementReason?: number// [33] 378 (Int)
  PreviouslyReported?: boolean// [34] 570 (Boolean)
  PriceType?: number// [35] 423 (Int)
  RootParties?: IRootParties[]// [36] RootPartyID.1117, RootPartyIDSource.1118 .. RootPartySubIDType.1122
  AsOfIndicator?: string// [37] 1015 (String)
  SettlSessID?: string// [38] 716 (String)
  SettlSessSubID?: string// [39] 717 (String)
  Instrument: IInstrument// [40] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [41] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  QtyType?: number// [42] 854 (Int)
  YieldData?: IYieldData// [43] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  UndInstrmtGrp?: IUndInstrmtGrp// [44] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  UnderlyingTradingSessionID?: string// [45] 822 (String)
  UnderlyingTradingSessionSubID?: string// [46] 823 (String)
  LastQty: number// [47] 32 (Float)
  LastPx: number// [48] 31 (Float)
  CalculatedCcyLastQty?: number// [49] 1056 (Float)
  Currency?: string// [50] 15 (String)
  SettlCurrency?: string// [51] 120 (String)
  LastParPx?: number// [52] 669 (Float)
  LastSpotRate?: number// [53] 194 (Float)
  LastForwardPoints?: number// [54] 195 (Float)
  LastSwapPoints?: number// [55] 1071 (Float)
  LastMkt?: string// [56] 30 (String)
  TradeDate?: Date// [57] 75 (LocalDate)
  ClearingBusinessDate?: Date// [58] 715 (LocalDate)
  AvgPx?: number// [59] 6 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [60] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  AvgPxIndicator?: number// [61] 819 (Int)
  PositionAmountData?: IPositionAmountData[]// [62] PosAmtType.707, PosAmt.708, PositionCurrency.1055
  MultiLegReportingType?: string// [63] 442 (String)
  TradeLegRefID?: string// [64] 824 (String)
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp[]// [65] LegSymbol.600, LegSymbolSfx.601 .. UnderlyingLegSecurityDesc.1392
  TransactTime?: Date// [66] 60 (UtcTimestamp)
  TrdRegTimestamps?: ITrdRegTimestamps[]// [67] TrdRegTimestamp.769, TrdRegTimestampType.770 .. DeskOrderHandlingInst.1035
  SettlType?: string// [68] 63 (String)
  SettlDate?: Date// [69] 64 (LocalDate)
  UnderlyingSettlementDate?: Date// [70] 987 (LocalDate)
  MatchStatus?: string// [71] 573 (String)
  MatchType?: string// [72] 574 (String)
  TrdCapRptSideGrp: ITrdCapRptSideGrp[]// [73] Side.54, SideLastQty.1009 .. SideLiquidityInd.1444
  Volatility?: number// [74] 1188 (Float)
  DividendYield?: number// [75] 1380 (Float)
  RiskFreeRate?: number// [76] 1190 (Float)
  CurrencyRatio?: number// [77] 1382 (Float)
  CopyMsgIndicator?: boolean// [78] 797 (Boolean)
  TrdRepIndicatorsGrp?: ITrdRepIndicatorsGrp[]// [79] TrdRepPartyRole.1388, TrdRepIndicator.1389
  PublishTrdIndicator?: boolean// [80] 852 (Boolean)
  TradePublishIndicator?: number// [81] 1390 (Int)
  ShortSaleReason?: number// [82] 853 (Int)
  TierCode?: string// [83] 994 (String)
  MessageEventSource?: string// [84] 1011 (String)
  LastUpdateTime?: Date// [85] 779 (UtcTimestamp)
  RndPx?: number// [86] 991 (Float)
  TZTransactTime?: string// [87] 1132 (String)
  ReportedPxDiff?: boolean// [88] 1134 (Boolean)
  GrossTradeAmt?: number// [89] 381 (Float)
  RejectText?: string// [90] 1328 (String)
  FeeMultiplier?: number// [91] 1329 (Float)
  StandardTrailer: IStandardTrailer// [92] SignatureLength.93, Signature.89, CheckSum.10
  VenueType?: string// [93] 1430 (String)
  MarketSegmentID?: string// [94] 1300 (String)
  MarketID?: string// [95] 1301 (String)
}
