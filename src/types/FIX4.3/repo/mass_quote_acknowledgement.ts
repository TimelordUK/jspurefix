import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* Mass Quote Acknowledgement is used as the application level *
* response to a Mass Quote message.                           *
***************************************************************
*/
export interface IMassQuoteAcknowledgement {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  QuoteReqID?: string// [2] 131 (String)
  QuoteID?: string// [3] 117 (String)
  QuoteAckStatus: number// [4] 297 (Int)
  QuoteRejectReason?: number// [5] 300 (Int)
  QuoteResponseLevel?: number// [6] 301 (Int)
  Parties?: IParties[]// [7] 
  Account?: string// [8] 1 (String)
  Text?: string// [9] 58 (String)
  NoQuoteSets?: number// [10] 296 (Int)
  QuoteSetID?: string// [11] 302 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [12] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. EncodedUnderlyingSecurityDesc.365
  TotQuoteEntries?: number// [13] 304 (Int)
  NoQuoteEntries?: number// [14] 295 (Int)
  QuoteEntryID?: string// [15] 299 (String)
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
  QuoteEntryRejectReason?: number// [33] 368 (Int)
  StandardTrailer: IStandardTrailer// [34] SignatureLength.93, Signature.89, CheckSum.10
}
