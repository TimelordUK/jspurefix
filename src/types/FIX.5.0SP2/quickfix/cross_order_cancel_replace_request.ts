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
***************************************************************
* Used to modify a cross order previously submitted using the *
* New Order - Cross message. See Order Cancel Replace Request *
* for details concerning message usage.                       *
***************************************************************
*/
export interface ICrossOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  CrossID: string// [3] 548 (String)
  OrigCrossID: string// [4] 551 (String)
  HostCrossID?: string// [5] 961 (String)
  CrossType: number// [6] 549 (Int)
  CrossPrioritization: number// [7] 550 (Int)
  RootParties?: IRootParties[]// [8] RootPartyID.1117, RootPartyIDSource.1118 .. RootPartySubIDType.1122
  SideCrossOrdModGrp: ISideCrossOrdModGrp[]// [9] Side.54, OrigClOrdID.41 .. SideTimeInForce.962
  Instrument: IInstrument// [10] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [11] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [12] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  SettlType?: string// [13] 63 (String)
  SettlDate?: Date// [14] 64 (LocalDate)
  HandlInst?: string// [15] 21 (String)
  ExecInst?: string// [16] 18 (String)
  MinQty?: number// [17] 110 (Float)
  MatchIncrement?: number// [18] 1089 (Float)
  MaxPriceLevels?: number// [19] 1090 (Int)
  DisplayInstruction?: IDisplayInstruction// [20] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  MaxFloor?: number// [21] 111 (Float)
  ExDestination?: string// [22] 100 (String)
  ExDestinationIDSource?: string// [23] 1133 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [24] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [25] 81 (String)
  PrevClosePx?: number// [26] 140 (Float)
  LocateReqd?: boolean// [27] 114 (Boolean)
  TransactTime: Date// [28] 60 (UtcTimestamp)
  TransBkdTime?: Date// [29] 483 (UtcTimestamp)
  Stipulations?: IStipulations[]// [30] StipulationType.233, StipulationValue.234
  OrdType: string// [31] 40 (String)
  PriceType?: number// [32] 423 (Int)
  Price?: number// [33] 44 (Float)
  PriceProtectionScope?: string// [34] 1092 (String)
  StopPx?: number// [35] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [36] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [37] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [38] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [39] 15 (String)
  ComplianceID?: string// [40] 376 (String)
  IOIID?: string// [41] 23 (String)
  QuoteID?: string// [42] 117 (String)
  TimeInForce?: string// [43] 59 (String)
  EffectiveTime?: Date// [44] 168 (UtcTimestamp)
  ExpireDate?: Date// [45] 432 (LocalDate)
  ExpireTime?: Date// [46] 126 (UtcTimestamp)
  GTBookingInst?: number// [47] 427 (Int)
  MaxShow?: number// [48] 210 (Float)
  PegInstructions?: IPegInstructions// [49] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [50] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [51] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp[]// [52] StrategyParameterName.958, StrategyParameterType.959, StrategyParameterValue.960
  TargetStrategyParameters?: string// [53] 848 (String)
  ParticipationRate?: number// [54] 849 (Float)
  CancellationRights?: string// [55] 480 (String)
  MoneyLaunderingStatus?: string// [56] 481 (String)
  RegistID?: string// [57] 513 (String)
  Designation?: string// [58] 494 (String)
  StandardTrailer: IStandardTrailer// [59] SignatureLength.93, Signature.89, CheckSum.10
}
