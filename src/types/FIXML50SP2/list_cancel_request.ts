import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'

/*
*****************************************************
* ListCancelRequest can be found in Volume 4 of the *
*                                                   *
* specification                                     *
*****************************************************
*/
export interface IListCancelRequest {
  ListID: string// 66
  RelSymTransactTime: Date// 1504
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
