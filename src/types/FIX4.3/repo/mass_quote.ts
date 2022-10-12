import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Mass Quote message can contain quotes for multiple     *
* securities to support applications that allow for the mass *
* quoting of an option series.                               *
**************************************************************
*/
export interface IMassQuote {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteResponseLevel?: number// [4] 301 (Int)
  Parties?: IParties[]// [5] 
  Account?: string// [6] 1 (String)
  DefBidSize?: number// [7] 293 (Float)
  DefOfferSize?: number// [8] 294 (Float)
  NoQuoteSets: number// [9] 296 (Int)
  QuoteSetID: string// [10] 302 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [11] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. EncodedUnderlyingSecurityDesc.365
  QuoteSetValidUntilTime?: Date// [12] 367 (UtcTimestamp)
  TotQuoteEntries: number// [13] 304 (Int)
  NoQuoteEntries: number// [14] 295 (Int)
  QuoteEntryID: string// [15] 299 (String)
  Instrument?: IInstrument// [16] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  BidPx?: number// [17] 132 (Float)
  OfferPx?: number// [18] 133 (Float)
  BidSize?: number// [19] 134 (Float)
  OfferSize?: number// [20] 135 (Float)
  ValidUntilTime?: Date// [21] 62 (UtcTimestamp)
  BidSpotRate?: number// [22] 188 (Float)
  OfferSpotRate?: number// [23] 190 (Float)
  BidForwardPoints?: number// [24] 189 (Float)
  OfferForwardPoints?: number// [25] 191 (Float)
  TransactTime?: Date// [26] 60 (UtcTimestamp)
  TradingSessionID?: string// [27] 336 (String)
  FutSettDate?: Date// [28] 64 (LocalDate)
  OrdType?: string// [29] 40 (String)
  FutSettDate2?: Date// [30] 193 (LocalDate)
  OrderQty2?: number// [31] 192 (Float)
  Currency?: string// [32] 15 (String)
  StandardTrailer: IStandardTrailer// [33] SignatureLength.93, Signature.89, CheckSum.10
}
