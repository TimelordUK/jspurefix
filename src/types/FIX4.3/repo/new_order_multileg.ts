import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrumentLeg } from './set/instrument_leg'
import { INestedParties } from './set/nested_parties'
import { IOrderQtyData } from './set/order_qty_data'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The New Order - Multileg is provided to submit orders for    *
* securities that are made up of multiple securities, known as *
* legs.                                                        *
****************************************************************
*/
export interface INewOrderMultileg {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ClOrdID: string// [2] 11 (String)
  Parties?: IParties[]// [3] 
  Account?: string// [4] 1 (String)
  NoAllocs?: number// [5] 78 (Int)
  AllocAccount?: string// [6] 79 (String)
  AllocShares?: number// [7] 80 (Float)
  SettlmntTyp?: string// [8] 63 (String)
  FutSettDate?: Date// [9] 64 (LocalDate)
  HandlInst: string// [10] 21 (String)
  ExecInst?: string// [11] 18 (String)
  MinQty?: number// [12] 110 (Float)
  MaxFloor?: number// [13] 111 (Float)
  ExDestination?: string// [14] 100 (String)
  NoTradingSessions?: number// [15] 386 (Int)
  TradingSessionID?: string// [16] 336 (String)
  ProcessCode?: string// [17] 81 (String)
  Side: string// [18] 54 (String)
  Instrument: IInstrument// [19] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [20] 140 (Float)
  InstrumentLeg?: IInstrumentLeg// [21] 
  NestedParties?: INestedParties[]// [22] 
  LocateReqd?: boolean// [23] 114 (Boolean)
  TransactTime: Date// [24] 60 (UtcTimestamp)
  OrderQtyData: IOrderQtyData// [25] OrderQty.38, CashOrderQty.152
  OrdType: string// [26] 40 (String)
  PriceType?: number// [27] 423 (Int)
  Price?: number// [28] 44 (Float)
  StopPx?: number// [29] 99 (Float)
  Currency?: string// [30] 15 (String)
  ComplianceID?: string// [31] 376 (String)
  SolicitedFlag?: boolean// [32] 377 (Boolean)
  IOIid?: string// [33] 23 (String)
  QuoteID?: string// [34] 117 (String)
  TimeInForce?: string// [35] 59 (String)
  EffectiveTime?: Date// [36] 168 (UtcTimestamp)
  ExpireDate?: Date// [37] 432 (LocalDate)
  ExpireTime?: Date// [38] 126 (UtcTimestamp)
  GTBookingInst?: number// [39] 427 (Int)
  CommissionData?: ICommissionData// [40] Commission.12, CommType.13
  ForexReq?: boolean// [41] 121 (Boolean)
  SettlCurrency?: string// [42] 120 (String)
  Text?: string// [43] 58 (String)
  EncodedTextLen?: number// [44] 354 (Int)
  EncodedText?: Buffer// [45] 355 (RawData)
  OpenClose?: string// [46] 77 (String)
  CoveredOrUncovered?: number// [47] 203 (Int)
  MaxShow?: number// [48] 210 (Float)
  PegDifference?: number// [49] 211 (Float)
  DiscretionInst?: string// [50] 388 (String)
  DiscretionOffset?: number// [51] 389 (Float)
  NetMoney?: number// [52] 118 (Float)
  StandardTrailer: IStandardTrailer// [53] SignatureLength.93, Signature.89, CheckSum.10
}
