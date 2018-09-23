import { IParties } from './set/parties'
import { IQuotSetGrp } from './set/quot_set_grp'

export interface IMassQuote {
  QuoteReqID?: string// 131
  QuoteID: string// 117
  QuoteType?: number// 537
  QuoteResponseLevel?: number// 301
  Parties?: IParties
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  DefBidSize?: number// 293
  DefOfferSize?: number// 294
  QuotSetGrp?: IQuotSetGrp
}
