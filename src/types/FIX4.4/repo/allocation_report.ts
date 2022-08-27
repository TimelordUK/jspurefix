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

/*
****************************************************************
* Sent from sell-side to buy-side, sell-side to 3rd-party or   *
* 3rd-party to buy-side, the Allocation Report (Claim)         *
* provides account breakdown of an order or set of orders plus *
* any additional follow-up front-office information developed  *
* post-trade during the trade allocation, matching and         *
* calculation phase. In versions of FIX prior to version 4.4,  *
* this functionality was provided through the Allocation       *
* message. Depending on the needs of the market and the timing *
* of "confirmed" status, the role of Allocation Report can be  *
* taken over in whole or in part by the Confirmation message.  *
* Note the response to the Allocation Report message is the    *
* Allocation Report Ack message. In versions of FIX prior to   *
* version 4.4, the Allocation ACK served this purpose.         *
****************************************************************
*/
export interface IAllocationReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocReportID: string// [2] 755 (String)
  AllocID?: string// [3] 70 (String)
  AllocTransType: string// [4] 71 (String)
  AllocReportRefID?: string// [5] 795 (String)
  AllocCancReplaceReason?: number// [6] 796 (Int)
  SecondaryAllocID?: string// [7] 793 (String)
  AllocReportType: number// [8] 794 (Int)
  AllocStatus: number// [9] 87 (Int)
  AllocRejCode?: number// [10] 88 (Int)
  RefAllocID?: string// [11] 72 (String)
  AllocIntermedReqType?: number// [12] 808 (Int)
  AllocLinkID?: string// [13] 196 (String)
  AllocLinkType?: number// [14] 197 (Int)
  BookingRefID?: string// [15] 466 (String)
  AllocNoOrdersType: number// [16] 857 (Int)
  OrdAllocGrp?: IOrdAllocGrp[]// [17] ClOrdID.11, OrderID.37 .. OrderBookingQty.800
  ExecAllocGrp?: IExecAllocGrp[]// [18] LastQty.32, ExecID.17 .. LastCapacity.29
  PreviouslyReported?: boolean// [19] 570 (Boolean)
  ReversalIndicator?: boolean// [20] 700 (Boolean)
  MatchType?: string// [21] 574 (String)
  Side: string// [22] 54 (String)
  Instrument: IInstrument// [23] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  InstrumentExtension?: IInstrumentExtension// [24] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  FinancingDetails?: IFinancingDetails// [25] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [26] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp[]// [27] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  Quantity: number// [28] 53 (Float)
  QtyType?: number// [29] 854 (Int)
  LastMkt?: string// [30] 30 (String)
  TradeOriginationDate?: Date// [31] 229 (LocalDate)
  TradingSessionID?: string// [32] 336 (String)
  TradingSessionSubID?: string// [33] 625 (String)
  PriceType?: number// [34] 423 (Int)
  AvgPx: number// [35] 6 (Float)
  AvgParPx?: number// [36] 860 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [37] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Currency?: string// [38] 15 (String)
  AvgPxPrecision?: number// [39] 74 (Int)
  Parties?: IParties[]// [40] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeDate: Date// [41] 75 (LocalDate)
  TransactTime?: Date// [42] 60 (UtcTimestamp)
  SettlType?: string// [43] 63 (String)
  SettlDate?: Date// [44] 64 (LocalDate)
  BookingType?: number// [45] 775 (Int)
  GrossTradeAmt?: number// [46] 381 (Float)
  Concession?: number// [47] 238 (Float)
  TotalTakedown?: number// [48] 237 (Float)
  NetMoney?: number// [49] 118 (Float)
  PositionEffect?: string// [50] 77 (String)
  AutoAcceptIndicator?: boolean// [51] 754 (Boolean)
  Text?: string// [52] 58 (String)
  EncodedTextLen?: number// [53] 354 (Int)
  EncodedText?: Buffer// [54] 355 (RawData)
  NumDaysInterest?: number// [55] 157 (Int)
  AccruedInterestRate?: number// [56] 158 (Float)
  AccruedInterestAmt?: number// [57] 159 (Float)
  TotalAccruedInterestAmt?: number// [58] 540 (Float)
  InterestAtMaturity?: number// [59] 738 (Float)
  EndAccruedInterestAmt?: number// [60] 920 (Float)
  StartCash?: number// [61] 921 (Float)
  EndCash?: number// [62] 922 (Float)
  LegalConfirm?: boolean// [63] 650 (Boolean)
  Stipulations?: IStipulations[]// [64] StipulationType.233, StipulationValue.234
  YieldData?: IYieldData// [65] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  TotNoAllocs?: number// [66] 892 (Int)
  LastFragment?: boolean// [67] 893 (Boolean)
  AllocGrp?: IAllocGrp[]// [68] AllocAccount.79, AllocAcctIDSource.661 .. SettlPartySubIDType.786
  StandardTrailer: IStandardTrailer// [69] SignatureLength.93, Signature.89, CheckSum.10
}
