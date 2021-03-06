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
***************************************************************
* The Allocation Instruction message provides the ability to  *
* specify how an order or set of orders should be subdivided  *
* amongst one or more accounts. In versions of FIX prior to   *
* version 4.4, this same message was known as the Allocation  *
* message. Note in versions of FIX prior to version 4.4, the  *
* allocation message was also used to communicate fee and     *
* expense details from the Sellside to the Buyside. This role *
* has now been removed from the Allocation Instruction and is *
* now performed by the new (to version 4.4) Allocation Report *
* and Confirmation messages.,The Allocation Report message    *
* should be used for the Sell-side Initiated Allocation role  *
* as defined in previous versions of the protocol.            *
***************************************************************
*/
export interface IAllocationInstruction {
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
  AllocNoOrdersType: number// 857
  OrdAllocGrp?: IOrdAllocGrp[]
  ExecAllocGrp?: IExecAllocGrp[]
  PreviouslyReported?: boolean// 570
  ReversalIndicator?: boolean// 700
  MatchType?: string// 574
  Side: string// 54
  Instrument: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  Quantity: number// 53
  QtyType?: number// 854
  LastMkt?: string// 30
  TradeOriginationDate?: Date// 229
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  PriceType?: number// 423
  AvgPx: number// 6
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
  TotNoAllocs?: number// 892
  LastFragment?: boolean// 893
  AllocGrp?: IAllocGrp[]
  StandardTrailer: IStandardTrailer
}
