import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { ISideCrossOrdModGrp } from './set/side_cross_ord_mod_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IDisplayInstruction } from './set/display_instruction'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IStipulations } from './set/stipulations'
import { ITriggeringInstruction } from './set/triggering_instruction'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICrossOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  OrderRequestID?: number// [3] 2422 (Int)
  CrossID: string// [4] 548 (String)
  OrigCrossID: string// [5] 551 (String)
  HostCrossID?: string// [6] 961 (String)
  CrossType: number// [7] 549 (Int)
  CrossPrioritization: number// [8] 550 (Int)
  RootParties?: IRootParties// [9] NoRootPartyIDs.1116, RootPartyID.1117 .. RootPartySubIDType.1122
  SideCrossOrdModGrp?: ISideCrossOrdModGrp// [10] NoSides.552, Side.54 .. SideTimeInForce.962
  Instrument?: IInstrument// [11] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp// [12] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [13] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  SettlType?: string// [14] 63 (String)
  SettlDate?: Date// [15] 64 (LocalDate)
  HandlInst?: string// [16] 21 (String)
  ExecInst?: string// [17] 18 (String)
  MinQty?: number// [18] 110 (Float)
  MinQtyMethod?: number// [19] 1822 (Int)
  MatchIncrement?: number// [20] 1089 (Float)
  MaxPriceLevels?: number// [21] 1090 (Int)
  DisplayInstruction?: IDisplayInstruction// [22] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  MaxFloor?: number// [23] 111 (Float)
  MarketSegmentID?: string// [24] 1300 (String)
  ExDestination?: string// [25] 100 (String)
  ExDestinationIDSource?: string// [26] 1133 (String)
  TrdgSesGrp?: ITrdgSesGrp// [27] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [28] 81 (String)
  PrevClosePx?: number// [29] 140 (Float)
  LocateReqd?: boolean// [30] 114 (Boolean)
  TransactTime: Date// [31] 60 (UtcTimestamp)
  TransBkdTime?: Date// [32] 483 (UtcTimestamp)
  Stipulations?: IStipulations// [33] NoStipulations.232, StipulationType.233, StipulationValue.234
  OrdType: string// [34] 40 (String)
  PriceType?: number// [35] 423 (Int)
  Price?: number// [36] 44 (Float)
  PriceProtectionScope?: string// [37] 1092 (String)
  StopPx?: number// [38] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [39] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [40] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [41] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [42] 15 (String)
  CurrencyCodeSource?: string// [43] 2897 (String)
  ComplianceID?: string// [44] 376 (String)
  IOIID?: string// [45] 23 (String)
  QuoteID?: string// [46] 117 (String)
  TimeInForce?: string// [47] 59 (String)
  EffectiveTime?: Date// [48] 168 (UtcTimestamp)
  ExpireDate?: Date// [49] 432 (LocalDate)
  ExpireTime?: Date// [50] 126 (UtcTimestamp)
  GTBookingInst?: number// [51] 427 (Int)
  ExposureDuration?: number// [52] 1629 (Int)
  ExposureDurationUnit?: number// [53] 1916 (Int)
  TradingCapacity?: number// [54] 1815 (Int)
  MaxShow?: number// [55] 210 (Float)
  PegInstructions?: IPegInstructions// [56] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [57] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [58] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp// [59] NoStrategyParameters.957, StrategyParameterName.958 .. StrategyParameterValue.960
  TargetStrategyParameters?: string// [60] 848 (String)
  ParticipationRate?: number// [61] 849 (Float)
  CancellationRights?: string// [62] 480 (String)
  MoneyLaunderingStatus?: string// [63] 481 (String)
  RegistID?: string// [64] 513 (String)
  Designation?: string// [65] 494 (String)
  ThrottleInst?: number// [66] 1685 (Int)
  StandardTrailer: IStandardTrailer// [67] SignatureLength.93, Signature.89, CheckSum.10
}
