import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteStatusReqID?: string// [2] 649 (String)
  QuoteID?: string// [3] 117 (String)
  Instrument?: IInstrument// [4] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Parties?: IParties// [5] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [6] 1 (String)
  AccountType?: number// [7] 581 (Int)
  TradingSessionID?: string// [8] 336 (String)
  TradingSessionSubID?: string// [9] 625 (String)
  SubscriptionRequestType?: string// [10] 263 (String)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
