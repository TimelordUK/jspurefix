import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IQuoteCancelNoQuoteEntries } from './set/quote_cancel_no_quote_entries'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteCancel {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteCancelType: number// [4] 298 (Int)
  QuoteResponseLevel?: number// [5] 301 (Int)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [7] 1 (String)
  AccountType?: number// [8] 581 (Int)
  TradingSessionID?: string// [9] 336 (String)
  TradingSessionSubID?: string// [10] 625 (String)
  NoQuoteEntries?: IQuoteCancelNoQuoteEntries[]// [11] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
