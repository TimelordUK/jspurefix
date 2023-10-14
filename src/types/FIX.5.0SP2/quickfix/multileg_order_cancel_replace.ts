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
**************************************************************
* Used to modify a multileg order previously submitted using *
* the New Order - Multileg message. See Order Cancel Replace *
* Request for details concerning message usage.              *
**************************************************************
*/
export interface IMultilegOrderCancelReplace {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  OrigClOrdID?: string// [3] 41 (String)
  ClOrdID?: string// [4] 11 (String)
  SecondaryClOrdID?: string// [5] 526 (String)
  ClOrdLinkID?: string// [6] 583 (String)
  OrigOrdModTime?: Date// [7] 586 (UtcTimestamp)
  Parties?: IParties[]// [8] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeOriginationDate?: Date// [9] 229 (LocalDate)
  TradeDate?: Date// [10] 75 (LocalDate)
  Account?: string// [11] 1 (String)
  AcctIDSource?: number// [12] 660 (Int)
  AccountType?: number// [13] 581 (Int)
  DayBookingInst?: string// [14] 589 (String)
  BookingUnit?: string// [15] 590 (String)
  PreallocMethod?: string// [16] 591 (String)
  AllocID?: string// [17] 70 (String)
  PreAllocMlegGrp?: IPreAllocMlegGrp[]// [18] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
  SettlType?: string// [19] 63 (String)
  SettlDate?: Date// [20] 64 (LocalDate)
  CashMargin?: string// [21] 544 (String)
  ClearingFeeIndicator?: string// [22] 635 (String)
  HandlInst?: string// [23] 21 (String)
  ExecInst?: string// [24] 18 (String)
  MinQty?: number// [25] 110 (Float)
  MatchIncrement?: number// [26] 1089 (Float)
  MaxPriceLevels?: number// [27] 1090 (Int)
  DisplayInstruction?: IDisplayInstruction// [28] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  MaxFloor?: number// [29] 111 (Float)
  ExDestination?: string// [30] 100 (String)
  ExDestinationIDSource?: string// [31] 1133 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [32] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [33] 81 (String)
  Side: string// [34] 54 (String)
  Instrument?: IInstrument// [35] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [36] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  PrevClosePx?: number// [37] 140 (Float)
  SwapPoints?: number// [38] 1069 (Float)
  LegOrdGrp?: ILegOrdGrp[]// [39] LegSymbol.600, LegSymbolSfx.601 .. LegExecInst.1384
  LocateReqd?: boolean// [40] 114 (Boolean)
  TransactTime: Date// [41] 60 (UtcTimestamp)
  QtyType?: number// [42] 854 (Int)
  OrderQtyData: IOrderQtyData// [43] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [44] 40 (String)
  MultilegModel?: number// [45] 1377 (Int)
  MultilegPriceMethod?: number// [46] 1378 (Int)
  PriceType?: number// [47] 423 (Int)
  Price?: number// [48] 44 (Float)
  PriceProtectionScope?: string// [49] 1092 (String)
  StopPx?: number// [50] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [51] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  Currency?: string// [52] 15 (String)
  ComplianceID?: string// [53] 376 (String)
  SolicitedFlag?: boolean// [54] 377 (Boolean)
  IOIID?: string// [55] 23 (String)
  QuoteID?: string// [56] 117 (String)
  TimeInForce?: string// [57] 59 (String)
  EffectiveTime?: Date// [58] 168 (UtcTimestamp)
  ExpireDate?: Date// [59] 432 (LocalDate)
  ExpireTime?: Date// [60] 126 (UtcTimestamp)
  GTBookingInst?: number// [61] 427 (Int)
  CommissionData?: ICommissionData// [62] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [63] 528 (String)
  OrderRestrictions?: string// [64] 529 (String)
  PreTradeAnonymity?: boolean// [65] 1091 (Boolean)
  CustOrderCapacity?: number// [66] 582 (Int)
  ForexReq?: boolean// [67] 121 (Boolean)
  SettlCurrency?: string// [68] 120 (String)
  BookingType?: number// [69] 775 (Int)
  Text?: string// [70] 58 (String)
  EncodedTextLen?: number// [71] 354 (Int)
  EncodedText?: Buffer// [72] 355 (RawData)
  PositionEffect?: string// [73] 77 (String)
  CoveredOrUncovered?: number// [74] 203 (Int)
  MaxShow?: number// [75] 210 (Float)
  PegInstructions?: IPegInstructions// [76] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [77] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [78] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp[]// [79] StrategyParameterName.958, StrategyParameterType.959, StrategyParameterValue.960
  TargetStrategyParameters?: string// [80] 848 (String)
  RiskFreeRate?: number// [81] 1190 (Float)
  ParticipationRate?: number// [82] 849 (Float)
  CancellationRights?: string// [83] 480 (String)
  MoneyLaunderingStatus?: string// [84] 481 (String)
  RegistID?: string// [85] 513 (String)
  Designation?: string// [86] 494 (String)
  MultiLegRptTypeReq?: number// [87] 563 (Int)
  StandardTrailer: IStandardTrailer// [88] SignatureLength.93, Signature.89, CheckSum.10
}
