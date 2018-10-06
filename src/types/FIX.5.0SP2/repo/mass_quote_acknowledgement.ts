import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IQuotSetAckGrp } from './set/quot_set_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'
import { ITargetParties } from './set/target_parties'

/*
***************************************************************
* Mass Quote Acknowledgement is used as the application level *
* response to a Mass Quote message.                           *
***************************************************************
*/
export interface IMassQuoteAcknowledgement {
  StandardHeader: IStandardHeader
  QuoteReqID?: string// 131
  QuoteID?: string// 117
  QuoteStatus: number// 297
  QuoteRejectReason?: number// 300
  QuoteResponseLevel?: number// 301
  QuoteType?: number// 537
  QuoteCancelType?: number// 298
  Parties?: IParties[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  QuotSetAckGrp?: IQuotSetAckGrp[]
  StandardTrailer: IStandardTrailer
  TargetParties?: ITargetParties[]
}
