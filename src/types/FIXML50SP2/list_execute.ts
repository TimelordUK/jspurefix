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
  RelSymTransactTime: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
}
