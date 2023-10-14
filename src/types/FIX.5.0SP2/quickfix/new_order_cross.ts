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

/*
****************************************************************
* Used to submit a cross order into a market. The cross order  *
* contains two order sides (a buy and a sell). The cross order *
* is identified by its CrossID.                                *
****************************************************************
*/
export interface INewOrderCross {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CrossID: string// [2] 548 (String)
  CrossType: number// [3] 549 (Int)
  CrossPrioritization: number// [4] 550 (Int)
  RootParties?: IRootParties[]// [5] RootPartyID.1117, RootPartyIDSource.1118 .. RootPartySubIDType.1122
  SideCrossOrdModGrp: ISideCrossOrdModGrp[]// [6] Side.54, OrigClOrdID.41 .. SideTimeInForce.962
  Instrument: IInstrument// [7] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [8] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [9] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  SettlType?: string// [10] 63 (String)
  SettlDate?: Date// [11] 64 (LocalDate)
  HandlInst?: string// [12] 21 (String)
  ExecInst?: string// [13] 18 (String)
  MinQty?: number// [14] 110 (Float)
  MatchIncrement?: number// [15] 1089 (Float)
  MaxPriceLevels?: number// [16] 1090 (Int)
  DisplayInstruction?: IDisplayInstruction// [17] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  MaxFloor?: number// [18] 111 (Float)
  ExDestination?: string// [19] 100 (String)
  ExDestinationIDSource?: string// [20] 1133 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [21] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [22] 81 (String)
  PrevClosePx?: number// [23] 140 (Float)
  LocateReqd?: boolean// [24] 114 (Boolean)
  TransactTime: Date// [25] 60 (UtcTimestamp)
  TransBkdTime?: Date// [26] 483 (UtcTimestamp)
  Stipulations?: IStipulations[]// [27] StipulationType.233, StipulationValue.234
  OrdType: string// [28] 40 (String)
  PriceType?: number// [29] 423 (Int)
  Price?: number// [30] 44 (Float)
  PriceProtectionScope?: string// [31] 1092 (String)
  StopPx?: number// [32] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [33] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [34] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [35] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [36] 15 (String)
  ComplianceID?: string// [37] 376 (String)
  IOIID?: string// [38] 23 (String)
  QuoteID?: string// [39] 117 (String)
  TimeInForce?: string// [40] 59 (String)
  EffectiveTime?: Date// [41] 168 (UtcTimestamp)
  ExpireDate?: Date// [42] 432 (LocalDate)
  ExpireTime?: Date// [43] 126 (UtcTimestamp)
  GTBookingInst?: number// [44] 427 (Int)
  MaxShow?: number// [45] 210 (Float)
  PegInstructions?: IPegInstructions// [46] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [47] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [48] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp[]// [49] StrategyParameterName.958, StrategyParameterType.959, StrategyParameterValue.960
  TargetStrategyParameters?: string// [50] 848 (String)
  ParticipationRate?: number// [51] 849 (Float)
  CancellationRights?: string// [52] 480 (String)
  MoneyLaunderingStatus?: string// [53] 481 (String)
  RegistID?: string// [54] 513 (String)
  Designation?: string// [55] 494 (String)
  StandardTrailer: IStandardTrailer// [56] SignatureLength.93, Signature.89, CheckSum.10
}
