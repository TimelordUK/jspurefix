import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdRepIndicatorsGrp } from './set/trd_rep_indicators_grp'
import { ITrdInstrmtLegGrp } from './set/trd_instrmt_leg_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IPositionAmountData } from './set/position_amount_data'
import { ITradeQtyGrp } from './set/trade_qty_grp'
import { ITrdCapRptAckSideGrp } from './set/trd_cap_rpt_ack_side_grp'

/*
*********************************************************
* TradeCaptureReportAck can be found in Volume 5 of the *
*                                                       *
* specification                                         *
*********************************************************
*/
export interface ITradeCaptureReportAck {
  TradeReportID?: string// 571
  TradeID?: string// 1003
  SecondaryTradeID?: string// 1
  FirmTradeID?: string// 1041
  SecondaryFirmTradeID?: string// 1042
  TradeReportTransType?: number// 487
  TradeReportType?: number// 856
  TrdType?: number// 828
  SideTrdSubTyp?: number// 1008
  SecondaryTrdType?: number// 855
  OffsetInstruction?: number// 1849
  TradeHandlingInstr?: string// 1123
  OrigTradeHandlingInstr?: string// 1124
  OrigTradeDate?: Date// 1125
  OrigTradeID?: string// 1126
  OrigSecondaryTradeID?: string// 1127
  TransferReason?: string// 830
  ExecType?: string// 150
  TradeReportRefID?: string// 572
  SecondaryTradeReportRefID?: string// 881
  TrdRptStatus?: number// 939
  TrdAckStatus?: number// 1523
  CollRptRejectReason?: number// 2487
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  SecondaryTradeReportID?: string// 818
  SubscriptionRequestType?: string// 263
  TradeLinkID?: string// 820
  TrdMatchID?: string// 880
  ExecID?: string// 17
  SecondaryExecID?: string// 527
  ExecRestatementReason?: number// 378
  PreviouslyReported?: boolean// 570
  PriceType?: number// 423
  CrossType?: number// 549
  UnderlyingTradingSessionID?: string// 822
  UnderlyingTradingSessionSubID?: string// 823
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  QtyType?: number// 854
  LastQty?: number// 32
  LastPx?: number// 31
  VenueType?: string// 1430
  MarketSegmentID?: string// 1300
  MarketID?: string// 1301
  LastParPx?: number// 669
  CalculatedCcyLastQty?: number// 1056
  LastSwapPoints?: number// 1071
  Currency?: string// 15
  SettlCurrency?: string// 120
  LastSpotRate?: number// 194
  LastForwardPoints?: number// 195
  LastMkt?: string// 30
  TradeDate?: Date// 75
  ClearingBusinessDate?: Date// 715
  AvgPx?: number// 6
  AvgPxGroupID?: string// 1731
  AvgPxIndicator?: number// 819
  MultiLegReportingType?: string// 442
  TradeLegRefID?: string// 824
  TransactTime?: Date// 60
  InstrumentScopeSettlType?: string// 1557
  MatchStatus?: string// 573
  MatchType?: string// 574
  CopyMsgIndicator?: boolean// 797
  PublishTrdIndicator?: boolean// 852
  TradePublishIndicator?: number// 1390
  ShortSaleReason?: number// 853
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  AsOfIndicator?: string// 1015
  ClearingFeeIndicator?: string// 635
  TierCode?: string// 994
  MessageEventSource?: string// 1011
  LastUpdateTime?: Date// 779
  RndPx?: number// 991
  RptSys?: string// 1135
  GrossTradeAmt?: number// 381
  SettlDate?: Date// 64
  FeeMultiplier?: number// 1329
  RiskLimitCheckStatus?: number// 2343
  StandardHeader?: IStandardHeader
  RootParties?: IRootParties[]
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  TrdRepIndicatorsGrp?: ITrdRepIndicatorsGrp[]
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp[]
  TrdRegTimestamps?: ITrdRegTimestamps[]
  PositionAmountData?: IPositionAmountData[]
  TradeQtyGrp?: ITradeQtyGrp[]
  TrdCapRptAckSideGrp?: ITrdCapRptAckSideGrp[]
}
