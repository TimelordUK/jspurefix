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
  StandardHeader: IStandardHeader
  OrderID?: string// 37
  OrigClOrdID: string// 41
  ClOrdID: string// 11
  Parties?: IParties[]
  Account?: string// 1
  NoAllocs?: number// 78
  AllocAccount?: string// 79
  AllocShares?: number// 80
  SettlmntTyp?: string// 63
  FutSettDate?: Date// 64
  HandlInst: string// 21
  ExecInst?: string// 18
  MinQty?: number// 110
  MaxFloor?: number// 111
  ExDestination?: string// 100
  NoTradingSessions?: number// 386
  TradingSessionID?: string// 336
  ProcessCode?: string// 81
  Side: string// 54
  Instrument: IInstrument
  PrevClosePx?: number// 140
  InstrumentLeg?: IInstrumentLeg
  NestedParties?: INestedParties[]
  LocateReqd?: boolean// 114
  TransactTime: Date// 60
  OrderQtyData: IOrderQtyData
  OrdType: string// 40
  PriceType?: number// 423
  Price?: number// 44
  StopPx?: number// 99
  Currency?: string// 15
  ComplianceID?: string// 376
  SolicitedFlag?: boolean// 377
  IOIid?: string// 23
  QuoteID?: string// 117
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  GTBookingInst?: number// 427
  CommissionData?: ICommissionData
  ForexReq?: boolean// 121
  SettlCurrency?: string// 120
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  OpenClose?: string// 77
  CoveredOrUncovered?: number// 203
  MaxShow?: number// 210
  PegDifference?: number// 211
  DiscretionInst?: string// 388
  DiscretionOffset?: number// 389
  NetMoney?: number// 118
  StandardTrailer: IStandardTrailer
}
