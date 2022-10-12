import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrumentLeg } from './set/instrument_leg'
import { INestedParties } from './set/nested_parties'
import { IOrderQtyData } from './set/order_qty_data'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* Used to modify a multileg order previously submitted using *
* the New Order - Multileg message.                          *
**************************************************************
*/
export interface IMultilegOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrderID?: string// [2] 37 (String)
  OrigClOrdID: string// [3] 41 (String)
  ClOrdID: string// [4] 11 (String)
  Parties?: IParties[]// [5] 
  Account?: string// [6] 1 (String)
  NoAllocs?: number// [7] 78 (Int)
  AllocAccount?: string// [8] 79 (String)
  AllocShares?: number// [9] 80 (Float)
  SettlmntTyp?: string// [10] 63 (String)
  FutSettDate?: Date// [11] 64 (LocalDate)
  HandlInst: string// [12] 21 (String)
  ExecInst?: string// [13] 18 (String)
  MinQty?: number// [14] 110 (Float)
  MaxFloor?: number// [15] 111 (Float)
  ExDestination?: string// [16] 100 (String)
  NoTradingSessions?: number// [17] 386 (Int)
  TradingSessionID?: string// [18] 336 (String)
  ProcessCode?: string// [19] 81 (String)
  Side: string// [20] 54 (String)
  Instrument: IInstrument// [21] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [22] 140 (Float)
  InstrumentLeg?: IInstrumentLeg// [23] 
  NestedParties?: INestedParties[]// [24] 
  LocateReqd?: boolean// [25] 114 (Boolean)
  TransactTime: Date// [26] 60 (UtcTimestamp)
  OrderQtyData: IOrderQtyData// [27] OrderQty.38, CashOrderQty.152
  OrdType: string// [28] 40 (String)
  PriceType?: number// [29] 423 (Int)
  Price?: number// [30] 44 (Float)
  StopPx?: number// [31] 99 (Float)
  Currency?: string// [32] 15 (String)
  ComplianceID?: string// [33] 376 (String)
  SolicitedFlag?: boolean// [34] 377 (Boolean)
  IOIid?: string// [35] 23 (String)
  QuoteID?: string// [36] 117 (String)
  TimeInForce?: string// [37] 59 (String)
  EffectiveTime?: Date// [38] 168 (UtcTimestamp)
  ExpireDate?: Date// [39] 432 (LocalDate)
  ExpireTime?: Date// [40] 126 (UtcTimestamp)
  GTBookingInst?: number// [41] 427 (Int)
  CommissionData?: ICommissionData// [42] Commission.12, CommType.13
  ForexReq?: boolean// [43] 121 (Boolean)
  SettlCurrency?: string// [44] 120 (String)
  Text?: string// [45] 58 (String)
  EncodedTextLen?: number// [46] 354 (Int)
  EncodedText?: Buffer// [47] 355 (RawData)
  OpenClose?: string// [48] 77 (String)
  CoveredOrUncovered?: number// [49] 203 (Int)
  MaxShow?: number// [50] 210 (Float)
  PegDifference?: number// [51] 211 (Float)
  DiscretionInst?: string// [52] 388 (String)
  DiscretionOffset?: number// [53] 389 (Float)
  NetMoney?: number// [54] 118 (Float)
  StandardTrailer: IStandardTrailer// [55] SignatureLength.93, Signature.89, CheckSum.10
}
