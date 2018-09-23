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
  MDStatisticReqID?: string// 2452
  UnderlyingReturnRateValuationDateType?: number// 43073
  QuoteCancelType?: number// 298
  SecondaryQuoteID?: string// 1751
  QuoteAckStatus: number// 1865
  CollRptRejectReason?: number// 2487
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
