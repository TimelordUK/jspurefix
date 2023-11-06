import { IParties } from './parties'
import { IPreAllocGrp } from './pre_alloc_grp'
import { IDisplayInstruction } from './display_instruction'
import { ITrdgSesGrp } from './trdg_ses_grp'
import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { IOrderQtyData } from './order_qty_data'
import { ITriggeringInstruction } from './triggering_instruction'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { ICommissionData } from './commission_data'
import { ICommissionDataGrp } from './commission_data_grp'
import { IPegInstructions } from './peg_instructions'
import { IDiscretionInstructions } from './discretion_instructions'
import { IStrategyParametersGrp } from './strategy_parameters_grp'

export interface IListOrdGrp {
  ClOrdID: string// [1] 11 (String)
  SecondaryClOrdID?: string// [1] 526 (String)
  ListSeqNo: number// [1] 67 (Int)
  ClOrdLinkID?: string// [1] 583 (String)
  SettlInstMode?: string// [1] 160 (String)
  TradeOriginationDate?: Date// [1] 229 (LocalDate)
  TradeDate?: Date// [1] 75 (LocalDate)
  Account?: string// [1] 1 (String)
  AcctIDSource?: number// [1] 660 (Int)
  AccountType?: number// [1] 581 (Int)
  DayBookingInst?: string// [1] 589 (String)
  BookingUnit?: string// [1] 590 (String)
  AllocID?: string// [1] 70 (String)
  PreallocMethod?: string// [1] 591 (String)
  SettlType?: string// [1] 63 (String)
  SettlDate?: Date// [1] 64 (LocalDate)
  CashMargin?: string// [1] 544 (String)
  ClearingFeeIndicator?: string// [1] 635 (String)
  HandlInst?: string// [1] 21 (String)
  ExecInst?: string// [1] 18 (String)
  MinQty?: number// [1] 110 (Float)
  MatchIncrement?: number// [1] 1089 (Float)
  MaxPriceLevels?: number// [1] 1090 (Int)
  MaxFloor?: number// [1] 111 (Float)
  ExDestination?: string// [1] 100 (String)
  ExDestinationIDSource?: string// [1] 1133 (String)
  ProcessCode?: string// [1] 81 (String)
  PrevClosePx?: number// [1] 140 (Float)
  Side: string// [1] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [1] 2102 (Boolean)
  ShortSaleExemptionReason?: number// [1] 1688 (Int)
  SideValueInd?: number// [1] 401 (Int)
  LocateReqd?: boolean// [1] 114 (Boolean)
  TransactTime?: Date// [1] 60 (UtcTimestamp)
  QtyType?: number// [1] 854 (Int)
  OrdType?: string// [1] 40 (String)
  PriceType?: number// [1] 423 (Int)
  Price?: number// [1] 44 (Float)
  PriceProtectionScope?: string// [1] 1092 (String)
  StopPx?: number// [1] 99 (Float)
  Currency?: string// [1] 15 (String)
  ComplianceID?: string// [1] 376 (String)
  ComplianceText?: string// [1] 2404 (String)
  EncodedComplianceTextLen?: number// [1] 2351 (Length)
  EncodedComplianceText?: Buffer// [1] 2352 (RawData)
  SolicitedFlag?: boolean// [1] 377 (Boolean)
  IOIID?: string// [1] 23 (String)
  QuoteID?: string// [1] 117 (String)
  RefOrderID?: string// [1] 1080 (String)
  RefOrderIDSource?: string// [1] 1081 (String)
  TimeInForce?: string// [1] 59 (String)
  EffectiveTime?: Date// [1] 168 (UtcTimestamp)
  ExpireDate?: Date// [1] 432 (LocalDate)
  ExpireTime?: Date// [1] 126 (UtcTimestamp)
  GTBookingInst?: number// [1] 427 (Int)
  ExposureDuration?: number// [1] 1629 (Int)
  ExposureDurationUnit?: number// [1] 1916 (Int)
  OrderCapacity?: string// [1] 528 (String)
  OrderRestrictions?: string// [1] 529 (String)
  PreTradeAnonymity?: boolean// [1] 1091 (Boolean)
  CustOrderCapacity?: number// [1] 582 (Int)
  ForexReq?: boolean// [1] 121 (Boolean)
  SettlCurrency?: string// [1] 120 (String)
  BookingType?: number// [1] 775 (Int)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  SettlDate2?: Date// [1] 193 (LocalDate)
  OrderQty2?: number// [1] 192 (Float)
  Price2?: number// [1] 640 (Float)
  PositionEffect?: string// [1] 77 (String)
  CoveredOrUncovered?: number// [1] 203 (Int)
  MaxShow?: number// [1] 210 (Float)
  TargetStrategy?: number// [1] 847 (Int)
  TargetStrategyParameters?: string// [1] 848 (String)
  ParticipationRate?: number// [1] 849 (Float)
  Designation?: string// [1] 494 (String)
  ManualOrderIndicator?: boolean// [1] 1028 (Boolean)
  Parties?: IParties[]// [1] ID.448, Src.447 .. Qual.2376
  PreAllocGrp?: IPreAllocGrp[]// [2] Acct.79, ActIDSrc.661 .. CurCostBasis.1755
  DisplayInstruction?: IDisplayInstruction// [3] DisplayQty.1138, SecDspQty.1082 .. RfrshQty.1088
  TrdgSesGrp?: ITrdgSesGrp[]// [4] SesID.336, SesSub.625
  Instrument: IInstrument// [5] Sym.55, Sfx.65 .. ExchLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  Stipulations?: IStipulations[]// [7] Typ.233, Val.234
  OrderQtyData: IOrderQtyData// [8] Qty.38, Cash.152 .. RndMod.469
  TriggeringInstruction?: ITriggeringInstruction// [9] TrgrTyp.1100, TrgrActn.1101 .. TrgrTrdSessSubID.1114
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [10] Spread.218, Ccy.220 .. SecIDSrc.761
  YieldData?: IYieldData// [11] Typ.235, Yld.236 .. RedPxTyp.698
  CommissionData?: ICommissionData// [12] Comm.12, CommTyp.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp[]// [13] Amt.2640, Typ.2641 .. EncDesc.2652
  PegInstructions?: IPegInstructions// [14] OfstVal.211, PegPxTyp.1094 .. PegSecDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [15] DsctnInst.388, OfstValu.389 .. Scope.846
  StrategyParametersGrp?: IStrategyParametersGrp[]// [16] StrtPrmNme.958, StrtPrmTyp.959, StrtPrmVal.960
}
