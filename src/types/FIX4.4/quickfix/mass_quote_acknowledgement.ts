import { IParties } from './set/parties'
import { IQuotSetAckGrp } from './set/quot_set_ack_grp'

export interface IMassQuoteAcknowledgement {
  QuoteReqID?: string// 131
  QuoteID?: string// 117
  QuoteStatus: number// 297
  QuoteRejectReason?: number// 300
  QuoteResponseLevel?: number// 301
  QuoteType?: number// 537
  Parties?: IParties
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  QuotSetAckGrp?: IQuotSetAckGrp
}
