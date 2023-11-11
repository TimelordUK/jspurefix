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
import { IOrderAttributeGrp } from './order_attribute_grp'
import { IPegInstructions } from './peg_instructions'
import { IDiscretionInstructions } from './discretion_instructions'
import { IStrategyParametersGrp } from './strategy_parameters_grp'

export interface IListOrdGrpNoOrders {
  ClOrdID: string// [1] 11 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  ListSeqNo: number// [3] 67 (Int)
  ClOrdLinkID?: string// [4] 583 (String)
  SettlInstMode?: string// [5] 160 (String)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeOriginationDate?: Date// [7] 229 (LocalDate)
  TradeDate?: Date// [8] 75 (LocalDate)
  Account?: string// [9] 1 (String)
  AcctIDSource?: number// [10] 660 (Int)
  AccountType?: number// [11] 581 (Int)
  DayBookingInst?: string// [12] 589 (String)
  BookingUnit?: string// [13] 590 (String)
  AllocID?: string// [14] 70 (String)
  PreallocMethod?: string// [15] 591 (String)
  PreAllocGrp?: IPreAllocGrp// [16] NoAllocs.78, AllocAccount.79 .. CurrentCostBasis.1755
  SettlType?: string// [17] 63 (String)
  SettlDate?: Date// [18] 64 (LocalDate)
  CashMargin?: string// [19] 544 (String)
  ClearingFeeIndicator?: string// [20] 635 (String)
  HandlInst?: string// [21] 21 (String)
  ExecInst?: string// [22] 18 (String)
  MinQty?: number// [23] 110 (Float)
  MatchIncrement?: number// [24] 1089 (Float)
  MaxPriceLevels?: number// [25] 1090 (Int)
  DisplayInstruction?: IDisplayInstruction// [26] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  MaxFloor?: number// [27] 111 (Float)
  ExDestination?: string// [28] 100 (String)
  ExDestinationIDSource?: string// [29] 1133 (String)
  TrdgSesGrp?: ITrdgSesGrp// [30] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [31] 81 (String)
  Instrument?: IInstrument// [32] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp// [33] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  PrevClosePx?: number// [34] 140 (Float)
  Side: string// [35] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [36] 2102 (Boolean)
  ShortSaleExemptionReason?: number// [37] 1688 (Int)
  SideValueInd?: number// [38] 401 (Int)
  LocateReqd?: boolean// [39] 114 (Boolean)
  TransactTime?: Date// [40] 60 (UtcTimestamp)
  Stipulations?: IStipulations// [41] NoStipulations.232, StipulationType.233, StipulationValue.234
  QtyType?: number// [42] 854 (Int)
  OrderQtyData?: IOrderQtyData// [43] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType?: string// [44] 40 (String)
  PriceType?: number// [45] 423 (Int)
  Price?: number// [46] 44 (Float)
  PriceProtectionScope?: string// [47] 1092 (String)
  StopPx?: number// [48] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [49] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [50] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [51] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [52] 15 (String)
  CurrencyCodeSource?: string// [53] 2897 (String)
  ComplianceID?: string// [54] 376 (String)
  ComplianceText?: string// [55] 2404 (String)
  EncodedComplianceTextLen?: number// [56] 2351 (Length)
  EncodedComplianceText?: Buffer// [57] 2352 (RawData)
  SolicitedFlag?: boolean// [58] 377 (Boolean)
  IOIID?: string// [59] 23 (String)
  QuoteID?: string// [60] 117 (String)
  RefOrderID?: string// [61] 1080 (String)
  RefOrderIDSource?: string// [62] 1081 (String)
  TimeInForce?: string// [63] 59 (String)
  EffectiveTime?: Date// [64] 168 (UtcTimestamp)
  ExpireDate?: Date// [65] 432 (LocalDate)
  ExpireTime?: Date// [66] 126 (UtcTimestamp)
  GTBookingInst?: number// [67] 427 (Int)
  ExposureDuration?: number// [68] 1629 (Int)
  ExposureDurationUnit?: number// [69] 1916 (Int)
  CommissionData?: ICommissionData// [70] Commission.12, CommType.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp// [71] NoCommissions.2639, CommissionAmount.2640 .. EncodedCommissionDesc.2652
  OrderCapacity?: string// [72] 528 (String)
  OrderRestrictions?: string// [73] 529 (String)
  PreTradeAnonymity?: boolean// [74] 1091 (Boolean)
  CustOrderCapacity?: number// [75] 582 (Int)
  OrderAttributeGrp?: IOrderAttributeGrp// [76] NoOrderAttributes.2593, OrderAttributeType.2594, OrderAttributeValue.2595
  ForexReq?: boolean// [77] 121 (Boolean)
  SettlCurrency?: string// [78] 120 (String)
  SettlCurrencyCodeSource?: string// [79] 2899 (String)
  BookingType?: number// [80] 775 (Int)
  Text?: string// [81] 58 (String)
  EncodedTextLen?: number// [82] 354 (Length)
  EncodedText?: Buffer// [83] 355 (RawData)
  SettlDate2?: Date// [84] 193 (LocalDate)
  OrderQty2?: number// [85] 192 (Float)
  Price2?: number// [86] 640 (Float)
  PositionEffect?: string// [87] 77 (String)
  CoveredOrUncovered?: number// [88] 203 (Int)
  MaxShow?: number// [89] 210 (Float)
  PegInstructions?: IPegInstructions// [90] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [91] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [92] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp// [93] NoStrategyParameters.957, StrategyParameterName.958 .. StrategyParameterValue.960
  TargetStrategyParameters?: string// [94] 848 (String)
  ParticipationRate?: number// [95] 849 (Float)
  Designation?: string// [96] 494 (String)
  ManualOrderIndicator?: boolean// [97] 1028 (Boolean)
}
