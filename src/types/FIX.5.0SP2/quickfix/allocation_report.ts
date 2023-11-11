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

export interface IAllocationReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocReportID: string// [2] 755 (String)
  AllocID?: string// [3] 70 (String)
  AllocRequestID?: string// [4] 2758 (String)
  AllocTransType: string// [5] 71 (String)
  AllocReportRefID?: string// [6] 795 (String)
  AllocCancReplaceReason?: number// [7] 796 (Int)
  SecondaryAllocID?: string// [8] 793 (String)
  AllocGroupID?: string// [9] 1730 (String)
  PreviousAllocGroupID?: string// [10] 2771 (String)
  GroupAmount?: number// [11] 2759 (Float)
  AllocGroupStatus?: number// [12] 2767 (Int)
  FirmGroupID?: string// [13] 1728 (String)
  AllocReportType: number// [14] 794 (Int)
  AllocStatus: number// [15] 87 (Int)
  AllocRejCode?: number// [16] 88 (Int)
  RefAllocID?: string// [17] 72 (String)
  AllocReversalStatus?: number// [18] 1738 (Int)
  AllocIntermedReqType?: number// [19] 808 (Int)
  AllocLinkID?: string// [20] 196 (String)
  AllocLinkType?: number// [21] 197 (Int)
  BookingRefID?: string// [22] 466 (String)
  ClearingBusinessDate?: Date// [23] 715 (LocalDate)
  TrdType?: number// [24] 828 (Int)
  TrdSubType?: number// [25] 829 (Int)
  SecondaryTrdType?: number// [26] 855 (Int)
  TradeContinuation?: number// [27] 1937 (Int)
  TradeContinuationText?: string// [28] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [29] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [30] 2371 (RawData)
  MultiLegReportingType?: string// [31] 442 (String)
  CustOrderCapacity?: number// [32] 582 (Int)
  TradeInputSource?: string// [33] 578 (String)
  RndPx?: number// [34] 991 (Float)
  MessageEventSource?: string// [35] 1011 (String)
  TradeInputDevice?: string// [36] 579 (String)
  AvgPxIndicator?: number// [37] 819 (Int)
  AvgPxGroupID?: string// [38] 1731 (String)
  AllocNoOrdersType?: number// [39] 857 (Int)
  OrdAllocGrp?: IOrdAllocGrp// [40] NoOrders.73, ClOrdID.11 .. OrdType.40
  ExecAllocGrp?: IExecAllocGrp// [41] NoExecs.124, LastQty.32 .. TradePriceCondition.1839
  PreviouslyReported?: boolean// [42] 570 (Boolean)
  ReversalIndicator?: boolean// [43] 700 (Boolean)
  MatchType?: string// [44] 574 (String)
  Side: string// [45] 54 (String)
  Instrument?: IInstrument// [46] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [47] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [48] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [49] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [50] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  Quantity: number// [51] 53 (Float)
  QtyType?: number// [52] 854 (Int)
  AllocGroupQuantity?: number// [53] 1736 (Float)
  AllocGroupRemainingQuantity?: number// [54] 1737 (Float)
  LastMkt?: string// [55] 30 (String)
  TradeOriginationDate?: Date// [56] 229 (LocalDate)
  TradingSessionID?: string// [57] 336 (String)
  TradingSessionSubID?: string// [58] 625 (String)
  PriceType?: number// [59] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [60] NoPriceQualifiers.2709, PriceQualifier.2710
  AvgPx: number// [61] 6 (Float)
  AvgParPx?: number// [62] 860 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [63] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Currency?: string// [64] 15 (String)
  CurrencyCodeSource?: string// [65] 2897 (String)
  AvgPxPrecision?: number// [66] 74 (Int)
  Parties?: IParties// [67] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeDate: Date// [68] 75 (LocalDate)
  TransactTime?: Date// [69] 60 (UtcTimestamp)
  SettlType?: string// [70] 63 (String)
  SettlDate?: Date// [71] 64 (LocalDate)
  BookingType?: number// [72] 775 (Int)
  GrossTradeAmt?: number// [73] 381 (Float)
  Concession?: number// [74] 238 (Float)
  TotalTakedown?: number// [75] 237 (Float)
  NetMoney?: number// [76] 118 (Float)
  PositionEffect?: string// [77] 77 (String)
  AutoAcceptIndicator?: boolean// [78] 754 (Boolean)
  Text?: string// [79] 58 (String)
  EncodedTextLen?: number// [80] 354 (Length)
  EncodedText?: Buffer// [81] 355 (RawData)
  NumDaysInterest?: number// [82] 157 (Int)
  AccruedInterestRate?: number// [83] 158 (Float)
  AccruedInterestAmt?: number// [84] 159 (Float)
  TotalAccruedInterestAmt?: number// [85] 540 (Float)
  InterestAtMaturity?: number// [86] 738 (Float)
  EndAccruedInterestAmt?: number// [87] 920 (Float)
  StartCash?: number// [88] 921 (Float)
  EndCash?: number// [89] 922 (Float)
  LegalConfirm?: boolean// [90] 650 (Boolean)
  Stipulations?: IStipulations// [91] NoStipulations.232, StipulationType.233, StipulationValue.234
  YieldData?: IYieldData// [92] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [93] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  PositionAmountData?: IPositionAmountData// [94] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  CustOrderHandlingInst?: string// [95] 1031 (String)
  OrderHandlingInstSource?: number// [96] 1032 (Int)
  TotNoAllocs?: number// [97] 892 (Int)
  LastFragment?: boolean// [98] 893 (Boolean)
  AllocGrp?: IAllocGrp// [99] NoAllocs.78, AllocAccount.79 .. TradeAllocAmtReason.1850
  RateSource?: IRateSource// [100] NoRateSources.1445, RateSource.1446 .. FXBenchmarkRateFix.2796
  VenueType?: string// [101] 1430 (String)
  RefRiskLimitCheckID?: string// [102] 2334 (String)
  RefRiskLimitCheckIDType?: number// [103] 2335 (Int)
  RiskLimitCheckStatus?: number// [104] 2343 (Int)
  StandardTrailer: IStandardTrailer// [105] SignatureLength.93, Signature.89, CheckSum.10
}
