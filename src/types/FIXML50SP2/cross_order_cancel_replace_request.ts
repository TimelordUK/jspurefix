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
  OrderID?: string// [2] 37 (String)
  OrderRequestID?: number// [2] 2422 (Int)
  CrossID: string// [2] 548 (String)
  OrigCrossID: string// [2] 551 (String)
  HostCrossID?: string// [2] 961 (String)
  CrossType: number// [2] 549 (Int)
  CrossPrioritization: number// [2] 550 (Int)
  SettlType?: string// [2] 63 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  HandlInst?: string// [2] 21 (String)
  ExecInst?: string// [2] 18 (String)
  MinQty?: number// [2] 110 (Float)
  MinQtyMethod?: number// [2] 1822 (Int)
  MatchIncrement?: number// [2] 1089 (Float)
  MaxPriceLevels?: number// [2] 1090 (Int)
  MaxFloor?: number// [2] 111 (Float)
  MarketSegmentID?: string// [2] 1300 (String)
  ExDestination?: string// [2] 100 (String)
  ExDestinationIDSource?: string// [2] 1133 (String)
  ProcessCode?: string// [2] 81 (String)
  PrevClosePx?: number// [2] 140 (Float)
  LocateReqd?: boolean// [2] 114 (Boolean)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  TransBkdTime?: Date// [2] 483 (UtcTimestamp)
  OrdType: string// [2] 40 (String)
  PriceType?: number// [2] 423 (Int)
  Price?: number// [2] 44 (Float)
  PriceProtectionScope?: string// [2] 1092 (String)
  StopPx?: number// [2] 99 (Float)
  Currency?: string// [2] 15 (String)
  ComplianceID?: string// [2] 376 (String)
  IOIID?: string// [2] 23 (String)
  QuoteID?: string// [2] 117 (String)
  TimeInForce?: string// [2] 59 (String)
  EffectiveTime?: Date// [2] 168 (UtcTimestamp)
  ExpireDate?: Date// [2] 432 (LocalDate)
  ExpireTime?: Date// [2] 126 (UtcTimestamp)
  GTBookingInst?: number// [2] 427 (Int)
  ExposureDuration?: number// [2] 1629 (Int)
  ExposureDurationUnit?: number// [2] 1916 (Int)
  TradingCapacity?: number// [2] 1815 (Int)
  MaxShow?: number// [2] 210 (Float)
  TargetStrategy?: number// [2] 847 (Int)
  TargetStrategyParameters?: string// [2] 848 (String)
  ParticipationRate?: number// [2] 849 (Float)
  CancellationRights?: string// [2] 480 (String)
  MoneyLaunderingStatus?: string// [2] 481 (String)
  RegistID?: string// [2] 513 (String)
  Designation?: string// [2] 494 (String)
  ThrottleInst?: number// [2] 1685 (Int)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RootParties?: IRootParties[]// [2] ID.1117, Src.1118 .. Qual.2388
  SideCrossOrdModGrp?: ISideCrossOrdModGrp[]// [3] Side.54, SMEInd.2102 .. SideTmFrc.962
  Instrument?: IInstrument// [4] Sym.55, Sfx.65 .. ExchLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp[]// [5] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [6] Sym.600, Sfx.601 .. ExchLookAlike.2607
  DisplayInstruction?: IDisplayInstruction// [7] DisplayQty.1138, SecDspQty.1082 .. RfrshQty.1088
  TrdgSesGrp?: ITrdgSesGrp[]// [8] SesID.336, SesSub.625
  Stipulations?: IStipulations[]// [9] Typ.233, Val.234
  TriggeringInstruction?: ITriggeringInstruction// [10] TrgrTyp.1100, TrgrActn.1101 .. TrgrTrdSessSubID.1114
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [11] Spread.218, Ccy.220 .. SecIDSrc.761
  YieldData?: IYieldData// [12] Typ.235, Yld.236 .. RedPxTyp.698
  PegInstructions?: IPegInstructions// [13] OfstVal.211, PegPxTyp.1094 .. PegSecDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [14] DsctnInst.388, OfstValu.389 .. Scope.846
  StrategyParametersGrp?: IStrategyParametersGrp[]// [15] StrtPrmNme.958, StrtPrmTyp.959, StrtPrmVal.960
}
