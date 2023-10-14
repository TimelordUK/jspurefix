import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IQuotCxlEntriesGrp } from './set/quot_cxl_entries_grp'
import { IStandardTrailer } from './set/standard_trailer'
import { ITargetParties } from './set/target_parties'

/*
***************************************************************
* The Quote Cancel message is used by an originator of quotes *
* to cancel quotes.                                           *
* The Quote Cancel message supports cancellation of:          *
* " All quotes                                                *
* " Quotes for a specific symbol or security ID               *
* " All quotes for a security type                            *
* " All quotes for an underlying                              *
***************************************************************
*/
export interface IQuoteCancel {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID?: string// [3] 117 (String)
  QuoteMsgID?: string// [4] 1166 (String)
  QuoteCancelType: number// [5] 298 (Int)
  QuoteResponseLevel?: number// [6] 301 (Int)
  Parties?: IParties[]// [7] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  AccountType?: number// [10] 581 (Int)
  TradingSessionID?: string// [11] 336 (String)
  TradingSessionSubID?: string// [12] 625 (String)
  QuotCxlEntriesGrp?: IQuotCxlEntriesGrp[]// [13] Symbol.55, SymbolSfx.65 .. LegFlowScheduleType.1440
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
  QuoteType?: number// [15] 537 (Int)
  TargetParties?: ITargetParties[]// [16] TargetPartyID.1462, TargetPartyIDSource.1463, TargetPartyRole.1464
}
