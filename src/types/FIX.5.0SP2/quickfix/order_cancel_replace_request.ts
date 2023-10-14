import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPreAllocGrp } from './set/pre_alloc_grp'
import { IDisplayInstruction } from './set/display_instruction'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { ITriggeringInstruction } from './set/triggering_instruction'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'
import { ICommissionData } from './set/commission_data'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The order cancel/replace request is used to change the      *
* parameters of an existing order.                            *
* Do not use this message to cancel the remaining quantity of *
* an outstanding order, use the Order Cancel Request message  *
* for this purpose.                                           *
***************************************************************
*/
export interface IOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  Parties?: IParties[]// [3] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeOriginationDate?: Date// [4] 229 (LocalDate)
  TradeDate?: Date// [5] 75 (LocalDate)
  OrigClOrdID?: string// [6] 41 (String)
  ClOrdID: string// [7] 11 (String)
  SecondaryClOrdID?: string// [8] 526 (String)
  ClOrdLinkID?: string// [9] 583 (String)
  ListID?: string// [10] 66 (String)
  OrigOrdModTime?: Date// [11] 586 (UtcTimestamp)
  Account?: string// [12] 1 (String)
  AcctIDSource?: number// [13] 660 (Int)
  AccountType?: number// [14] 581 (Int)
  DayBookingInst?: string// [15] 589 (String)
  BookingUnit?: string// [16] 590 (String)
  PreallocMethod?: string// [17] 591 (String)
  AllocID?: string// [18] 70 (String)
  PreAllocGrp?: IPreAllocGrp[]// [19] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
  SettlType?: string// [20] 63 (String)
  SettlDate?: Date// [21] 64 (LocalDate)
  CashMargin?: string// [22] 544 (String)
  ClearingFeeIndicator?: string// [23] 635 (String)
  HandlInst?: string// [24] 21 (String)
  ExecInst?: string// [25] 18 (String)
  MinQty?: number// [26] 110 (Float)
  MatchIncrement?: number// [27] 1089 (Float)
  MaxPriceLevels?: number// [28] 1090 (Int)
  DisplayInstruction?: IDisplayInstruction// [29] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  MaxFloor?: number// [30] 111 (Float)
  ExDestination?: string// [31] 100 (String)
  ExDestinationIDSource?: string// [32] 1133 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [33] TradingSessionID.336, TradingSessionSubID.625
  Instrument: IInstrument// [34] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [35] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [36] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Side: string// [37] 54 (String)
  TransactTime: Date// [38] 60 (UtcTimestamp)
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
  PegInstructions?: IPegInstructions// [49] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [50] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [51] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp[]// [52] StrategyParameterName.958, StrategyParameterType.959, StrategyParameterValue.960
  TargetStrategyParameters?: string// [53] 848 (String)
  ParticipationRate?: number// [54] 849 (Float)
  ComplianceID?: string// [55] 376 (String)
  SolicitedFlag?: boolean// [56] 377 (Boolean)
  Currency?: string// [57] 15 (String)
  TimeInForce?: string// [58] 59 (String)
  EffectiveTime?: Date// [59] 168 (UtcTimestamp)
  ExpireDate?: Date// [60] 432 (LocalDate)
  ExpireTime?: Date// [61] 126 (UtcTimestamp)
  GTBookingInst?: number// [62] 427 (Int)
  CommissionData?: ICommissionData// [63] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [64] 528 (String)
  OrderRestrictions?: string// [65] 529 (String)
  PreTradeAnonymity?: boolean// [66] 1091 (Boolean)
  CustOrderCapacity?: number// [67] 582 (Int)
  ForexReq?: boolean// [68] 121 (Boolean)
  SettlCurrency?: string// [69] 120 (String)
  BookingType?: number// [70] 775 (Int)
  Text?: string// [71] 58 (String)
  EncodedTextLen?: number// [72] 354 (Int)
  EncodedText?: Buffer// [73] 355 (RawData)
  SettlDate2?: Date// [74] 193 (LocalDate)
  OrderQty2?: number// [75] 192 (Float)
  Price2?: number// [76] 640 (Float)
  PositionEffect?: string// [77] 77 (String)
  CoveredOrUncovered?: number// [78] 203 (Int)
  MaxShow?: number// [79] 210 (Float)
  LocateReqd?: boolean// [80] 114 (Boolean)
  CancellationRights?: string// [81] 480 (String)
  MoneyLaunderingStatus?: string// [82] 481 (String)
  RegistID?: string// [83] 513 (String)
  Designation?: string// [84] 494 (String)
  ManualOrderIndicator?: boolean// [85] 1028 (Boolean)
  CustDirectedOrder?: boolean// [86] 1029 (Boolean)
  ReceivedDeptID?: string// [87] 1030 (String)
  CustOrderHandlingInst?: string// [88] 1031 (String)
  OrderHandlingInstSource?: number// [89] 1032 (Int)
  TrdRegTimestamps?: ITrdRegTimestamps[]// [90] TrdRegTimestamp.769, TrdRegTimestampType.770 .. DeskOrderHandlingInst.1035
  StandardTrailer: IStandardTrailer// [91] SignatureLength.93, Signature.89, CheckSum.10
}
