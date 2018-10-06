import { IStandardHeader } from './set/standard_header'

/*
*****************************************************
* ListStatusRequest can be found in Volume 4 of the *
*                                                   *
* specification                                     *
*****************************************************
*/
export interface IListStatusRequest {
  ListID: string// 66
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
}
