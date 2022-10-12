import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
import { INestedParties } from './set/nested_parties'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Allocation message provides the ability to specify how *
* an order or set of orders should be subdivided amongst one *
* or more accounts.                                          *
**************************************************************
*/
export interface IAllocation {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  AllocID: string// [2] 70 (String)
  AllocTransType: string// [3] 71 (String)
  RefAllocID?: string// [4] 72 (String)
  AllocLinkID?: string// [5] 196 (String)
  AllocLinkType?: number// [6] 197 (Int)
  NoOrders?: number// [7] 73 (Int)
  ClOrdID?: string// [8] 11 (String)
  OrderID?: string// [9] 37 (String)
  SecondaryOrderID?: string// [10] 198 (String)
  ListID?: string// [11] 66 (String)
  NoExecs?: number// [12] 124 (Int)
  LastShares?: number// [13] 32 (Float)
  ExecID?: string// [14] 17 (String)
  LastPx?: number// [15] 31 (Float)
  LastCapacity?: string// [16] 29 (String)
  Side: string// [17] 54 (String)
  Instrument: IInstrument// [18] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Shares: number// [19] 53 (Float)
  LastMkt?: string// [20] 30 (String)
  TradingSessionID?: string// [21] 336 (String)
  PriceType?: number// [22] 423 (Int)
  AvgPx: number// [23] 6 (Float)
  Currency?: string// [24] 15 (String)
  AvgPrxPrecision?: number// [25] 74 (Int)
  Parties?: IParties[]// [26] 
  TradeDate: Date// [27] 75 (LocalDate)
  TransactTime?: Date// [28] 60 (UtcTimestamp)
  SettlmntTyp?: string// [29] 63 (String)
  FutSettDate?: Date// [30] 64 (LocalDate)
  GrossTradeAmt?: number// [31] 381 (Float)
  NetMoney?: number// [32] 118 (Float)
  OpenClose?: string// [33] 77 (String)
  Text?: string// [34] 58 (String)
  EncodedTextLen?: number// [35] 354 (Int)
  EncodedText?: Buffer// [36] 355 (RawData)
  NumDaysInterest?: number// [37] 157 (Int)
  AccruedInterestRate?: number// [38] 158 (Float)
  NoAllocs?: number// [39] 78 (Int)
  AllocAccount?: string// [40] 79 (String)
  AllocPrice?: number// [41] 366 (Float)
  AllocShares?: number// [42] 80 (Float)
  ProcessCode?: string// [43] 81 (String)
  NestedParties?: INestedParties[]// [44] 
  NotifyBrokerOfCredit?: boolean// [45] 208 (Boolean)
  AllocHandlInst?: number// [46] 209 (Int)
  AllocText?: string// [47] 161 (String)
  EncodedAllocTextLen?: number// [48] 360 (Int)
  EncodedAllocText?: Buffer// [49] 361 (RawData)
  CommissionData?: ICommissionData// [50] Commission.12, CommType.13
  AllocAvgPx?: number// [51] 153 (Float)
  AllocNetMoney?: number// [52] 154 (Float)
  SettlCurrAmt?: number// [53] 119 (Float)
  SettlCurrency?: string// [54] 120 (String)
  SettlCurrFxRate?: number// [55] 155 (Float)
  SettlCurrFxRateCalc?: string// [56] 156 (String)
  AccruedInterestAmt?: number// [57] 159 (Float)
  SettlInstMode?: string// [58] 160 (String)
  NoMiscFees?: number// [59] 136 (Int)
  MiscFeeAmt?: number// [60] 137 (Float)
  MiscFeeCurr?: string// [61] 138 (String)
  MiscFeeType?: string// [62] 139 (String)
  StandardTrailer: IStandardTrailer// [63] SignatureLength.93, Signature.89, CheckSum.10
}
