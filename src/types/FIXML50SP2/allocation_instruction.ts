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
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IPositionAmountData } from './set/position_amount_data'
import { IAllocGrp } from './set/alloc_grp'
import { IRateSource } from './set/rate_source'

/*
*********************************************************
* AllocationInstruction can be found in Volume 5 of the *
*                                                       *
* specification                                         *
*********************************************************
*/
export interface IAllocationInstruction {
  AllocID: string// [2] 70 (String)
  AllocTransType: string// [2] 71 (String)
  AllocType: number// [2] 626 (Int)
  SecondaryAllocID?: string// [2] 793 (String)
  RefAllocID?: string// [2] 72 (String)
  AllocCancReplaceReason?: number// [2] 796 (Int)
  AllocIntermedReqType?: number// [2] 808 (Int)
  AllocLinkID?: string// [2] 196 (String)
  AllocLinkType?: number// [2] 197 (Int)
  AllocGroupID?: string// [2] 1730 (String)
  FirmGroupID?: string// [2] 1728 (String)
  BookingRefID?: string// [2] 466 (String)
  AllocNoOrdersType?: number// [2] 857 (Int)
  PreviouslyReported?: boolean// [2] 570 (Boolean)
  ReversalIndicator?: boolean// [2] 700 (Boolean)
  MatchType?: string// [2] 574 (String)
  Side: string// [2] 54 (String)
  Quantity: number// [2] 53 (Float)
  QtyType?: number// [2] 854 (Int)
  LastMkt?: string// [2] 30 (String)
  TradeOriginationDate?: Date// [2] 229 (LocalDate)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  PriceType?: number// [2] 423 (Int)
  AvgPx?: number// [2] 6 (Float)
  AvgParPx?: number// [2] 860 (Float)
  Currency?: string// [2] 15 (String)
  AvgPxPrecision?: number// [2] 74 (Int)
  TradeDate: Date// [2] 75 (LocalDate)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  SettlType?: string// [2] 63 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  BookingType?: number// [2] 775 (Int)
  GrossTradeAmt?: number// [2] 381 (Float)
  Concession?: number// [2] 238 (Float)
  TotalTakedown?: number// [2] 237 (Float)
  NetMoney?: number// [2] 118 (Float)
  PositionEffect?: string// [2] 77 (String)
  AutoAcceptIndicator?: boolean// [2] 754 (Boolean)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  NumDaysInterest?: number// [2] 157 (Int)
  AccruedInterestRate?: number// [2] 158 (Float)
  AccruedInterestAmt?: number// [2] 159 (Float)
  TotalAccruedInterestAmt?: number// [2] 540 (Float)
  InterestAtMaturity?: number// [2] 738 (Float)
  EndAccruedInterestAmt?: number// [2] 920 (Float)
  StartCash?: number// [2] 921 (Float)
  EndCash?: number// [2] 922 (Float)
  LegalConfirm?: boolean// [2] 650 (Boolean)
  TotNoAllocs?: number// [2] 892 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  AvgPxIndicator?: number// [2] 819 (Int)
  AvgPxGroupID?: string// [2] 1731 (String)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  TrdType?: number// [2] 828 (Int)
  TrdSubType?: number// [2] 829 (Int)
  PostTradeType?: number// [2] 60001 (Int)
  ExecutingClaimingIndicator?: number// [2] 60002 (Int)
  CustOrderCapacity?: number// [2] 582 (Int)
  TradeInputSource?: string// [2] 578 (String)
  MultiLegReportingType?: string// [2] 442 (String)
  MessageEventSource?: string// [2] 1011 (String)
  RndPx?: number// [2] 991 (Float)
  VenueType?: string// [2] 1430 (String)
  RefRiskLimitCheckID?: string// [2] 2334 (String)
  RefRiskLimitCheckIDType?: number// [2] 2335 (Int)
  RiskLimitCheckStatus?: number// [2] 2343 (Int)
  ClearDate?: Date// [2] 60003 (LocalDate)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  OrdAllocGrp?: IOrdAllocGrp[]// [2] ClOrdID.11, OrdID.37 .. BkngQty.800
  ExecAllocGrp?: IExecAllocGrp[]// [3] LastQty.32, ExecID.17 .. FirmTrdID.1041
  Instrument?: IInstrument// [4] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [5] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [6] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [7] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [8] Sym.600, Sfx.601 .. ExchLookAlike.2607
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [9] Spread.218, Ccy.220 .. SecIDSrc.761
  Parties?: IParties[]// [10] ID.448, Src.447 .. Qual.2376
  Stipulations?: IStipulations[]// [11] Typ.233, Val.234
  YieldData?: IYieldData// [12] Typ.235, Yld.236 .. RedPxTyp.698
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]// [13] ID.1903, Src.1905 .. Scope.2397
  PositionAmountData?: IPositionAmountData[]// [14] Typ.707, Amt.708 .. MktID.2100
  AllocGrp?: IAllocGrp[]// [15] Acct.79, ActIDSrc.661 .. OrigTrdID2.60006
  RateSource?: IRateSource[]// [16] RtSrc.1446, RtSrcTyp.1447 .. RefHdng.2412
}
