import { IStandardHeader } from './set/standard_header'
import { IAllocationNoOrders } from './set/allocation_no_orders'
import { IAllocationNoExecs } from './set/allocation_no_execs'
import { IAllocationNoAllocs } from './set/allocation_no_allocs'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocation {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  AllocID: string// [2] 70 (String)
  AllocTransType: string// [3] 71 (String)
  RefAllocID?: string// [4] 72 (String)
  AllocLinkID?: string// [5] 196 (String)
  AllocLinkType?: number// [6] 197 (Int)
  NoOrders?: IAllocationNoOrders[]// [7] ClOrdID.11, OrderID.37 .. WaveNo.105
  NoExecs?: IAllocationNoExecs[]// [8] LastShares.32, ExecID.17 .. LastCapacity.29
  Side: string// [9] 54 (String)
  Symbol: string// [10] 55 (String)
  SymbolSfx?: string// [11] 65 (String)
  SecurityID?: string// [12] 48 (String)
  IDSource?: string// [13] 22 (String)
  SecurityType?: string// [14] 167 (String)
  MaturityMonthYear?: string// [15] 200 (String)
  MaturityDay?: string// [16] 205 (String)
  PutOrCall?: number// [17] 201 (Int)
  StrikePrice?: number// [18] 202 (Float)
  OptAttribute?: string// [19] 206 (String)
  ContractMultiplier?: number// [20] 231 (Float)
  CouponRate?: number// [21] 223 (Float)
  SecurityExchange?: string// [22] 207 (String)
  Issuer?: string// [23] 106 (String)
  EncodedIssuerLen?: number// [24] 348 (Length)
  EncodedIssuer?: Buffer// [25] 349 (RawData)
  SecurityDesc?: string// [26] 107 (String)
  EncodedSecurityDescLen?: number// [27] 350 (Length)
  EncodedSecurityDesc?: Buffer// [28] 351 (RawData)
  Shares: number// [29] 53 (Float)
  LastMkt?: string// [30] 30 (String)
  TradingSessionID?: string// [31] 336 (String)
  AvgPx: number// [32] 6 (Float)
  Currency?: string// [33] 15 (String)
  AvgPrxPrecision?: number// [34] 74 (Int)
  TradeDate: Date// [35] 75 (LocalDate)
  TransactTime?: Date// [36] 60 (UtcTimestamp)
  SettlmntTyp?: string// [37] 63 (String)
  FutSettDate?: Date// [38] 64 (LocalDate)
  GrossTradeAmt?: number// [39] 381 (Float)
  NetMoney?: number// [40] 118 (Float)
  OpenClose?: string// [41] 77 (String)
  Text?: string// [42] 58 (String)
  EncodedTextLen?: number// [43] 354 (Length)
  EncodedText?: Buffer// [44] 355 (RawData)
  NumDaysInterest?: number// [45] 157 (Int)
  AccruedInterestRate?: number// [46] 158 (Float)
  NoAllocs?: IAllocationNoAllocs[]// [47] AllocAccount.79, AllocPrice.366 .. MiscFeeType.139
  StandardTrailer: IStandardTrailer// [48] SignatureLength.93, Signature.89, CheckSum.10
}
