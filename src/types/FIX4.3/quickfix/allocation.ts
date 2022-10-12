import { IStandardHeader } from './set/standard_header'
import { IAllocationNoOrders } from './set/allocation_no_orders'
import { IAllocationNoExecs } from './set/allocation_no_execs'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
import { IAllocationNoAllocs } from './set/allocation_no_allocs'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocation {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocID: string// [2] 70 (String)
  AllocTransType: string// [3] 71 (String)
  AllocType: number// [4] 626 (Int)
  RefAllocID?: string// [5] 72 (String)
  AllocLinkID?: string// [6] 196 (String)
  AllocLinkType?: number// [7] 197 (Int)
  BookingRefID?: string// [8] 466 (String)
  NoOrders?: IAllocationNoOrders[]// [9] ClOrdID.11, OrderID.37 .. ListID.66
  NoExecs?: IAllocationNoExecs[]// [10] LastQty.32, ExecID.17 .. LastCapacity.29
  Side: string// [11] 54 (String)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Quantity: number// [13] 53 (Float)
  LastMkt?: string// [14] 30 (String)
  TradeOriginationDate?: string// [15] 229 (String)
  TradingSessionID?: string// [16] 336 (String)
  TradingSessionSubID?: string// [17] 625 (String)
  PriceType?: number// [18] 423 (Int)
  AvgPx: number// [19] 6 (Float)
  Currency?: string// [20] 15 (String)
  AvgPrxPrecision?: number// [21] 74 (Int)
  Parties?: IParties// [22] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  TradeDate: Date// [23] 75 (LocalDate)
  TransactTime?: Date// [24] 60 (UtcTimestamp)
  SettlmntTyp?: string// [25] 63 (String)
  FutSettDate?: Date// [26] 64 (LocalDate)
  GrossTradeAmt?: number// [27] 381 (Float)
  Concession?: number// [28] 238 (Float)
  TotalTakedown?: number// [29] 237 (Float)
  NetMoney?: number// [30] 118 (Float)
  PositionEffect?: string// [31] 77 (String)
  Text?: string// [32] 58 (String)
  EncodedTextLen?: number// [33] 354 (Length)
  EncodedText?: Buffer// [34] 355 (RawData)
  NumDaysInterest?: number// [35] 157 (Int)
  AccruedInterestRate?: number// [36] 158 (Float)
  TotalAccruedInterestAmt?: number// [37] 540 (Float)
  LegalConfirm?: boolean// [38] 650 (Boolean)
  NoAllocs?: IAllocationNoAllocs[]// [39] AllocAccount.79, AllocPrice.366 .. MiscFeeType.139
  StandardTrailer: IStandardTrailer// [40] SignatureLength.93, Signature.89, CheckSum.10
}
