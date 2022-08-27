import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IQuotCxlEntriesGrp } from './set/quot_cxl_entries_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Quote Cancel message is used by an originator of quotes *
* to cancel quotes.                                           *
***************************************************************
*/
export interface IQuoteCancel {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteCancelType: number// [4] 298 (Int)
  QuoteResponseLevel?: number// [5] 301 (Int)
  Parties?: IParties[]// [6] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [7] 1 (String)
  AcctIDSource?: number// [8] 660 (Int)
  AccountType?: number// [9] 581 (Int)
  TradingSessionID?: string// [10] 336 (String)
  TradingSessionSubID?: string// [11] 625 (String)
  QuotCxlEntriesGrp?: IQuotCxlEntriesGrp[]// [12] Symbol.55, SymbolSfx.65 .. LegInterestAccrualDate.956
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
