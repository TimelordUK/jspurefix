import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The quote status request message is used for the following  *
* purposes in markets that employ tradeable or restricted     *
* tradeable quotes:                                           *
* * For the issuer of a quote in a market to query the status *
* of that quote (using the QuoteID to specify the target      *
* quote).                                                     *
* * To subscribe and unsubscribe for Quote Status Report      *
* messages for one or more securities.                        *
***************************************************************
*/
export interface IQuoteStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  QuoteID?: string// [2] 117 (String)
  Instrument: IInstrument// [3] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Parties?: IParties[]// [4] 
  Account?: string// [5] 1 (String)
  TradingSessionID?: string// [6] 336 (String)
  SubscriptionRequestType?: string// [7] 263 (String)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
