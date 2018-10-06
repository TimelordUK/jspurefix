import { IStandardHeader } from './set/standard_header'

/*
***********************************************
* ListExecute can be found in Volume 4 of the *
*                                             *
* specification                               *
***********************************************
*/
export interface IListExecute {
  ListID: string// 66
  ClientBidID?: string// 391
  BidID?: string// 390
  TransactTime: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
}
