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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  MDReqID?: string// [2] 262 (String)
  Instrument: IInstrument// [3] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  FinancialStatus?: string// [4] 291 (String)
  CorporateAction?: string// [5] 292 (String)
  TotalVolumeTraded?: number// [6] 387 (Float)
  NoMDEntries: number// [7] 268 (Int)
  MDEntryType: string// [8] 269 (String)
  MDEntryPx?: number// [9] 270 (Float)
  Currency?: string// [10] 15 (String)
  MDEntrySize?: number// [11] 271 (Float)
  MDEntryDate?: string// [12] 272 (String)
  MDEntryTime?: string// [13] 273 (String)
  TickDirection?: string// [14] 274 (String)
  MDMkt?: string// [15] 275 (String)
  TradingSessionID?: string// [16] 336 (String)
  QuoteCondition?: string// [17] 276 (String)
  TradeCondition?: string// [18] 277 (String)
  MDEntryOriginator?: string// [19] 282 (String)
  LocationID?: string// [20] 283 (String)
  DeskID?: string// [21] 284 (String)
  OpenCloseSettleFlag?: string// [22] 286 (String)
  TimeInForce?: string// [23] 59 (String)
  ExpireDate?: Date// [24] 432 (LocalDate)
  ExpireTime?: Date// [25] 126 (UtcTimestamp)
  MinQty?: number// [26] 110 (Float)
  ExecInst?: string// [27] 18 (String)
  SellerDays?: number// [28] 287 (Int)
  OrderID?: string// [29] 37 (String)
  QuoteEntryID?: string// [30] 299 (String)
  MDEntryBuyer?: string// [31] 288 (String)
  MDEntrySeller?: string// [32] 289 (String)
  NumberOfOrders?: number// [33] 346 (Int)
  MDEntryPositionNo?: number// [34] 290 (Int)
  Text?: string// [35] 58 (String)
  EncodedTextLen?: number// [36] 354 (Int)
  EncodedText?: Buffer// [37] 355 (RawData)
  StandardTrailer: IStandardTrailer// [38] SignatureLength.93, Signature.89, CheckSum.10
}
