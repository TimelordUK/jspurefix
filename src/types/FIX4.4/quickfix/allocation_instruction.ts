import { IStandardHeader } from './set/standard_header'
import { IOrdAllocGrp } from './set/ord_alloc_grp'
import { IExecAllocGrp } from './set/exec_alloc_grp'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IParties } from './set/parties'
import { IStipulations } from './set/stipulations'
import { IYieldData } from './set/yield_data'
import { IAllocGrp } from './set/alloc_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocationInstruction {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocID: string// [2] 70 (String)
  AllocTransType: string// [3] 71 (String)
  AllocType: number// [4] 626 (Int)
  SecondaryAllocID?: string// [5] 793 (String)
  RefAllocID?: string// [6] 72 (String)
  AllocCancReplaceReason?: number// [7] 796 (Int)
  AllocIntermedReqType?: number// [8] 808 (Int)
  AllocLinkID?: string// [9] 196 (String)
  AllocLinkType?: number// [10] 197 (Int)
  BookingRefID?: string// [11] 466 (String)
  AllocNoOrdersType: number// [12] 857 (Int)
  OrdAllocGrp?: IOrdAllocGrp// [13] NoOrders.73, ClOrdID.11 .. OrderBookingQty.800
  ExecAllocGrp?: IExecAllocGrp// [14] NoExecs.124, LastQty.32 .. LastCapacity.29
  PreviouslyReported?: boolean// [15] 570 (Boolean)
  ReversalIndicator?: boolean// [16] 700 (Boolean)
  MatchType?: string// [17] 574 (String)
  Side: string// [18] 54 (String)
  Instrument?: IInstrument// [19] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  InstrumentExtension?: IInstrumentExtension// [20] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  FinancingDetails?: IFinancingDetails// [21] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [22] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp// [23] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  Quantity: number// [24] 53 (Float)
  QtyType?: number// [25] 854 (Int)
  LastMkt?: string// [26] 30 (String)
  TradeOriginationDate?: Date// [27] 229 (LocalDate)
  TradingSessionID?: string// [28] 336 (String)
  TradingSessionSubID?: string// [29] 625 (String)
  PriceType?: number// [30] 423 (Int)
  AvgPx: number// [31] 6 (Float)
  AvgParPx?: number// [32] 860 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [33] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Currency?: string// [34] 15 (String)
  AvgPxPrecision?: number// [35] 74 (Int)
  Parties?: IParties// [36] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeDate: Date// [37] 75 (LocalDate)
  TransactTime?: Date// [38] 60 (UtcTimestamp)
  SettlType?: string// [39] 63 (String)
  SettlDate?: Date// [40] 64 (LocalDate)
  BookingType?: number// [41] 775 (Int)
  GrossTradeAmt?: number// [42] 381 (Float)
  Concession?: number// [43] 238 (Float)
  TotalTakedown?: number// [44] 237 (Float)
  NetMoney?: number// [45] 118 (Float)
  PositionEffect?: string// [46] 77 (String)
  AutoAcceptIndicator?: boolean// [47] 754 (Boolean)
  Text?: string// [48] 58 (String)
  EncodedTextLen?: number// [49] 354 (Length)
  EncodedText?: Buffer// [50] 355 (RawData)
  NumDaysInterest?: number// [51] 157 (Int)
  AccruedInterestRate?: number// [52] 158 (Float)
  AccruedInterestAmt?: number// [53] 159 (Float)
  TotalAccruedInterestAmt?: number// [54] 540 (Float)
  InterestAtMaturity?: number// [55] 738 (Float)
  EndAccruedInterestAmt?: number// [56] 920 (Float)
  StartCash?: number// [57] 921 (Float)
  EndCash?: number// [58] 922 (Float)
  LegalConfirm?: boolean// [59] 650 (Boolean)
  Stipulations?: IStipulations// [60] NoStipulations.232, StipulationType.233, StipulationValue.234
  YieldData?: IYieldData// [61] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  TotNoAllocs?: number// [62] 892 (Int)
  LastFragment?: boolean// [63] 893 (Boolean)
  AllocGrp?: IAllocGrp// [64] NoAllocs.78, AllocAccount.79 .. SettlPartySubIDType.786
  StandardTrailer: IStandardTrailer// [65] SignatureLength.93, Signature.89, CheckSum.10
}
