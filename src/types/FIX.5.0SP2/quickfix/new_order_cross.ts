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

export interface INewOrderCross {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CrossID: string// [2] 548 (String)
  OrderRequestID?: number// [3] 2422 (Int)
  CrossType: number// [4] 549 (Int)
  CrossPrioritization: number// [5] 550 (Int)
  RootParties?: IRootParties// [6] NoRootPartyIDs.1116, RootPartyID.1117 .. RootPartySubIDType.1122
  SideCrossOrdModGrp?: ISideCrossOrdModGrp// [7] NoSides.552, Side.54 .. SideTimeInForce.962
  Instrument?: IInstrument// [8] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp// [9] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [10] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  SettlType?: string// [11] 63 (String)
  SettlDate?: Date// [12] 64 (LocalDate)
  HandlInst?: string// [13] 21 (String)
  ExecInst?: string// [14] 18 (String)
  MinQty?: number// [15] 110 (Float)
  MinQtyMethod?: number// [16] 1822 (Int)
  MatchIncrement?: number// [17] 1089 (Float)
  MaxPriceLevels?: number// [18] 1090 (Int)
  DisplayInstruction?: IDisplayInstruction// [19] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  MaxFloor?: number// [20] 111 (Float)
  MarketSegmentID?: string// [21] 1300 (String)
  ExDestination?: string// [22] 100 (String)
  ExDestinationIDSource?: string// [23] 1133 (String)
  TrdgSesGrp?: ITrdgSesGrp// [24] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [25] 81 (String)
  PrevClosePx?: number// [26] 140 (Float)
  LocateReqd?: boolean// [27] 114 (Boolean)
  TransactTime: Date// [28] 60 (UtcTimestamp)
  TransBkdTime?: Date// [29] 483 (UtcTimestamp)
  Stipulations?: IStipulations// [30] NoStipulations.232, StipulationType.233, StipulationValue.234
  OrdType: string// [31] 40 (String)
  PriceType?: number// [32] 423 (Int)
  Price?: number// [33] 44 (Float)
  PriceProtectionScope?: string// [34] 1092 (String)
  StopPx?: number// [35] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [36] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [37] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [38] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [39] 15 (String)
  CurrencyCodeSource?: string// [40] 2897 (String)
  ComplianceID?: string// [41] 376 (String)
  IOIID?: string// [42] 23 (String)
  QuoteID?: string// [43] 117 (String)
  TimeInForce?: string// [44] 59 (String)
  EffectiveTime?: Date// [45] 168 (UtcTimestamp)
  ExpireDate?: Date// [46] 432 (LocalDate)
  ExpireTime?: Date// [47] 126 (UtcTimestamp)
  GTBookingInst?: number// [48] 427 (Int)
  ExposureDuration?: number// [49] 1629 (Int)
  ExposureDurationUnit?: number// [50] 1916 (Int)
  TradingCapacity?: number// [51] 1815 (Int)
  MaxShow?: number// [52] 210 (Float)
  PegInstructions?: IPegInstructions// [53] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [54] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [55] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp// [56] NoStrategyParameters.957, StrategyParameterName.958 .. StrategyParameterValue.960
  TargetStrategyParameters?: string// [57] 848 (String)
  ParticipationRate?: number// [58] 849 (Float)
  CancellationRights?: string// [59] 480 (String)
  MoneyLaunderingStatus?: string// [60] 481 (String)
  RegistID?: string// [61] 513 (String)
  Designation?: string// [62] 494 (String)
  ThrottleInst?: number// [63] 1685 (Int)
  StandardTrailer: IStandardTrailer// [64] SignatureLength.93, Signature.89, CheckSum.10
}
