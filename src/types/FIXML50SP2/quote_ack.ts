import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'

/*
********************************************
* QuoteAck can be found in Volume 3 of the *
*                                          *
* specification                            *
********************************************
*/
export interface IQuoteAck {
  QuoteID?: string// 117
  QuoteMsgID?: string// 1166
  QuoteReqID?: string// 131
  QuoteType?: number// 537
  QuoteCancelType?: number// 298
  SecondaryQuoteID?: string// 1751
  QuoteAckStatus: number// 1865
  CollRptRejectReason?: number// 2487
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
