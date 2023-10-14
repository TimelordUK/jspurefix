import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPreAllocMlegGrp } from './set/pre_alloc_mleg_grp'
import { IDisplayInstruction } from './set/display_instruction'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ILegOrdGrp } from './set/leg_ord_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { ITriggeringInstruction } from './set/triggering_instruction'
import { ICommissionData } from './set/commission_data'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The New Order - Multileg is provided to submit orders for    *
* securities that are made up of multiple securities, known as *
* legs.                                                        *
****************************************************************
*/
export interface INewOrderMultileg {
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
  PreAllocMlegGrp?: IPreAllocMlegGrp[]// [15] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
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
  Side: string// [31] 54 (String)
  Instrument?: IInstrument// [32] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [33] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  PrevClosePx?: number// [34] 140 (Float)
  SwapPoints?: number// [35] 1069 (Float)
  LegOrdGrp?: ILegOrdGrp[]// [36] LegSymbol.600, LegSymbolSfx.601 .. LegExecInst.1384
  LocateReqd?: boolean// [37] 114 (Boolean)
  TransactTime: Date// [38] 60 (UtcTimestamp)
  QtyType?: number// [39] 854 (Int)
  OrderQtyData?: IOrderQtyData// [40] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [41] 40 (String)
  MultilegModel?: number// [42] 1377 (Int)
  MultilegPriceMethod?: number// [43] 1378 (Int)
  PriceType?: number// [44] 423 (Int)
  Price?: number// [45] 44 (Float)
  PriceProtectionScope?: string// [46] 1092 (String)
  StopPx?: number// [47] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [48] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  Currency?: string// [49] 15 (String)
  ComplianceID?: string// [50] 376 (String)
  SolicitedFlag?: boolean// [51] 377 (Boolean)
  IOIID?: string// [52] 23 (String)
  QuoteID?: string// [53] 117 (String)
  RefOrderID?: string// [54] 1080 (String)
  RefOrderIDSource?: string// [55] 1081 (String)
  TimeInForce?: string// [56] 59 (String)
  EffectiveTime?: Date// [57] 168 (UtcTimestamp)
  ExpireDate?: Date// [58] 432 (LocalDate)
  ExpireTime?: Date// [59] 126 (UtcTimestamp)
  GTBookingInst?: number// [60] 427 (Int)
  CommissionData?: ICommissionData// [61] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [62] 528 (String)
  OrderRestrictions?: string// [63] 529 (String)
  PreTradeAnonymity?: boolean// [64] 1091 (Boolean)
  CustOrderCapacity?: number// [65] 582 (Int)
  ForexReq?: boolean// [66] 121 (Boolean)
  SettlCurrency?: string// [67] 120 (String)
  BookingType?: number// [68] 775 (Int)
  Text?: string// [69] 58 (String)
  EncodedTextLen?: number// [70] 354 (Int)
  EncodedText?: Buffer// [71] 355 (RawData)
  PositionEffect?: string// [72] 77 (String)
  CoveredOrUncovered?: number// [73] 203 (Int)
  MaxShow?: number// [74] 210 (Float)
  PegInstructions?: IPegInstructions// [75] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [76] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [77] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp[]// [78] StrategyParameterName.958, StrategyParameterType.959, StrategyParameterValue.960
  TargetStrategyParameters?: string// [79] 848 (String)
  RiskFreeRate?: number// [80] 1190 (Float)
  ParticipationRate?: number// [81] 849 (Float)
  CancellationRights?: string// [82] 480 (String)
  MoneyLaunderingStatus?: string// [83] 481 (String)
  RegistID?: string// [84] 513 (String)
  Designation?: string// [85] 494 (String)
  MultiLegRptTypeReq?: number// [86] 563 (Int)
  StandardTrailer: IStandardTrailer// [87] SignatureLength.93, Signature.89, CheckSum.10
}
