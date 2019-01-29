import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
**********************************************************
* The Market Data messages are used as the response to a *
* Market Data Request message.                           *
**********************************************************
*/
export interface IMarketDataSnapshotFullRefresh {
  StandardHeader: IStandardHeader
  MDReqID?: string// 262
  Instrument: IInstrument
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  TotalVolumeTraded?: number// 387
  NoMDEntries: number// 268
  MDEntryType: string// 269
  MDEntryPx?: number// 270
  Currency?: number// 15
  MDEntrySize?: number// 271
  MDEntryDate?: string// 272
  MDEntryTime?: Date// 273
  TickDirection?: string// 274
  MDMkt?: string// 275
  TradingSessionID?: string// 336
  QuoteCondition?: string// 276
  TradeCondition?: string// 277
  MDEntryOriginator?: string// 282
  LocationID?: string// 283
  DeskID?: string// 284
  OpenCloseSettleFlag?: string// 286
  TimeInForce?: string// 59
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  MinQty?: number// 110
  ExecInst?: string// 18
  SellerDays?: number// 287
  OrderID?: string// 37
  QuoteEntryID?: string// 299
  MDEntryBuyer?: string// 288
  MDEntrySeller?: string// 289
  NumberOfOrders?: number// 346
  MDEntryPositionNo?: number// 290
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
