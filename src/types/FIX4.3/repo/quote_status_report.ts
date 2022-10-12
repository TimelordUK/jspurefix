import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
*******************************************************
* The quote status report message is used:            *
* " As the response to a Quote Status Request message *
* " As a response to a Quote Cancel message           *
*******************************************************
*/
export interface IQuoteStatusReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  Parties?: IParties[]// [4] 
  Account?: string// [5] 1 (String)
  TradingSessionID?: string// [6] 336 (String)
  Instrument: IInstrument// [7] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  BidPx?: number// [8] 132 (Float)
  OfferPx?: number// [9] 133 (Float)
  BidSize?: number// [10] 134 (Float)
  OfferSize?: number// [11] 135 (Float)
  ValidUntilTime?: Date// [12] 62 (UtcTimestamp)
  BidSpotRate?: number// [13] 188 (Float)
  OfferSpotRate?: number// [14] 190 (Float)
  BidForwardPoints?: number// [15] 189 (Float)
  OfferForwardPoints?: number// [16] 191 (Float)
  TransactTime?: Date// [17] 60 (UtcTimestamp)
  FutSettDate?: Date// [18] 64 (LocalDate)
  OrdType?: string// [19] 40 (String)
  FutSettDate2?: Date// [20] 193 (LocalDate)
  OrderQty2?: number// [21] 192 (Float)
  Currency?: string// [22] 15 (String)
  SettlCurrFxRateCalc?: string// [23] 156 (String)
  Commission?: number// [24] 12 (Float)
  CommType?: string// [25] 13 (String)
  ExDestination?: string// [26] 100 (String)
  QuoteAckStatus?: number// [27] 297 (Int)
  StandardTrailer: IStandardTrailer// [28] SignatureLength.93, Signature.89, CheckSum.10
}
