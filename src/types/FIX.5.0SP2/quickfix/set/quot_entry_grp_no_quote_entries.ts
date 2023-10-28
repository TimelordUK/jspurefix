import { IInstrument } from './instrument'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IQuotEntryGrpNoQuoteEntries {
  QuoteEntryID: string// [1] 299 (String)
  Instrument?: IInstrument// [2] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrmtLegGrp?: IInstrmtLegGrp// [3] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  BidPx?: number// [4] 132 (Float)
  OfferPx?: number// [5] 133 (Float)
  TotalBidSize?: number// [6] 1749 (Float)
  TotalOfferSize?: number// [7] 1750 (Float)
  BidSize?: number// [8] 134 (Float)
  OfferSize?: number// [9] 135 (Float)
  ValidUntilTime?: Date// [10] 62 (UtcTimestamp)
  BidSpotRate?: number// [11] 188 (Float)
  OfferSpotRate?: number// [12] 190 (Float)
  BidForwardPoints?: number// [13] 189 (Float)
  OfferForwardPoints?: number// [14] 191 (Float)
  MidPx?: number// [15] 631 (Float)
  BidYield?: number// [16] 632 (Float)
  MidYield?: number// [17] 633 (Float)
  OfferYield?: number// [18] 634 (Float)
  TransactTime?: Date// [19] 60 (UtcTimestamp)
  TradingSessionID?: string// [20] 336 (String)
  TradingSessionSubID?: string// [21] 625 (String)
  SettlDate?: Date// [22] 64 (LocalDate)
  OrdType?: string// [23] 40 (String)
  SettlDate2?: Date// [24] 193 (LocalDate)
  OrderQty2?: number// [25] 192 (Float)
  BidForwardPoints2?: number// [26] 642 (Float)
  OfferForwardPoints2?: number// [27] 643 (Float)
  Currency?: string// [28] 15 (String)
  CurrencyCodeSource?: string// [29] 2897 (String)
  BookingType?: number// [30] 775 (Int)
  OrderCapacity?: string// [31] 528 (String)
  OrderRestrictions?: string// [32] 529 (String)
}
