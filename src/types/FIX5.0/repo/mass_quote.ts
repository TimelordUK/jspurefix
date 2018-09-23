import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IQuotSetGrp } from './set/quot_set_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Mass Quote message can contain quotes for multiple      *
* securities to support applications that allow for the mass  *
* quoting of an option series. Two levels of repeating groups *
* have been provided to minimize the amount of data required  *
* to submit a set of quotes for a class of options (e.g. all  *
* option series for IBM).                                     *
***************************************************************
*/
export interface IMassQuote {
  StandardHeader: IStandardHeader
  QuoteReqID?: string// 131
  QuoteID: string// 117
  QuoteType?: number// 537
  QuoteResponseLevel?: number// 301
  Parties?: IParties[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  DefBidSize?: number// 293
  DefOfferSize?: number// 294
  QuotSetGrp: IQuotSetGrp[]
  StandardTrailer: IStandardTrailer
}
