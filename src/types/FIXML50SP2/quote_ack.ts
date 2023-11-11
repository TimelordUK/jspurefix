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
  QuoteID?: string// [2] 117 (String)
  QuoteMsgID?: string// [2] 1166 (String)
  QuoteReqID?: string// [2] 131 (String)
  QuoteType?: number// [2] 537 (Int)
  QuoteCancelType?: number// [2] 298 (Int)
  SecondaryQuoteID?: string// [2] 1751 (String)
  QuoteAckStatus: number// [2] 1865 (Int)
  OrdRejReason?: number// [2] 103 (Int)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
}
