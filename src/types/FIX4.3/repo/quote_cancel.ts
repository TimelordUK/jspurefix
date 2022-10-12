import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Quote Cancel message is used by an originator of quotes *
* to cancel quotes.                                           *
***************************************************************
*/
export interface IQuoteCancel {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteCancelType: number// [4] 298 (Int)
  QuoteResponseLevel?: number// [5] 301 (Int)
  Parties?: IParties[]// [6] 
  Account?: string// [7] 1 (String)
  TradingSessionID?: string// [8] 336 (String)
  NoQuoteEntries?: number// [9] 295 (Int)
  Instrument?: IInstrument// [10] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
