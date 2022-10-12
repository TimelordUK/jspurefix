import { IInstrument } from './instrument'

export interface IMassQuoteNoQuoteSetsNoQuoteEntries {
  QuoteEntryID: string// [1] 299 (String)
  Instrument: IInstrument// [2] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  BidPx?: number// [3] 132 (Float)
  OfferPx?: number// [4] 133 (Float)
  BidSize?: number// [5] 134 (Float)
  OfferSize?: number// [6] 135 (Float)
  ValidUntilTime?: Date// [7] 62 (UtcTimestamp)
  BidSpotRate?: number// [8] 188 (Float)
  OfferSpotRate?: number// [9] 190 (Float)
  BidForwardPoints?: number// [10] 189 (Float)
  OfferForwardPoints?: number// [11] 191 (Float)
  MidPx?: number// [12] 631 (Float)
  BidYield?: number// [13] 632 (Float)
  MidYield?: number// [14] 633 (Float)
  OfferYield?: number// [15] 634 (Float)
  TransactTime?: Date// [16] 60 (UtcTimestamp)
  TradingSessionID?: string// [17] 336 (String)
  TradingSessionSubID?: string// [18] 625 (String)
  FutSettDate?: Date// [19] 64 (LocalDate)
  OrdType?: string// [20] 40 (String)
  FutSettDate2?: Date// [21] 193 (LocalDate)
  OrderQty2?: number// [22] 192 (Float)
  BidForwardPoints2?: number// [23] 642 (Float)
  OfferForwardPoints2?: number// [24] 643 (Float)
  Currency?: string// [25] 15 (String)
}
