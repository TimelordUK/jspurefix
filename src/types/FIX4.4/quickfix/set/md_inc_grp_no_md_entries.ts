import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IMDIncGrpNoMDEntries {
  MDUpdateAction: string// 279
  DeleteReason?: string// 285
  MDEntryType?: string// 269
  MDEntryID?: string// 278
  MDEntryRefID?: string// 280
  Instrument: IInstrument
  UndInstrmtGrp: IUndInstrmtGrp
  InstrmtLegGrp: IInstrmtLegGrp
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  MDEntryPx?: number// 270
  Currency?: number// 15
  MDEntrySize?: number// 271
  MDEntryDate?: Date// 272
  MDEntryTime?: Date// 273
  TickDirection?: string// 274
  MDMkt?: string// 275
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  QuoteCondition?: string// 276
  TradeCondition?: string// 277
  MDEntryOriginator?: string// 282
  LocationID?: string// 283
  DeskID?: string// 284
  OpenCloseSettlFlag?: string// 286
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
  Scope?: string// 546
  PriceDelta?: number// 811
  NetChgPrevDay?: number// 451
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
