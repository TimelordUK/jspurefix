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
  StandardHeader: IStandardHeader
  OrderID?: string// 37
  CrossID: string// 548
  OrigCrossID: string// 551
  HostCrossID?: string// 961
  CrossType: number// 549
  CrossPrioritization: number// 550
  RootParties?: IRootParties[]
  SideCrossOrdModGrp: ISideCrossOrdModGrp[]
  Instrument: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  SettlType?: string// 63
  SettlDate?: Date// 64
  HandlInst?: string// 21
  ExecInst?: string// 18
  MinQty?: number// 110
  MatchIncrement?: number// 1089
  MaxPriceLevels?: number// 1090
  DisplayInstruction?: IDisplayInstruction
  MaxFloor?: number// 111
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  TrdgSesGrp?: ITrdgSesGrp[]
  ProcessCode?: string// 81
  PrevClosePx?: number// 140
  LocateReqd?: boolean// 114
  TransactTime: Date// 60
  TransBkdTime?: Date// 483
  Stipulations?: IStipulations[]
  OrdType: string// 40
  PriceType?: number// 423
  Price?: number// 44
  PriceProtectionScope?: string// 1092
  StopPx?: number// 99
  TriggeringInstruction?: ITriggeringInstruction
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  Currency?: string// 15
  ComplianceID?: string// 376
  IOIID?: string// 23
  QuoteID?: string// 117
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  GTBookingInst?: number// 427
  MaxShow?: number// 210
  PegInstructions?: IPegInstructions
  DiscretionInstructions?: IDiscretionInstructions
  TargetStrategy?: number// 847
  StrategyParametersGrp?: IStrategyParametersGrp[]
  TargetStrategyParameters?: string// 848
  ParticipationRate?: number// 849
  CancellationRights?: string// 480
  MoneyLaunderingStatus?: string// 481
  RegistID?: string// 513
  Designation?: string// 494
  StandardTrailer: IStandardTrailer
}
