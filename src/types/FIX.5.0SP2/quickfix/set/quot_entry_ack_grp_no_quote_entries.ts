import { IInstrument } from './instrument'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IQuotEntryAckGrpNoQuoteEntries {
  QuoteEntryID?: string// [1] 299 (String)
  Instrument?: IInstrument// [2] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrmtLegGrp?: IInstrmtLegGrp// [3] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  BidPx?: number// [4] 132 (Float)
  OfferPx?: number// [5] 133 (Float)
  BidSize?: number// [6] 134 (Float)
  OfferSize?: number// [7] 135 (Float)
  ValidUntilTime?: Date// [8] 62 (UtcTimestamp)
  BidSpotRate?: number// [9] 188 (Float)
  OfferSpotRate?: number// [10] 190 (Float)
  BidForwardPoints?: number// [11] 189 (Float)
  OfferForwardPoints?: number// [12] 191 (Float)
  MidPx?: number// [13] 631 (Float)
  BidYield?: number// [14] 632 (Float)
  MidYield?: number// [15] 633 (Float)
  OfferYield?: number// [16] 634 (Float)
  TransactTime?: Date// [17] 60 (UtcTimestamp)
  TradingSessionID?: string// [18] 336 (String)
  TradingSessionSubID?: string// [19] 625 (String)
  SettlDate?: Date// [20] 64 (LocalDate)
  OrdType?: string// [21] 40 (String)
  SettlDate2?: Date// [22] 193 (LocalDate)
  OrderQty2?: number// [23] 192 (Float)
  BidForwardPoints2?: number// [24] 642 (Float)
  OfferForwardPoints2?: number// [25] 643 (Float)
  Currency?: string// [26] 15 (String)
  CurrencyCodeSource?: string// [27] 2897 (String)
  BookingType?: number// [28] 775 (Int)
  OrderCapacity?: string// [29] 528 (String)
  OrderRestrictions?: string// [30] 529 (String)
  QuoteEntryStatus?: number// [31] 1167 (Int)
  QuoteEntryRejectReason?: number// [32] 368 (Int)
}
