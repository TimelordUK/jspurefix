import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPreAllocGrp } from './set/pre_alloc_grp'
import { IDisplayInstruction } from './set/display_instruction'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { ITriggeringInstruction } from './set/triggering_instruction'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { ICommissionData } from './set/commission_data'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The new order message type is used by institutions wishing  *
* to electronically submit securities and forex orders to a   *
* broker for execution.                                       *
* The New Order message type may also be used by institutions *
* or retail intermediaries wishing to electronically submit   *
* Collective Investment Vehicle (CIV) orders to a broker or   *
* fund manager for execution.                                 *
***************************************************************
*/
export interface INewOrderSingle {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  ClOrdLinkID?: string// [4] 583 (String)
  Parties?: IParties[]// [5] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeOriginationDate?: Date// [6] 229 (LocalDate)
  TradeDate?: Date// [7] 75 (LocalDate)
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  AccountType?: number// [10] 581 (Int)
  DayBookingInst?: string// [11] 589 (String)
  BookingUnit?: string// [12] 590 (String)
  PreallocMethod?: string// [13] 591 (String)
  AllocID?: string// [14] 70 (String)
  PreAllocGrp?: IPreAllocGrp[]// [15] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
  SettlType?: string// [16] 63 (String)
  SettlDate?: Date// [17] 64 (LocalDate)
  CashMargin?: string// [18] 544 (String)
  ClearingFeeIndicator?: string// [19] 635 (String)
  HandlInst?: string// [20] 21 (String)
  ExecInst?: string// [21] 18 (String)
  MinQty?: number// [22] 110 (Float)
  MatchIncrement?: number// [23] 1089 (Float)
  MaxPriceLevels?: number// [24] 1090 (Int)
  DisplayInstruction?: IDisplayInstruction// [25] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  MaxFloor?: number// [26] 111 (Float)
  ExDestination?: string// [27] 100 (String)
  ExDestinationIDSource?: string// [28] 1133 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [29] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [30] 81 (String)
  Instrument: IInstrument// [31] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [32] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [33] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  PrevClosePx?: number// [34] 140 (Float)
  Side: string// [35] 54 (String)
  LocateReqd?: boolean// [36] 114 (Boolean)
  TransactTime: Date// [37] 60 (UtcTimestamp)
  Stipulations?: IStipulations[]// [38] StipulationType.233, StipulationValue.234
  QtyType?: number// [39] 854 (Int)
  OrderQtyData: IOrderQtyData// [40] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [41] 40 (String)
  PriceType?: number// [42] 423 (Int)
  Price?: number// [43] 44 (Float)
  PriceProtectionScope?: string// [44] 1092 (String)
  StopPx?: number// [45] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [46] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [47] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [48] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [49] 15 (String)
  ComplianceID?: string// [50] 376 (String)
  SolicitedFlag?: boolean// [51] 377 (Boolean)
  IOIID?: string// [52] 23 (String)
  QuoteID?: string// [53] 117 (String)
  TimeInForce?: string// [54] 59 (String)
  EffectiveTime?: Date// [55] 168 (UtcTimestamp)
  ExpireDate?: Date// [56] 432 (LocalDate)
  ExpireTime?: Date// [57] 126 (UtcTimestamp)
  GTBookingInst?: number// [58] 427 (Int)
  CommissionData?: ICommissionData// [59] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [60] 528 (String)
  OrderRestrictions?: string// [61] 529 (String)
  PreTradeAnonymity?: boolean// [62] 1091 (Boolean)
  CustOrderCapacity?: number// [63] 582 (Int)
  ForexReq?: boolean// [64] 121 (Boolean)
  SettlCurrency?: string// [65] 120 (String)
  BookingType?: number// [66] 775 (Int)
  Text?: string// [67] 58 (String)
  EncodedTextLen?: number// [68] 354 (Int)
  EncodedText?: Buffer// [69] 355 (RawData)
  SettlDate2?: Date// [70] 193 (LocalDate)
  OrderQty2?: number// [71] 192 (Float)
  Price2?: number// [72] 640 (Float)
  PositionEffect?: string// [73] 77 (String)
  CoveredOrUncovered?: number// [74] 203 (Int)
  MaxShow?: number// [75] 210 (Float)
  PegInstructions?: IPegInstructions// [76] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [77] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [78] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp[]// [79] StrategyParameterName.958, StrategyParameterType.959, StrategyParameterValue.960
  TargetStrategyParameters?: string// [80] 848 (String)
  ParticipationRate?: number// [81] 849 (Float)
  CancellationRights?: string// [82] 480 (String)
  MoneyLaunderingStatus?: string// [83] 481 (String)
  RegistID?: string// [84] 513 (String)
  Designation?: string// [85] 494 (String)
  ManualOrderIndicator?: boolean// [86] 1028 (Boolean)
  CustDirectedOrder?: boolean// [87] 1029 (Boolean)
  ReceivedDeptID?: string// [88] 1030 (String)
  CustOrderHandlingInst?: string// [89] 1031 (String)
  OrderHandlingInstSource?: number// [90] 1032 (Int)
  TrdRegTimestamps?: ITrdRegTimestamps[]// [91] TrdRegTimestamp.769, TrdRegTimestampType.770 .. DeskOrderHandlingInst.1035
  RefOrderID?: string// [92] 1080 (String)
  RefOrderIDSource?: string// [93] 1081 (String)
  StandardTrailer: IStandardTrailer// [94] SignatureLength.93, Signature.89, CheckSum.10
}
