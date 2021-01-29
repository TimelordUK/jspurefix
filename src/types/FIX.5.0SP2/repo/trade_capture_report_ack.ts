import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdRepIndicatorsGrp } from './set/trd_rep_indicators_grp'
import { ITrdInstrmtLegGrp } from './set/trd_instrmt_leg_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IPositionAmountData } from './set/position_amount_data'
import { ITrdCapRptAckSideGrp } from './set/trd_cap_rpt_ack_side_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Trade Capture Report Ack message can be:                *
* " Used to acknowledge trade capture reports received from a *
* counterparty                                                *
* " Used to reject a trade capture report received from a     *
* counterparty                                                *
***************************************************************
*/
export interface ITradeCaptureReportAck {
  StandardHeader: IStandardHeader
  TradeReportID?: string// 571
  TradeID?: string// 1003
  SecondaryTradeID?: string// 1040
  FirmTradeID?: string// 1041
  SecondaryFirmTradeID?: string// 1042
  TradeReportTransType?: number// 487
  TradeReportType?: number// 856
  TrdType?: number// 828
  TrdSubType?: number// 829
  SecondaryTrdType?: number// 855
  TradeHandlingInstr?: string// 1123
  OrigTradeHandlingInstr?: string// 1124
  OrigTradeDate?: Date// 1125
  OrigTradeID?: string// 1126
  OrigSecondaryTradeID?: string// 1127
  TransferReason?: string// 830
  RootParties?: IRootParties[]
  ExecType?: string// 150
  TradeReportRefID?: string// 572
  SecondaryTradeReportRefID?: string// 881
  TrdRptStatus?: number// 939
  TradeReportRejectReason?: number// 751
  SecondaryTradeReportID?: string// 818
  SubscriptionRequestType?: string// 263
  TradeLinkID?: string// 820
  TrdMatchID?: string// 880
  ExecID?: string// 17
  SecondaryExecID?: string// 527
  ExecRestatementReason?: number// 378
  PreviouslyReported?: boolean// 570
  PriceType?: number// 423
  UnderlyingTradingSessionID?: string// 822
  UnderlyingTradingSessionSubID?: string// 823
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  QtyType?: number// 854
  LastQty?: number// 32
  LastPx?: number// 31
  Instrument: IInstrument
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
  AvgPxIndicator?: number// 819
  MultiLegReportingType?: string// 442
  TradeLegRefID?: string// 824
  TransactTime?: Date// 60
  SettlType?: string// 63
  UndInstrmtGrp?: IUndInstrmtGrp
  MatchStatus?: string// 573
  MatchType?: string// 574
  CopyMsgIndicator?: boolean// 797
  TrdRepIndicatorsGrp?: ITrdRepIndicatorsGrp[]
  PublishTrdIndicator?: boolean// 852
  TradePublishIndicator?: number// 1390
  ShortSaleReason?: number// 853
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp[]
  TrdRegTimestamps?: ITrdRegTimestamps[]
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  AsOfIndicator?: string// 1015
  ClearingFeeIndicator?: string// 635
  PositionAmountData?: IPositionAmountData[]
  TierCode?: string// 994
  MessageEventSource?: string// 1011
  LastUpdateTime?: Date// 779
  RndPx?: number// 991
  TrdCapRptAckSideGrp?: ITrdCapRptAckSideGrp[]
  RptSys?: string// 1135
  GrossTradeAmt?: number// 381
  SettlDate?: Date// 64
  FeeMultiplier?: number// 1329
  StandardTrailer: IStandardTrailer
  VenueType?: string// 1430
  MarketSegmentID?: string// 1300
  MarketID?: string// 1301
}
