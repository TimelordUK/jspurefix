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

/*
**************************************************************
* CrossOrderCancelReplaceRequest can be found in Volume 4 of *
* the                                                        *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface ICrossOrderCancelReplaceRequest {
  NotAffectedOrderID?: string// 1371
  OrderRequestID?: number// 2422
  CrossID: string// 548
  OrigCrossID: string// 551
  HostCrossID?: string// 961
  CrossType: number// 549
  CrossPrioritization: number// 550
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  AllocHandlInst?: number// 209
  ExecInst?: string// 18
  MinQty?: number// 110
  MinQtyMethod?: number// 1822
  MatchIncrement?: number// 1089
  MaxPriceLevels?: number// 1090
  MaxFloor?: number// 111
  SideCollateralAmountMarketSegmentID?: string// 2693
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  ProcessCode?: string// 81
  PrevClosePx?: number// 140
  LocateReqd?: string// 114
  RelSymTransactTime: Date// 1504
  TransBkdTime?: Date// 483
  OrdType: string// 40
  UnderlyingReturnRatePriceType?: number// 43068
  UnderlyingReturnRatePrice?: number// 43066
  PriceProtectionScope?: string// 1092
  StopPx?: number// 99
  UnderlyingReturnRatePriceCurrency?: string// 43067
  ComplianceID?: string// 376
  IOIID?: string// 23
  QuoteID?: string// 117
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  GTBookingInst?: number// 427
  ExposureDuration?: number// 1629
  ExposureDurationUnit?: number// 1916
  TradingCapacity?: number// 1815
  MaxShow?: number// 210
  TargetStrategy?: number// 847
  TargetStrategyParameters?: string// 848
  ParticipationRate?: number// 849
  CancellationRights?: string// 480
  MoneyLaunderingStatus?: string// 481
  RegistID?: string// 513
  Designation?: string// 494
  ThrottleInst?: number// 1685
  StandardHeader?: IStandardHeader
  RootParties?: IRootParties[]
  SideCrossOrdModGrp?: ISideCrossOrdModGrp[]
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  DisplayInstruction?: IDisplayInstruction
  TrdgSesGrp?: ITrdgSesGrp[]
  Stipulations?: IStipulations[]
  TriggeringInstruction?: ITriggeringInstruction
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  PegInstructions?: IPegInstructions
  DiscretionInstructions?: IDiscretionInstructions
  StrategyParametersGrp?: IStrategyParametersGrp[]
}
