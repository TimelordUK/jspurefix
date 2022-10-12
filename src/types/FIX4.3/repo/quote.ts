import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The quote message is used as the response to a Quote Request *
* message in both indicative, tradeable, and restricted        *
* tradeable quoting markets.                                   *
****************************************************************
*/
export interface IQuote {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteResponseLevel?: number// [4] 301 (Int)
  Parties?: IParties[]// [5] 
  Account?: string// [6] 1 (String)
  TradingSessionID?: string// [7] 336 (String)
  Instrument: IInstrument// [8] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  BidPx?: number// [9] 132 (Float)
  OfferPx?: number// [10] 133 (Float)
  BidSize?: number// [11] 134 (Float)
  OfferSize?: number// [12] 135 (Float)
  ValidUntilTime?: Date// [13] 62 (UtcTimestamp)
  BidSpotRate?: number// [14] 188 (Float)
  OfferSpotRate?: number// [15] 190 (Float)
  BidForwardPoints?: number// [16] 189 (Float)
  OfferForwardPoints?: number// [17] 191 (Float)
  TransactTime?: Date// [18] 60 (UtcTimestamp)
  SettlmntTyp?: string// [19] 63 (String)
  FutSettDate?: Date// [20] 64 (LocalDate)
  OrdType?: string// [21] 40 (String)
  FutSettDate2?: Date// [22] 193 (LocalDate)
  OrderQty2?: number// [23] 192 (Float)
  Currency?: string// [24] 15 (String)
  SettlCurrFxRateCalc?: string// [25] 156 (String)
  Commission?: number// [26] 12 (Float)
  CommType?: string// [27] 13 (String)
  ExDestination?: string// [28] 100 (String)
  Text?: string// [29] 58 (String)
  EncodedTextLen?: number// [30] 354 (Int)
  EncodedText?: Buffer// [31] 355 (RawData)
  StandardTrailer: IStandardTrailer// [32] SignatureLength.93, Signature.89, CheckSum.10
}
