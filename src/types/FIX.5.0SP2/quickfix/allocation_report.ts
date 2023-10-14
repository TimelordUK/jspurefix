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
import { IPositionAmountData } from './set/position_amount_data'
import { IAllocGrp } from './set/alloc_grp'
import { IStandardTrailer } from './set/standard_trailer'
import { IRateSource } from './set/rate_source'

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
  ClearingBusinessDate?: Date// [16] 715 (LocalDate)
  TrdType?: number// [17] 828 (Int)
  TrdSubType?: number// [18] 829 (Int)
  MultiLegReportingType?: string// [19] 442 (String)
  CustOrderCapacity?: number// [20] 582 (Int)
  TradeInputSource?: string// [21] 578 (String)
  RndPx?: number// [22] 991 (Float)
  MessageEventSource?: string// [23] 1011 (String)
  TradeInputDevice?: string// [24] 579 (String)
  AvgPxIndicator?: number// [25] 819 (Int)
  AllocNoOrdersType?: number// [26] 857 (Int)
  OrdAllocGrp?: IOrdAllocGrp[]// [27] ClOrdID.11, OrderID.37 .. OrderBookingQty.800
  ExecAllocGrp?: IExecAllocGrp[]// [28] LastQty.32, ExecID.17 .. FirmTradeID.1041
  PreviouslyReported?: boolean// [29] 570 (Boolean)
  ReversalIndicator?: boolean// [30] 700 (Boolean)
  MatchType?: string// [31] 574 (String)
  Side: string// [32] 54 (String)
  Instrument: IInstrument// [33] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrumentExtension?: IInstrumentExtension// [34] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  FinancingDetails?: IFinancingDetails// [35] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [36] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [37] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  Quantity: number// [38] 53 (Float)
  QtyType?: number// [39] 854 (Int)
  LastMkt?: string// [40] 30 (String)
  TradeOriginationDate?: Date// [41] 229 (LocalDate)
  TradingSessionID?: string// [42] 336 (String)
  TradingSessionSubID?: string// [43] 625 (String)
  PriceType?: number// [44] 423 (Int)
  AvgPx: number// [45] 6 (Float)
  AvgParPx?: number// [46] 860 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [47] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Currency?: string// [48] 15 (String)
  AvgPxPrecision?: number// [49] 74 (Int)
  Parties?: IParties[]// [50] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeDate: Date// [51] 75 (LocalDate)
  TransactTime?: Date// [52] 60 (UtcTimestamp)
  SettlType?: string// [53] 63 (String)
  SettlDate?: Date// [54] 64 (LocalDate)
  BookingType?: number// [55] 775 (Int)
  GrossTradeAmt?: number// [56] 381 (Float)
  Concession?: number// [57] 238 (Float)
  TotalTakedown?: number// [58] 237 (Float)
  NetMoney?: number// [59] 118 (Float)
  PositionEffect?: string// [60] 77 (String)
  AutoAcceptIndicator?: boolean// [61] 754 (Boolean)
  Text?: string// [62] 58 (String)
  EncodedTextLen?: number// [63] 354 (Int)
  EncodedText?: Buffer// [64] 355 (RawData)
  NumDaysInterest?: number// [65] 157 (Int)
  AccruedInterestRate?: number// [66] 158 (Float)
  AccruedInterestAmt?: number// [67] 159 (Float)
  TotalAccruedInterestAmt?: number// [68] 540 (Float)
  InterestAtMaturity?: number// [69] 738 (Float)
  EndAccruedInterestAmt?: number// [70] 920 (Float)
  StartCash?: number// [71] 921 (Float)
  EndCash?: number// [72] 922 (Float)
  LegalConfirm?: boolean// [73] 650 (Boolean)
  Stipulations?: IStipulations[]// [74] StipulationType.233, StipulationValue.234
  YieldData?: IYieldData// [75] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  PositionAmountData?: IPositionAmountData[]// [76] PosAmtType.707, PosAmt.708, PositionCurrency.1055
  TotNoAllocs?: number// [77] 892 (Int)
  LastFragment?: boolean// [78] 893 (Boolean)
  AllocGrp?: IAllocGrp[]// [79] AllocAccount.79, AllocAcctIDSource.661 .. SettlPartySubIDType.786
  StandardTrailer: IStandardTrailer// [80] SignatureLength.93, Signature.89, CheckSum.10
  RateSource?: IRateSource[]// [81] RateSource.1446, RateSourceType.1447, ReferencePage.1448
}
