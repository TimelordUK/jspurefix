import { IStandardHeader } from './set/standard_header'
import { ISideCrossOrdModGrp } from './set/side_cross_ord_mod_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IStipulations } from './set/stipulations'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICrossOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  CrossID: string// [3] 548 (String)
  OrigCrossID: string// [4] 551 (String)
  CrossType: number// [5] 549 (Int)
  CrossPrioritization: number// [6] 550 (Int)
  SideCrossOrdModGrp?: ISideCrossOrdModGrp// [7] NoSides.552, Side.54 .. SideComplianceID.659
  Instrument?: IInstrument// [8] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp?: IUndInstrmtGrp// [9] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp// [10] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  SettlType?: string// [11] 63 (String)
  SettlDate?: Date// [12] 64 (LocalDate)
  HandlInst?: string// [13] 21 (String)
  ExecInst?: string// [14] 18 (String)
  MinQty?: number// [15] 110 (Float)
  MaxFloor?: number// [16] 111 (Float)
  ExDestination?: string// [17] 100 (String)
  TrdgSesGrp?: ITrdgSesGrp// [18] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [19] 81 (String)
  PrevClosePx?: number// [20] 140 (Float)
  LocateReqd?: boolean// [21] 114 (Boolean)
  TransactTime: Date// [22] 60 (UtcTimestamp)
  Stipulations?: IStipulations// [23] NoStipulations.232, StipulationType.233, StipulationValue.234
  OrdType: string// [24] 40 (String)
  PriceType?: number// [25] 423 (Int)
  Price?: number// [26] 44 (Float)
  StopPx?: number// [27] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [28] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [29] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [30] 15 (String)
  ComplianceID?: string// [31] 376 (String)
  IOIID?: string// [32] 23 (String)
  QuoteID?: string// [33] 117 (String)
  TimeInForce?: string// [34] 59 (String)
  EffectiveTime?: Date// [35] 168 (UtcTimestamp)
  ExpireDate?: Date// [36] 432 (LocalDate)
  ExpireTime?: Date// [37] 126 (UtcTimestamp)
  GTBookingInst?: number// [38] 427 (Int)
  MaxShow?: number// [39] 210 (Float)
  PegInstructions?: IPegInstructions// [40] PegOffsetValue.211, PegMoveType.835 .. PegScope.840
  DiscretionInstructions?: IDiscretionInstructions// [41] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [42] 847 (Int)
  TargetStrategyParameters?: string// [43] 848 (String)
  ParticipationRate?: number// [44] 849 (Float)
  CancellationRights?: string// [45] 480 (String)
  MoneyLaunderingStatus?: string// [46] 481 (String)
  RegistID?: string// [47] 513 (String)
  Designation?: string// [48] 494 (String)
  StandardTrailer: IStandardTrailer// [49] SignatureLength.93, Signature.89, CheckSum.10
}
