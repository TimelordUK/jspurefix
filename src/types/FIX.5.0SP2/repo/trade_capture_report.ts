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
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  TradeReportID?: string// 571
  TradeID?: string// 1003
  SecondaryTradeID?: string// 1040
  FirmTradeID?: string// 1041
  SecondaryFirmTradeID?: string// 1042
  TradeReportTransType?: number// 487
  TradeReportType?: number// 856
  TrdRptStatus?: number// 939
  TradeRequestID?: string// 568
  TrdType?: number// 828
  TrdSubType?: number// 829
  SecondaryTrdType?: number// 855
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
  PreviouslyReported?: boolean// 570
  PriceType?: number// 423
  RootParties?: IRootParties[]
  AsOfIndicator?: string// 1015
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  Instrument: IInstrument
  FinancingDetails?: IFinancingDetails
  QtyType?: number// 854
  YieldData?: IYieldData
  UndInstrmtGrp?: IUndInstrmtGrp
  UnderlyingTradingSessionID?: string// 822
  UnderlyingTradingSessionSubID?: string// 823
  LastQty: number// 32
  LastPx: number// 31
  CalculatedCcyLastQty?: number// 1056
  Currency?: string// 15
  SettlCurrency?: string// 120
  LastParPx?: number// 669
  LastSpotRate?: number// 194
  LastForwardPoints?: number// 195
  LastSwapPoints?: number// 1071
  LastMkt?: string// 30
  TradeDate?: Date// 75
  ClearingBusinessDate?: Date// 715
  AvgPx?: number// 6
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  AvgPxIndicator?: number// 819
  PositionAmountData?: IPositionAmountData[]
  MultiLegReportingType?: string// 442
  TradeLegRefID?: string// 824
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp[]
  TransactTime?: Date// 60
  TrdRegTimestamps?: ITrdRegTimestamps[]
  SettlType?: string// 63
  SettlDate?: Date// 64
  UnderlyingSettlementDate?: Date// 987
  MatchStatus?: string// 573
  MatchType?: string// 574
  TrdCapRptSideGrp: ITrdCapRptSideGrp[]
  Volatility?: number// 1188
  DividendYield?: number// 1380
  RiskFreeRate?: number// 1190
  CurrencyRatio?: number// 1382
  CopyMsgIndicator?: boolean// 797
  TrdRepIndicatorsGrp?: ITrdRepIndicatorsGrp[]
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
  RejectText?: string// 1328
  FeeMultiplier?: number// 1329
  StandardTrailer: IStandardTrailer
  VenueType?: string// 1430
  MarketSegmentID?: string// 1300
  MarketID?: string// 1301
}
