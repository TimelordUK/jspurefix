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

/*
***************************************************************
* This message is used in a 3-party allocation model where    *
* notification of group creation and group updates to         *
* counterparties is needed. The mssage will also carry trade  *
* information that comprised the group to the counterparties. *
***************************************************************
*/
export interface IAllocationInstructionAlert {
  StandardHeader: IStandardHeader
  AllocID: string// 70
  AllocTransType: string// 71
  AllocType: number// 626
  SecondaryAllocID?: string// 793
  RefAllocID?: string// 72
  AllocCancReplaceReason?: number// 796
  AllocIntermedReqType?: number// 808
  AllocLinkID?: string// 196
  AllocLinkType?: number// 197
  BookingRefID?: string// 466
  AllocNoOrdersType?: number// 857
  OrdAllocGrp?: IOrdAllocGrp[]
  ExecAllocGrp?: IExecAllocGrp[]
  PreviouslyReported?: boolean// 570
  ReversalIndicator?: boolean// 700
  MatchType?: string// 574
  Side: string// 54
  Instrument: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  Quantity: number// 53
  QtyType?: number// 854
  LastMkt?: string// 30
  TradeOriginationDate?: Date// 229
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  PriceType?: number// 423
  AvgPx?: number// 6
  AvgParPx?: number// 860
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  Currency?: string// 15
  AvgPxPrecision?: number// 74
  Parties?: IParties[]
  TradeDate: Date// 75
  TransactTime?: Date// 60
  SettlType?: string// 63
  SettlDate?: Date// 64
  BookingType?: number// 775
  GrossTradeAmt?: number// 381
  Concession?: number// 238
  TotalTakedown?: number// 237
  NetMoney?: number// 118
  PositionEffect?: string// 77
  AutoAcceptIndicator?: boolean// 754
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  NumDaysInterest?: number// 157
  AccruedInterestRate?: number// 158
  AccruedInterestAmt?: number// 159
  TotalAccruedInterestAmt?: number// 540
  InterestAtMaturity?: number// 738
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  LegalConfirm?: boolean// 650
  Stipulations?: IStipulations[]
  YieldData?: IYieldData
  PositionAmountData?: IPositionAmountData[]
  TotNoAllocs?: number// 892
  LastFragment?: boolean// 893
  AllocGrp?: IAllocGrp[]
  AvgPxIndicator?: number// 819
  ClearingBusinessDate?: Date// 715
  TrdType?: number// 828
  TrdSubType?: number// 829
  CustOrderCapacity?: number// 582
  TradeInputSource?: string// 578
  MultiLegReportingType?: string// 442
  MessageEventSource?: string// 1011
  RndPx?: number// 991
  StandardTrailer: IStandardTrailer
}
