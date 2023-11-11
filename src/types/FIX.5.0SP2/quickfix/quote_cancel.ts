import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IQuotCxlEntriesGrp } from './set/quot_cxl_entries_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteCancel {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID?: string// [3] 117 (String)
  SecondaryQuoteID?: string// [4] 1751 (String)
  QuoteMsgID?: string// [5] 1166 (String)
  QuoteCancelType: number// [6] 298 (Int)
  QuoteType?: number// [7] 537 (Int)
  QuoteResponseLevel?: number// [8] 301 (Int)
  Parties?: IParties// [9] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [10] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  Account?: string// [11] 1 (String)
  AcctIDSource?: number// [12] 660 (Int)
  AccountType?: number// [13] 581 (Int)
  TradingSessionID?: string// [14] 336 (String)
  TradingSessionSubID?: string// [15] 625 (String)
  QuotCxlEntriesGrp?: IQuotCxlEntriesGrp// [16] NoQuoteEntries.295, Symbol.55 .. LegMarginRatio.2508
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
