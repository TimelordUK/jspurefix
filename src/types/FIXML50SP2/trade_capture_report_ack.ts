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
  TradeReportID?: string// [2] 571 (String)
  TradeID?: string// [2] 1003 (String)
  SecondaryTradeID?: string// [2] 1040 (String)
  FirmTradeID?: string// [2] 1041 (String)
  SecondaryFirmTradeID?: string// [2] 1042 (String)
  TradeReportTransType?: number// [2] 487 (Int)
  TradeReportType?: number// [2] 856 (Int)
  TrdType?: number// [2] 828 (Int)
  TrdSubType?: number// [2] 829 (Int)
  SecondaryTrdType?: number// [2] 855 (Int)
  OffsetInstruction?: number// [2] 1849 (Int)
  TradeHandlingInstr?: string// [2] 1123 (String)
  OrigTradeHandlingInstr?: string// [2] 1124 (String)
  OrigTradeDate?: Date// [2] 1125 (LocalDate)
  OrigTradeID?: string// [2] 1126 (String)
  OrigSecondaryTradeID?: string// [2] 1127 (String)
  TransferReason?: string// [2] 830 (String)
  ExecType?: string// [2] 150 (String)
  TradeReportRefID?: string// [2] 572 (String)
  SecondaryTradeReportRefID?: string// [2] 881 (String)
  TrdRptStatus?: number// [2] 939 (Int)
  TrdAckStatus?: number// [2] 1523 (Int)
  OrdRejReason?: number// [2] 103 (Int)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  SecondaryTradeReportID?: string// [2] 818 (String)
  SubscriptionRequestType?: string// [2] 263 (String)
  TradeLinkID?: string// [2] 820 (String)
  TrdMatchID?: string// [2] 880 (String)
  ExecID?: string// [2] 17 (String)
  SecondaryExecID?: string// [2] 527 (String)
  ExecRestatementReason?: number// [2] 378 (Int)
  PreviouslyReported?: boolean// [2] 570 (Boolean)
  PriceType?: number// [2] 423 (Int)
  CrossType?: number// [2] 549 (Int)
  UnderlyingTradingSessionID?: string// [2] 822 (String)
  UnderlyingTradingSessionSubID?: string// [2] 823 (String)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  QtyType?: number// [2] 854 (Int)
  LastQty?: number// [2] 32 (Float)
  LastPx?: number// [2] 31 (Float)
  VenueType?: string// [2] 1430 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  MarketID?: string// [2] 1301 (String)
  LastParPx?: number// [2] 669 (Float)
  CalculatedCcyLastQty?: number// [2] 1056 (Float)
  LastSwapPoints?: number// [2] 1071 (Float)
  Currency?: string// [2] 15 (String)
  SettlCurrency?: string// [2] 120 (String)
  LastSpotRate?: number// [2] 194 (Float)
  LastForwardPoints?: number// [2] 195 (Float)
  LastMkt?: string// [2] 30 (String)
  TradeDate?: Date// [2] 75 (LocalDate)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  AvgPx?: number// [2] 6 (Float)
  AvgPxGroupID?: string// [2] 1731 (String)
  AvgPxIndicator?: number// [2] 819 (Int)
  MultiLegReportingType?: string// [2] 442 (String)
  TradeLegRefID?: string// [2] 824 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  SettlType?: string// [2] 63 (String)
  MatchStatus?: string// [2] 573 (String)
  MatchType?: string// [2] 574 (String)
  CopyMsgIndicator?: boolean// [2] 797 (Boolean)
  PublishTrdIndicator?: boolean// [2] 852 (Boolean)
  TradePublishIndicator?: number// [2] 1390 (Int)
  ShortSaleReason?: number// [2] 853 (Int)
  ResponseTransportType?: number// [2] 725 (Int)
  ResponseDestination?: string// [2] 726 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  AsOfIndicator?: string// [2] 1015 (String)
  ClearingFeeIndicator?: string// [2] 635 (String)
  TierCode?: string// [2] 994 (String)
  MessageEventSource?: string// [2] 1011 (String)
  LastUpdateTime?: Date// [2] 779 (UtcTimestamp)
  RndPx?: number// [2] 991 (Float)
  RptSys?: string// [2] 1135 (String)
  GrossTradeAmt?: number// [2] 381 (Float)
  SettlDate?: Date// [2] 64 (LocalDate)
  FeeMultiplier?: number// [2] 1329 (Float)
  RiskLimitCheckStatus?: number// [2] 2343 (Int)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RootParties?: IRootParties[]// [2] ID.1117, Src.1118 .. Qual.2388
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [4] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [5] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  TrdRepIndicatorsGrp?: ITrdRepIndicatorsGrp[]// [7] PtyRole.1388, TrdRepInd.1389
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp[]// [8] OrdQty.685, Qty.687 .. DiffPx.2492
  TrdRegTimestamps?: ITrdRegTimestamps[]// [9] TS.769, Typ.770 .. InfoBrrID.1727
  PositionAmountData?: IPositionAmountData[]// [10] Typ.707, Amt.708 .. MktID.2100
  TradeQtyGrp?: ITradeQtyGrp[]// [11] Typ.1842, Qty.1843
  TrdCapRptAckSideGrp?: ITrdCapRptAckSideGrp[]// [12] Side.54, SideExecID.1427 .. RiskLmtChkStat.2344
}
