import { IStandardHeader } from './set/standard_header'
import { IOrdAllocGrp } from './set/ord_alloc_grp'
import { IExecAllocGrp } from './set/exec_alloc_grp'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IPriceQualifierGrp } from './set/price_qualifier_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IParties } from './set/parties'
import { IStipulations } from './set/stipulations'
import { IYieldData } from './set/yield_data'
import { IPositionAmountData } from './set/position_amount_data'
import { IAllocGrp } from './set/alloc_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocationInstructionAlert {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocID: string// [2] 70 (String)
  AllocTransType: string// [3] 71 (String)
  AllocType: number// [4] 626 (Int)
  AllocRequestID?: string// [5] 2758 (String)
  SecondaryAllocID?: string// [6] 793 (String)
  RefAllocID?: string// [7] 72 (String)
  AllocCancReplaceReason?: number// [8] 796 (Int)
  AllocIntermedReqType?: number// [9] 808 (Int)
  AllocLinkID?: string// [10] 196 (String)
  AllocLinkType?: number// [11] 197 (Int)
  AllocGroupID?: string// [12] 1730 (String)
  FirmGroupID?: string// [13] 1728 (String)
  BookingRefID?: string// [14] 466 (String)
  AllocNoOrdersType?: number// [15] 857 (Int)
  OrdAllocGrp?: IOrdAllocGrp// [16] NoOrders.73, ClOrdID.11 .. OrdType.40
  ExecAllocGrp?: IExecAllocGrp// [17] NoExecs.124, LastQty.32 .. TradePriceCondition.1839
  PreviouslyReported?: boolean// [18] 570 (Boolean)
  ReversalIndicator?: boolean// [19] 700 (Boolean)
  MatchType?: string// [20] 574 (String)
  Side: string// [21] 54 (String)
  Instrument?: IInstrument// [22] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [23] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [24] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [25] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [26] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  Quantity?: number// [27] 53 (Float)
  QtyType?: number// [28] 854 (Int)
  AllocGroupQuantity?: number// [29] 1736 (Float)
  AllocGroupRemainingQuantity?: number// [30] 1737 (Float)
  GroupAmount?: number// [31] 2759 (Float)
  GroupRemainingAmount?: number// [32] 2760 (Float)
  LastMkt?: string// [33] 30 (String)
  TradeOriginationDate?: Date// [34] 229 (LocalDate)
  TradingSessionID?: string// [35] 336 (String)
  TradingSessionSubID?: string// [36] 625 (String)
  PriceType?: number// [37] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [38] NoPriceQualifiers.2709, PriceQualifier.2710
  AvgPx?: number// [39] 6 (Float)
  AvgParPx?: number// [40] 860 (Float)
  HighPx?: number// [41] 332 (Float)
  LowPx?: number// [42] 333 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [43] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Currency?: string// [44] 15 (String)
  CurrencyCodeSource?: string// [45] 2897 (String)
  AvgPxPrecision?: number// [46] 74 (Int)
  Parties?: IParties// [47] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeDate: Date// [48] 75 (LocalDate)
  TransactTime?: Date// [49] 60 (UtcTimestamp)
  AllocStatus?: number// [50] 87 (Int)
  SettlType?: string// [51] 63 (String)
  SettlDate?: Date// [52] 64 (LocalDate)
  BookingType?: number// [53] 775 (Int)
  GrossTradeAmt?: number// [54] 381 (Float)
  Concession?: number// [55] 238 (Float)
  TotalTakedown?: number// [56] 237 (Float)
  NetMoney?: number// [57] 118 (Float)
  PositionEffect?: string// [58] 77 (String)
  AutoAcceptIndicator?: boolean// [59] 754 (Boolean)
  Text?: string// [60] 58 (String)
  EncodedTextLen?: number// [61] 354 (Length)
  EncodedText?: Buffer// [62] 355 (RawData)
  NumDaysInterest?: number// [63] 157 (Int)
  AccruedInterestRate?: number// [64] 158 (Float)
  AccruedInterestAmt?: number// [65] 159 (Float)
  TotalAccruedInterestAmt?: number// [66] 540 (Float)
  InterestAtMaturity?: number// [67] 738 (Float)
  EndAccruedInterestAmt?: number// [68] 920 (Float)
  StartCash?: number// [69] 921 (Float)
  EndCash?: number// [70] 922 (Float)
  LegalConfirm?: boolean// [71] 650 (Boolean)
  Stipulations?: IStipulations// [72] NoStipulations.232, StipulationType.233, StipulationValue.234
  YieldData?: IYieldData// [73] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  PositionAmountData?: IPositionAmountData// [74] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  TotNoAllocs?: number// [75] 892 (Int)
  LastFragment?: boolean// [76] 893 (Boolean)
  AllocGrp?: IAllocGrp// [77] NoAllocs.78, AllocAccount.79 .. TradeAllocAmtReason.1850
  AvgPxIndicator?: number// [78] 819 (Int)
  AvgPxGroupID?: string// [79] 1731 (String)
  ClearingBusinessDate?: Date// [80] 715 (LocalDate)
  TrdType?: number// [81] 828 (Int)
  TrdSubType?: number// [82] 829 (Int)
  CustOrderCapacity?: number// [83] 582 (Int)
  TradeInputSource?: string// [84] 578 (String)
  MultiLegReportingType?: string// [85] 442 (String)
  MessageEventSource?: string// [86] 1011 (String)
  RndPx?: number// [87] 991 (Float)
  CustOrderHandlingInst?: string// [88] 1031 (String)
  OrderHandlingInstSource?: number// [89] 1032 (Int)
  StandardTrailer: IStandardTrailer// [90] SignatureLength.93, Signature.89, CheckSum.10
}
