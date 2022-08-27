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

/*
***************************************************************
* Used to submit a cross order into a market. The cross order *
* contains two order sides (a buy and a sell).                *
***************************************************************
*/
export interface INewOrderCross {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CrossID: string// [2] 548 (String)
  CrossType: number// [3] 549 (Int)
  CrossPrioritization: number// [4] 550 (Int)
  SideCrossOrdModGrp: ISideCrossOrdModGrp[]// [5] Side.54, ClOrdID.11 .. SideComplianceID.659
  Instrument: IInstrument// [6] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp?: IUndInstrmtGrp[]// [7] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp[]// [8] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  SettlType?: string// [9] 63 (String)
  SettlDate?: Date// [10] 64 (LocalDate)
  HandlInst?: string// [11] 21 (String)
  ExecInst?: string// [12] 18 (String)
  MinQty?: number// [13] 110 (Float)
  MaxFloor?: number// [14] 111 (Float)
  ExDestination?: string// [15] 100 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [16] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [17] 81 (String)
  PrevClosePx?: number// [18] 140 (Float)
  LocateReqd?: boolean// [19] 114 (Boolean)
  TransactTime: Date// [20] 60 (UtcTimestamp)
  Stipulations?: IStipulations[]// [21] StipulationType.233, StipulationValue.234
  OrdType: string// [22] 40 (String)
  PriceType?: number// [23] 423 (Int)
  Price?: number// [24] 44 (Float)
  StopPx?: number// [25] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [26] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [27] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [28] 15 (String)
  ComplianceID?: string// [29] 376 (String)
  IOIID?: string// [30] 23 (String)
  QuoteID?: string// [31] 117 (String)
  TimeInForce?: string// [32] 59 (String)
  EffectiveTime?: Date// [33] 168 (UtcTimestamp)
  ExpireDate?: Date// [34] 432 (LocalDate)
  ExpireTime?: Date// [35] 126 (UtcTimestamp)
  GTBookingInst?: number// [36] 427 (Int)
  MaxShow?: number// [37] 210 (Float)
  PegInstructions?: IPegInstructions// [38] PegOffsetValue.211, PegMoveType.835 .. PegScope.840
  DiscretionInstructions?: IDiscretionInstructions// [39] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [40] 847 (Int)
  TargetStrategyParameters?: string// [41] 848 (String)
  ParticipationRate?: number// [42] 849 (Float)
  CancellationRights?: string// [43] 480 (String)
  MoneyLaunderingStatus?: string// [44] 481 (String)
  RegistID?: string// [45] 513 (String)
  Designation?: string// [46] 494 (String)
  StandardTrailer: IStandardTrailer// [47] SignatureLength.93, Signature.89, CheckSum.10
}
