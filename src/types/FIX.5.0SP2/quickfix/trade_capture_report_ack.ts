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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeReportID?: string// [2] 571 (String)
  TradeID?: string// [3] 1003 (String)
  SecondaryTradeID?: string// [4] 1040 (String)
  FirmTradeID?: string// [5] 1041 (String)
  SecondaryFirmTradeID?: string// [6] 1042 (String)
  TradeReportTransType?: number// [7] 487 (Int)
  TradeReportType?: number// [8] 856 (Int)
  TrdType?: number// [9] 828 (Int)
  TrdSubType?: number// [10] 829 (Int)
  SecondaryTrdType?: number// [11] 855 (Int)
  TradeHandlingInstr?: string// [12] 1123 (String)
  OrigTradeHandlingInstr?: string// [13] 1124 (String)
  OrigTradeDate?: Date// [14] 1125 (LocalDate)
  OrigTradeID?: string// [15] 1126 (String)
  OrigSecondaryTradeID?: string// [16] 1127 (String)
  TransferReason?: string// [17] 830 (String)
  RootParties?: IRootParties[]// [18] RootPartyID.1117, RootPartyIDSource.1118 .. RootPartySubIDType.1122
  ExecType?: string// [19] 150 (String)
  TradeReportRefID?: string// [20] 572 (String)
  SecondaryTradeReportRefID?: string// [21] 881 (String)
  TrdRptStatus?: number// [22] 939 (Int)
  TradeReportRejectReason?: number// [23] 751 (Int)
  SecondaryTradeReportID?: string// [24] 818 (String)
  SubscriptionRequestType?: string// [25] 263 (String)
  TradeLinkID?: string// [26] 820 (String)
  TrdMatchID?: string// [27] 880 (String)
  ExecID?: string// [28] 17 (String)
  SecondaryExecID?: string// [29] 527 (String)
  ExecRestatementReason?: number// [30] 378 (Int)
  PreviouslyReported?: boolean// [31] 570 (Boolean)
  PriceType?: number// [32] 423 (Int)
  UnderlyingTradingSessionID?: string// [33] 822 (String)
  UnderlyingTradingSessionSubID?: string// [34] 823 (String)
  SettlSessID?: string// [35] 716 (String)
  SettlSessSubID?: string// [36] 717 (String)
  QtyType?: number// [37] 854 (Int)
  LastQty?: number// [38] 32 (Float)
  LastPx?: number// [39] 31 (Float)
  Instrument: IInstrument// [40] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  LastParPx?: number// [41] 669 (Float)
  CalculatedCcyLastQty?: number// [42] 1056 (Float)
  LastSwapPoints?: number// [43] 1071 (Float)
  Currency?: string// [44] 15 (String)
  SettlCurrency?: string// [45] 120 (String)
  LastSpotRate?: number// [46] 194 (Float)
  LastForwardPoints?: number// [47] 195 (Float)
  LastMkt?: string// [48] 30 (String)
  TradeDate?: Date// [49] 75 (LocalDate)
  ClearingBusinessDate?: Date// [50] 715 (LocalDate)
  AvgPx?: number// [51] 6 (Float)
  AvgPxIndicator?: number// [52] 819 (Int)
  MultiLegReportingType?: string// [53] 442 (String)
  TradeLegRefID?: string// [54] 824 (String)
  TransactTime?: Date// [55] 60 (UtcTimestamp)
  SettlType?: string// [56] 63 (String)
  UndInstrmtGrp?: IUndInstrmtGrp// [57] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  MatchStatus?: string// [58] 573 (String)
  MatchType?: string// [59] 574 (String)
  CopyMsgIndicator?: boolean// [60] 797 (Boolean)
  TrdRepIndicatorsGrp?: ITrdRepIndicatorsGrp[]// [61] TrdRepPartyRole.1388, TrdRepIndicator.1389
  PublishTrdIndicator?: boolean// [62] 852 (Boolean)
  TradePublishIndicator?: number// [63] 1390 (Int)
  ShortSaleReason?: number// [64] 853 (Int)
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp[]// [65] LegSymbol.600, LegSymbolSfx.601 .. UnderlyingLegSecurityDesc.1392
  TrdRegTimestamps?: ITrdRegTimestamps[]// [66] TrdRegTimestamp.769, TrdRegTimestampType.770 .. DeskOrderHandlingInst.1035
  ResponseTransportType?: number// [67] 725 (Int)
  ResponseDestination?: string// [68] 726 (String)
  Text?: string// [69] 58 (String)
  EncodedTextLen?: number// [70] 354 (Int)
  EncodedText?: Buffer// [71] 355 (RawData)
  AsOfIndicator?: string// [72] 1015 (String)
  ClearingFeeIndicator?: string// [73] 635 (String)
  PositionAmountData?: IPositionAmountData[]// [74] PosAmtType.707, PosAmt.708, PositionCurrency.1055
  TierCode?: string// [75] 994 (String)
  MessageEventSource?: string// [76] 1011 (String)
  LastUpdateTime?: Date// [77] 779 (UtcTimestamp)
  RndPx?: number// [78] 991 (Float)
  TrdCapRptAckSideGrp?: ITrdCapRptAckSideGrp[]// [79] Side.54, Parties.453 .. BookingType.775
  RptSys?: string// [80] 1135 (String)
  GrossTradeAmt?: number// [81] 381 (Float)
  SettlDate?: Date// [82] 64 (LocalDate)
  FeeMultiplier?: number// [83] 1329 (Float)
  StandardTrailer: IStandardTrailer// [84] SignatureLength.93, Signature.89, CheckSum.10
  VenueType?: string// [85] 1430 (String)
  MarketSegmentID?: string// [86] 1300 (String)
  MarketID?: string// [87] 1301 (String)
}
