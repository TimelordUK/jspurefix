import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IOrderQtyData } from './set/order_qty_data'
import { IYieldData } from './set/yield_data'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IPositionAmountData } from './set/position_amount_data'
import { ITrdInstrmtLegGrp } from './set/trd_instrmt_leg_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { ITrdCapRptSideGrp } from './set/trd_cap_rpt_side_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeCaptureReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeReportID: string// [2] 571 (String)
  TradeReportTransType?: number// [3] 487 (Int)
  TradeReportType?: number// [4] 856 (Int)
  TradeRequestID?: string// [5] 568 (String)
  TrdType?: number// [6] 828 (Int)
  TrdSubType?: number// [7] 829 (Int)
  SecondaryTrdType?: number// [8] 855 (Int)
  TransferReason?: string// [9] 830 (String)
  ExecType?: string// [10] 150 (String)
  TotNumTradeReports?: number// [11] 748 (Int)
  LastRptRequested?: boolean// [12] 912 (Boolean)
  UnsolicitedIndicator?: boolean// [13] 325 (Boolean)
  SubscriptionRequestType?: string// [14] 263 (String)
  TradeReportRefID?: string// [15] 572 (String)
  SecondaryTradeReportRefID?: string// [16] 881 (String)
  SecondaryTradeReportID?: string// [17] 818 (String)
  TradeLinkID?: string// [18] 820 (String)
  TrdMatchID?: string// [19] 880 (String)
  ExecID?: string// [20] 17 (String)
  OrdStatus?: string// [21] 39 (String)
  SecondaryExecID?: string// [22] 527 (String)
  ExecRestatementReason?: number// [23] 378 (Int)
  PreviouslyReported: boolean// [24] 570 (Boolean)
  PriceType?: number// [25] 423 (Int)
  Instrument?: IInstrument// [26] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [27] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  OrderQtyData?: IOrderQtyData// [28] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  QtyType?: number// [29] 854 (Int)
  YieldData?: IYieldData// [30] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  UndInstrmtGrp?: IUndInstrmtGrp// [31] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  UnderlyingTradingSessionID?: string// [32] 822 (String)
  UnderlyingTradingSessionSubID?: string// [33] 823 (String)
  LastQty: number// [34] 32 (Float)
  LastPx: number// [35] 31 (Float)
  LastParPx?: number// [36] 669 (Float)
  LastSpotRate?: number// [37] 194 (Float)
  LastForwardPoints?: number// [38] 195 (Float)
  LastMkt?: string// [39] 30 (String)
  TradeDate: Date// [40] 75 (LocalDate)
  ClearingBusinessDate?: Date// [41] 715 (LocalDate)
  AvgPx?: number// [42] 6 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [43] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  AvgPxIndicator?: number// [44] 819 (Int)
  PositionAmountData?: IPositionAmountData// [45] NoPosAmt.753, PosAmtType.707, PosAmt.708
  MultiLegReportingType?: string// [46] 442 (String)
  TradeLegRefID?: string// [47] 824 (String)
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp// [48] NoLegs.555, LegSymbol.600 .. LegLastPx.637
  TransactTime: Date// [49] 60 (UtcTimestamp)
  TrdRegTimestamps?: ITrdRegTimestamps// [50] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. TrdRegTimestampOrigin.771
  SettlType?: string// [51] 63 (String)
  SettlDate?: Date// [52] 64 (LocalDate)
  MatchStatus?: string// [53] 573 (String)
  MatchType?: string// [54] 574 (String)
  TrdCapRptSideGrp?: ITrdCapRptSideGrp// [55] NoSides.552, Side.54 .. AllocQty.80
  CopyMsgIndicator?: boolean// [56] 797 (Boolean)
  PublishTrdIndicator?: boolean// [57] 852 (Boolean)
  ShortSaleReason?: number// [58] 853 (Int)
  StandardTrailer: IStandardTrailer// [59] SignatureLength.93, Signature.89, CheckSum.10
}
