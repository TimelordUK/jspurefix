import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
*****************************************************
* The second Market Data message format is used for *
* incremental updates.                              *
*****************************************************
*/
export interface IMarketDataIncrementalRefresh {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  MDReqID?: string// [2] 262 (String)
  NoMDEntries: number// [3] 268 (Int)
  MDUpdateAction: string// [4] 279 (String)
  DeleteReason?: string// [5] 285 (String)
  MDEntryType?: string// [6] 269 (String)
  MDEntryID?: string// [7] 278 (String)
  MDEntryRefID?: string// [8] 280 (String)
  Instrument?: IInstrument// [9] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  FinancialStatus?: string// [10] 291 (String)
  CorporateAction?: string// [11] 292 (String)
  MDEntryPx?: number// [12] 270 (Float)
  Currency?: string// [13] 15 (String)
  MDEntrySize?: number// [14] 271 (Float)
  MDEntryDate?: string// [15] 272 (String)
  MDEntryTime?: string// [16] 273 (String)
  TickDirection?: string// [17] 274 (String)
  MDMkt?: string// [18] 275 (String)
  TradingSessionID?: string// [19] 336 (String)
  QuoteCondition?: string// [20] 276 (String)
  TradeCondition?: string// [21] 277 (String)
  MDEntryOriginator?: string// [22] 282 (String)
  LocationID?: string// [23] 283 (String)
  DeskID?: string// [24] 284 (String)
  OpenCloseSettleFlag?: string// [25] 286 (String)
  TimeInForce?: string// [26] 59 (String)
  ExpireDate?: Date// [27] 432 (LocalDate)
  ExpireTime?: Date// [28] 126 (UtcTimestamp)
  MinQty?: number// [29] 110 (Float)
  ExecInst?: string// [30] 18 (String)
  SellerDays?: number// [31] 287 (Int)
  OrderID?: string// [32] 37 (String)
  QuoteEntryID?: string// [33] 299 (String)
  MDEntryBuyer?: string// [34] 288 (String)
  MDEntrySeller?: string// [35] 289 (String)
  NumberOfOrders?: number// [36] 346 (Int)
  MDEntryPositionNo?: number// [37] 290 (Int)
  TotalVolumeTraded?: number// [38] 387 (Float)
  Text?: string// [39] 58 (String)
  EncodedTextLen?: number// [40] 354 (Int)
  EncodedText?: Buffer// [41] 355 (RawData)
  StandardTrailer: IStandardTrailer// [42] SignatureLength.93, Signature.89, CheckSum.10
}
