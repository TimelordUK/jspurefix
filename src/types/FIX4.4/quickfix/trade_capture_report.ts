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

export interface ITradeCaptureReport {
  TradeReportID: string// 571
  TradeReportTransType?: number// 487
  TradeReportType?: number// 856
  TradeRequestID?: string// 568
  TrdType?: number// 828
  TrdSubType?: number// 829
  SecondaryTrdType?: number// 855
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
  OrdStatus?: string// 39
  SecondaryExecID?: string// 527
  ExecRestatementReason?: number// 378
  PreviouslyReported: boolean// 570
  PriceType?: number// 423
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  OrderQtyData?: IOrderQtyData
  QtyType?: number// 854
  YieldData?: IYieldData
  UndInstrmtGrp?: IUndInstrmtGrp
  UnderlyingTradingSessionID?: string// 822
  UnderlyingTradingSessionSubID?: string// 823
  LastQty: number// 32
  LastPx: number// 31
  LastParPx?: number// 669
  LastSpotRate?: number// 194
  LastForwardPoints?: number// 195
  LastMkt?: string// 30
  TradeDate: Date// 75
  ClearingBusinessDate?: Date// 715
  AvgPx?: number// 6
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  AvgPxIndicator?: number// 819
  PositionAmountData?: IPositionAmountData
  MultiLegReportingType?: string// 442
  TradeLegRefID?: string// 824
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp
  TransactTime: Date// 60
  TrdRegTimestamps?: ITrdRegTimestamps
  SettlType?: string// 63
  SettlDate?: Date// 64
  MatchStatus?: string// 573
  MatchType?: string// 574
  TrdCapRptSideGrp?: ITrdCapRptSideGrp
  CopyMsgIndicator?: boolean// 797
  PublishTrdIndicator?: boolean// 852
  ShortSaleReason?: number// 853
}
