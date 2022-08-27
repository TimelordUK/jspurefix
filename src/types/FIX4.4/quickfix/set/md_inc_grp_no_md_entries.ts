import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IMDIncGrpNoMDEntries {
  MDUpdateAction: string// [1] 279 (String)
  DeleteReason?: string// [2] 285 (String)
  MDEntryType?: string// [3] 269 (String)
  MDEntryID?: string// [4] 278 (String)
  MDEntryRefID?: string// [5] 280 (String)
  Instrument: IInstrument// [6] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp: IUndInstrmtGrp// [7] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  InstrmtLegGrp: IInstrmtLegGrp// [8] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  FinancialStatus?: string// [9] 291 (String)
  CorporateAction?: string// [10] 292 (String)
  MDEntryPx?: number// [11] 270 (Float)
  Currency?: string// [12] 15 (String)
  MDEntrySize?: number// [13] 271 (Float)
  MDEntryDate?: Date// [14] 272 (UtcDateOnly)
  MDEntryTime?: Date// [15] 273 (UtcTimeOnly)
  TickDirection?: string// [16] 274 (String)
  MDMkt?: string// [17] 275 (String)
  TradingSessionID?: string// [18] 336 (String)
  TradingSessionSubID?: string// [19] 625 (String)
  QuoteCondition?: string// [20] 276 (String)
  TradeCondition?: string// [21] 277 (String)
  MDEntryOriginator?: string// [22] 282 (String)
  LocationID?: string// [23] 283 (String)
  DeskID?: string// [24] 284 (String)
  OpenCloseSettlFlag?: string// [25] 286 (String)
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
  Scope?: string// [38] 546 (String)
  PriceDelta?: number// [39] 811 (Float)
  NetChgPrevDay?: number// [40] 451 (Float)
  Text?: string// [41] 58 (String)
  EncodedTextLen?: number// [42] 354 (Length)
  EncodedText?: Buffer// [43] 355 (RawData)
}
