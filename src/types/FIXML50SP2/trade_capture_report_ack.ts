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
  MDStatisticRptID?: string// 2453
  LegTradeID?: string// 1894
  SecondaryTradeID?: string// 1
  FirmTradeID?: string// 1041
  SecondaryFirmTradeID?: string// 1042
  TransferTransType?: number// 2439
  TransferReportType?: number// 2444
  TrdType?: number// 828
  SideTrdSubTyp?: number// 1008
  SecondaryTrdType?: number// 855
  OffsetInstruction?: number// 1849
  TradeHandlingInstr?: string// 1123
  OrigTradeHandlingInstr?: string// 1124
  OrigTradeDate?: Date// 1125
  SideOrigTradeID?: string// 1507
  OrigSecondaryTradeID?: string// 1127
  TransferReason?: string// 830
  ExecType?: string// 150
  AllocReportRefID?: string// 795
  SecondaryTradeReportRefID?: string// 881
  TrdRptStatus?: number// 939
  TrdAckStatus?: number// 1523
  CollRptRejectReason?: number// 2487
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  SecondaryTradeReportID?: string// 818
  SubscriptionRequestType?: string// 263
  TradeLinkID?: string// 820
  TradeMatchID?: string// 1
  LegExecID?: string// 1893
  SecondaryExecID?: string// 527
  ExecRestatementReason?: number// 378
  PreviouslyReported?: string// 570
  UnderlyingReturnRatePriceType?: number// 43068
  CrossType?: number// 549
  UnderlyingTradingSessionID?: string// 822
  UnderlyingTradingSessionSubID?: string// 823
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  LegQtyType?: number// 1591
  LegLastQty?: number// 1418
  LegLastPx?: number// 637
  SideVenueType?: string// 1899
  SideCollateralAmountMarketSegmentID?: string// 2693
  SideCollateralAmountMarketID?: string// 2692
  LastParPx?: number// 669
  CalculatedCcyLastQty?: number// 1056
  LastSwapPoints?: string// 1071
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  LastSpotRate?: number// 194
  LastForwardPoints?: string// 195
  LastMkt?: string// 30
  TradeDate?: Date// 75
  ClearingBusinessDate?: Date// 715
  SideAvgPx?: number// 1852
  SideAvgPxGroupID?: string// 1854
  SideAvgPxIndicator?: number// 1853
  SideMultiLegReportingType?: number// 752
  TradeLegRefID?: string// 824
  RelSymTransactTime?: Date// 1504
  InstrumentScopeSettlType?: string// 1557
  MatchStatus?: string// 573
  MatchType?: string// 574
  CopyMsgIndicator?: string// 797
  PublishTrdIndicator?: string// 852
  TradePublishIndicator?: number// 1390
  ShortSaleReason?: number// 853
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  AsOfIndicator?: string// 1015
  AllocClearingFeeIndicator?: string// 1136
  TierCode?: string// 994
  MessageEventSource?: string// 1011
  LastUpdateTime?: Date// 779
  RndPx?: number// 991
  RptSys?: string// 1135
  AllocGrossTradeAmt?: number// 2300
  LegSettlDate?: Date// 588
  FeeMultiplier?: string// 1329
  AllocRiskLimitCheckStatus?: number// 2483
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
