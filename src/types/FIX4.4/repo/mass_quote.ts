import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IQuotSetGrp } from './set/quot_set_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Mass Quote message can contain quotes for multiple     *
* securities to support applications that allow for the mass *
* quoting of an option series.                               *
**************************************************************
*/
export interface IMassQuote {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteType?: number// [4] 537 (Int)
  QuoteResponseLevel?: number// [5] 301 (Int)
  Parties?: IParties[]// [6] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [7] 1 (String)
  AcctIDSource?: number// [8] 660 (Int)
  AccountType?: number// [9] 581 (Int)
  DefBidSize?: number// [10] 293 (Float)
  DefOfferSize?: number// [11] 294 (Float)
  QuotSetGrp: IQuotSetGrp[]// [12] QuoteSetID.302, UnderlyingSymbol.311 .. Currency.15
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
