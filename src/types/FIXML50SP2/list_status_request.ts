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
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
}
