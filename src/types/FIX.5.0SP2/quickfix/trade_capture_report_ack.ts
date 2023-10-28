import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IPriceQualifierGrp } from './set/price_qualifier_grp'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IAveragePriceDetail } from './set/average_price_detail'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdRepIndicatorsGrp } from './set/trd_rep_indicators_grp'
import { ITrdInstrmtLegGrp } from './set/trd_instrmt_leg_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IPositionAmountData } from './set/position_amount_data'
import { ITradeQtyGrp } from './set/trade_qty_grp'
import { ITrdCapRptAckSideGrp } from './set/trd_cap_rpt_ack_side_grp'
import { IStandardTrailer } from './set/standard_trailer'

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
  OffsetInstruction?: number// [12] 1849 (Int)
  TradeHandlingInstr?: string// [13] 1123 (String)
  OrigTradeHandlingInstr?: string// [14] 1124 (String)
  OrigTradeDate?: Date// [15] 1125 (LocalDate)
  OrigTradeID?: string// [16] 1126 (String)
  OrigSecondaryTradeID?: string// [17] 1127 (String)
  TransferReason?: string// [18] 830 (String)
  RootParties?: IRootParties// [19] NoRootPartyIDs.1116, RootPartyID.1117 .. RootPartySubIDType.1122
  ExecType?: string// [20] 150 (String)
  TradeReportRefID?: string// [21] 572 (String)
  SecondaryTradeReportRefID?: string// [22] 881 (String)
  TrdRptStatus?: number// [23] 939 (Int)
  TrdAckStatus?: number// [24] 1523 (Int)
  TradeReportRejectReason?: number// [25] 751 (Int)
  RejectText?: string// [26] 1328 (String)
  EncodedRejectTextLen?: number// [27] 1664 (Length)
  EncodedRejectText?: Buffer// [28] 1665 (RawData)
  SecondaryTradeReportID?: string// [29] 818 (String)
  SubscriptionRequestType?: string// [30] 263 (String)
  TradeLinkID?: string// [31] 820 (String)
  TrdMatchID?: string// [32] 880 (String)
  ExecID?: string// [33] 17 (String)
  SecondaryExecID?: string// [34] 527 (String)
  ExecRestatementReason?: number// [35] 378 (Int)
  PreviouslyReported?: boolean// [36] 570 (Boolean)
  PriceType?: number// [37] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [38] NoPriceQualifiers.2709, PriceQualifier.2710
  CrossType?: number// [39] 549 (Int)
  UnderlyingTradingSessionID?: string// [40] 822 (String)
  UnderlyingTradingSessionSubID?: string// [41] 823 (String)
  SettlSessID?: string// [42] 716 (String)
  SettlSessSubID?: string// [43] 717 (String)
  QtyType?: number// [44] 854 (Int)
  LastQty?: number// [45] 32 (Float)
  LastPx?: number// [46] 31 (Float)
  VenueType?: string// [47] 1430 (String)
  MarketSegmentID?: string// [48] 1300 (String)
  MarketID?: string// [49] 1301 (String)
  Instrument?: IInstrument// [50] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [51] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [52] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  LastParPx?: number// [53] 669 (Float)
  CalculatedCcyLastQty?: number// [54] 1056 (Float)
  LastSwapPoints?: number// [55] 1071 (Float)
  PriceMarkup?: number// [56] 2762 (Float)
  AveragePriceDetail?: IAveragePriceDetail// [57] AveragePriceType.2763, AveragePriceStartTime.2764, AveragePriceEndTime.2765
  Currency?: string// [58] 15 (String)
  CurrencyCodeSource?: string// [59] 2897 (String)
  SettlCurrency?: string// [60] 120 (String)
  SettlCurrencyCodeSource?: string// [61] 2899 (String)
  LastSpotRate?: number// [62] 194 (Float)
  LastForwardPoints?: number// [63] 195 (Float)
  LastMkt?: string// [64] 30 (String)
  TradeDate?: Date// [65] 75 (LocalDate)
  ClearingBusinessDate?: Date// [66] 715 (LocalDate)
  AvgPx?: number// [67] 6 (Float)
  AvgPxGroupID?: string// [68] 1731 (String)
  AvgPxIndicator?: number// [69] 819 (Int)
  MultiLegReportingType?: string// [70] 442 (String)
  TradeLegRefID?: string// [71] 824 (String)
  TransactTime?: Date// [72] 60 (UtcTimestamp)
  SettlType?: string// [73] 63 (String)
  UndInstrmtGrp?: IUndInstrmtGrp// [74] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  MatchStatus?: string// [75] 573 (String)
  MatchType?: string// [76] 574 (String)
  CopyMsgIndicator?: boolean// [77] 797 (Boolean)
  TrdRepIndicatorsGrp?: ITrdRepIndicatorsGrp// [78] NoTrdRepIndicators.1387, TrdRepPartyRole.1388, TrdRepIndicator.1389
  PublishTrdIndicator?: boolean// [79] 852 (Boolean)
  TradePublishIndicator?: number// [80] 1390 (Int)
  ShortSaleReason?: number// [81] 853 (Int)
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp// [82] NoLegs.555, LegSymbol.600 .. LegDifferentialPrice.2492
  TrdRegTimestamps?: ITrdRegTimestamps// [83] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  ResponseTransportType?: number// [84] 725 (Int)
  ResponseDestination?: string// [85] 726 (String)
  Text?: string// [86] 58 (String)
  EncodedTextLen?: number// [87] 354 (Length)
  EncodedText?: Buffer// [88] 355 (RawData)
  AsOfIndicator?: string// [89] 1015 (String)
  ClearingFeeIndicator?: string// [90] 635 (String)
  PositionAmountData?: IPositionAmountData// [91] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  TierCode?: string// [92] 994 (String)
  MessageEventSource?: string// [93] 1011 (String)
  LastUpdateTime?: Date// [94] 779 (UtcTimestamp)
  RndPx?: number// [95] 991 (Float)
  TradeQtyGrp?: ITradeQtyGrp// [96] NoTradeQtys.1841, TradeQtyType.1842, TradeQty.1843
  TrdCapRptAckSideGrp?: ITrdCapRptAckSideGrp// [97] NoSides.552, Side.54 .. SideRiskLimitCheckStatus.2344
  RptSys?: string// [98] 1135 (String)
  GrossTradeAmt?: number// [99] 381 (Float)
  SettlDate?: Date// [100] 64 (LocalDate)
  FeeMultiplier?: number// [101] 1329 (Float)
  RiskLimitCheckStatus?: number// [102] 2343 (Int)
  StandardTrailer: IStandardTrailer// [103] SignatureLength.93, Signature.89, CheckSum.10
}
