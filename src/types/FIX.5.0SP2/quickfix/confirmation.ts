import { IStandardHeader } from './set/standard_header'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IParties } from './set/parties'
import { IOrdAllocGrp } from './set/ord_alloc_grp'
import { IExecAllocGrp } from './set/exec_alloc_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IYieldData } from './set/yield_data'
import { ICpctyConfGrp } from './set/cpcty_conf_grp'
import { IPriceQualifierGrp } from './set/price_qualifier_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { ISettlInstructionsData } from './set/settl_instructions_data'
import { ICommissionData } from './set/commission_data'
import { ICommissionDataGrp } from './set/commission_data_grp'
import { IStipulations } from './set/stipulations'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { IMatchExceptionGrp } from './set/match_exception_grp'
import { IMatchingDataPointGrp } from './set/matching_data_point_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IConfirmation {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ConfirmID: string// [2] 664 (String)
  ConfirmRefID?: string// [3] 772 (String)
  ConfirmReqID?: string// [4] 859 (String)
  ConfirmTransType: number// [5] 666 (Int)
  ConfirmType: number// [6] 773 (Int)
  CopyMsgIndicator?: boolean// [7] 797 (Boolean)
  LegalConfirm?: boolean// [8] 650 (Boolean)
  ConfirmStatus: number// [9] 665 (Int)
  MatchStatus?: string// [10] 573 (String)
  AffirmStatus?: number// [11] 940 (Int)
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [12] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  TradeConfirmationReferenceID?: string// [13] 2390 (String)
  ClearedIndicator?: number// [14] 1832 (Int)
  Parties?: IParties// [15] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  OrdAllocGrp?: IOrdAllocGrp// [16] NoOrders.73, ClOrdID.11 .. OrdType.40
  ExecAllocGrp?: IExecAllocGrp// [17] NoExecs.124, LastQty.32 .. TradePriceCondition.1839
  AllocID?: string// [18] 70 (String)
  SecondaryAllocID?: string// [19] 793 (String)
  IndividualAllocID?: string// [20] 467 (String)
  TrdType?: number// [21] 828 (Int)
  TrdSubType?: number// [22] 829 (Int)
  SecondaryTrdType?: number// [23] 855 (Int)
  TradeContinuation?: number// [24] 1937 (Int)
  TradeContinuationText?: string// [25] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [26] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [27] 2371 (RawData)
  MatchType?: string// [28] 574 (String)
  TransactTime: Date// [29] 60 (UtcTimestamp)
  TradeDate: Date// [30] 75 (LocalDate)
  TrdRegTimestamps?: ITrdRegTimestamps// [31] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  Instrument?: IInstrument// [32] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [33] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [34] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [35] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [36] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  YieldData?: IYieldData// [37] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  AllocQty: number// [38] 80 (Float)
  QtyType?: number// [39] 854 (Int)
  Side: string// [40] 54 (String)
  Currency?: string// [41] 15 (String)
  CurrencyCodeSource?: string// [42] 2897 (String)
  LastMkt?: string// [43] 30 (String)
  CpctyConfGrp?: ICpctyConfGrp// [44] NoCapacities.862, OrderCapacity.528 .. OrderCapacityQty.863
  AllocAccount: string// [45] 79 (String)
  AllocAcctIDSource?: number// [46] 661 (Int)
  AllocAccountType?: number// [47] 798 (Int)
  AvgPx: number// [48] 6 (Float)
  AvgPxPrecision?: number// [49] 74 (Int)
  PriceType?: number// [50] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [51] NoPriceQualifiers.2709, PriceQualifier.2710
  AvgParPx?: number// [52] 860 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [53] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  ReportedPx?: number// [54] 861 (Float)
  Text?: string// [55] 58 (String)
  EncodedTextLen?: number// [56] 354 (Length)
  EncodedText?: Buffer// [57] 355 (RawData)
  ProcessCode?: string// [58] 81 (String)
  GrossTradeAmt: number// [59] 381 (Float)
  NumDaysInterest?: number// [60] 157 (Int)
  ExDate?: Date// [61] 230 (LocalDate)
  AccruedInterestRate?: number// [62] 158 (Float)
  AccruedInterestAmt?: number// [63] 159 (Float)
  InterestAtMaturity?: number// [64] 738 (Float)
  EndAccruedInterestAmt?: number// [65] 920 (Float)
  StartCash?: number// [66] 921 (Float)
  EndCash?: number// [67] 922 (Float)
  Concession?: number// [68] 238 (Float)
  TotalTakedown?: number// [69] 237 (Float)
  NetMoney: number// [70] 118 (Float)
  MaturityNetMoney?: number// [71] 890 (Float)
  SettlCurrAmt?: number// [72] 119 (Float)
  SettlCurrency?: string// [73] 120 (String)
  SettlCurrencyCodeSource?: string// [74] 2899 (String)
  SettlCurrFxRate?: number// [75] 155 (Float)
  SettlCurrFxRateCalc?: string// [76] 156 (String)
  SettlType?: string// [77] 63 (String)
  SettlDate?: Date// [78] 64 (LocalDate)
  SettlInstructionsData?: ISettlInstructionsData// [79] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
  CommissionData?: ICommissionData// [80] Commission.12, CommType.13 .. FundRenewWaiv.497
  SharedCommission?: number// [81] 858 (Float)
  CommissionDataGrp?: ICommissionDataGrp// [82] NoCommissions.2639, CommissionAmount.2640 .. EncodedCommissionDesc.2652
  Stipulations?: IStipulations// [83] NoStipulations.232, StipulationType.233, StipulationValue.234
  MiscFeesGrp?: IMiscFeesGrp// [84] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeDesc.2713
  MatchExceptionGrp?: IMatchExceptionGrp// [85] NoMatchExceptions.2772, MatchExceptionType.2773 .. EncodedMatchExceptionText.2798
  MatchingDataPointGrp?: IMatchingDataPointGrp// [86] NoMatchingDataPoints.2781, MatchingDataPointIndicator.2782 .. MatchingDataPointName.2785
  StandardTrailer: IStandardTrailer// [87] SignatureLength.93, Signature.89, CheckSum.10
}
