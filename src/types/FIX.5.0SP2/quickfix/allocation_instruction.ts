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
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IPositionAmountData } from './set/position_amount_data'
import { IAllocGrp } from './set/alloc_grp'
import { IRateSource } from './set/rate_source'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocationInstruction {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocID: string// [2] 70 (String)
  AllocRequestID?: string// [3] 2758 (String)
  AllocTransType: string// [4] 71 (String)
  AllocType: number// [5] 626 (Int)
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
  Quantity: number// [27] 53 (Float)
  QtyType?: number// [28] 854 (Int)
  LastMkt?: string// [29] 30 (String)
  TradeOriginationDate?: Date// [30] 229 (LocalDate)
  TradingSessionID?: string// [31] 336 (String)
  TradingSessionSubID?: string// [32] 625 (String)
  PriceType?: number// [33] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [34] NoPriceQualifiers.2709, PriceQualifier.2710
  AvgPx?: number// [35] 6 (Float)
  AvgParPx?: number// [36] 860 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [37] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Currency?: string// [38] 15 (String)
  CurrencyCodeSource?: string// [39] 2897 (String)
  AvgPxPrecision?: number// [40] 74 (Int)
  OffshoreIndicator?: number// [41] 2795 (Int)
  Parties?: IParties// [42] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeDate: Date// [43] 75 (LocalDate)
  TransactTime?: Date// [44] 60 (UtcTimestamp)
  SettlType?: string// [45] 63 (String)
  SettlDate?: Date// [46] 64 (LocalDate)
  BookingType?: number// [47] 775 (Int)
  GrossTradeAmt?: number// [48] 381 (Float)
  Concession?: number// [49] 238 (Float)
  TotalTakedown?: number// [50] 237 (Float)
  NetMoney?: number// [51] 118 (Float)
  PositionEffect?: string// [52] 77 (String)
  AutoAcceptIndicator?: boolean// [53] 754 (Boolean)
  Text?: string// [54] 58 (String)
  EncodedTextLen?: number// [55] 354 (Length)
  EncodedText?: Buffer// [56] 355 (RawData)
  NumDaysInterest?: number// [57] 157 (Int)
  AccruedInterestRate?: number// [58] 158 (Float)
  AccruedInterestAmt?: number// [59] 159 (Float)
  TotalAccruedInterestAmt?: number// [60] 540 (Float)
  InterestAtMaturity?: number// [61] 738 (Float)
  EndAccruedInterestAmt?: number// [62] 920 (Float)
  StartCash?: number// [63] 921 (Float)
  EndCash?: number// [64] 922 (Float)
  LegalConfirm?: boolean// [65] 650 (Boolean)
  Stipulations?: IStipulations// [66] NoStipulations.232, StipulationType.233, StipulationValue.234
  YieldData?: IYieldData// [67] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [68] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  PositionAmountData?: IPositionAmountData// [69] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  TotNoAllocs?: number// [70] 892 (Int)
  LastFragment?: boolean// [71] 893 (Boolean)
  AllocGrp?: IAllocGrp// [72] NoAllocs.78, AllocAccount.79 .. TradeAllocAmtReason.1850
  AvgPxIndicator?: number// [73] 819 (Int)
  AvgPxGroupID?: string// [74] 1731 (String)
  ClearingBusinessDate?: Date// [75] 715 (LocalDate)
  TrdType?: number// [76] 828 (Int)
  TrdSubType?: number// [77] 829 (Int)
  SecondaryTrdType?: number// [78] 855 (Int)
  TradeContinuation?: number// [79] 1937 (Int)
  TradeContinuationText?: string// [80] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [81] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [82] 2371 (RawData)
  CustOrderCapacity?: number// [83] 582 (Int)
  TradeInputSource?: string// [84] 578 (String)
  MultiLegReportingType?: string// [85] 442 (String)
  MessageEventSource?: string// [86] 1011 (String)
  RndPx?: number// [87] 991 (Float)
  RateSource?: IRateSource// [88] NoRateSources.1445, RateSource.1446 .. FXBenchmarkRateFix.2796
  VenueType?: string// [89] 1430 (String)
  RefRiskLimitCheckID?: string// [90] 2334 (String)
  RefRiskLimitCheckIDType?: number// [91] 2335 (Int)
  RiskLimitCheckStatus?: number// [92] 2343 (Int)
  StandardTrailer: IStandardTrailer// [93] SignatureLength.93, Signature.89, CheckSum.10
}
