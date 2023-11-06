import { IStandardHeader } from './set/standard_header'

/*
***********************************************
* ListExecute can be found in Volume 4 of the *
*                                             *
* specification                               *
***********************************************
*/
export interface IListExecute {
  ListID: string// [2] 66 (String)
  ClientBidID?: string// [2] 391 (String)
  BidID?: string// [2] 390 (String)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
}
