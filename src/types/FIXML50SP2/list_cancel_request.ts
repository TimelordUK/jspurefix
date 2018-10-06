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
  TransactTime: Date// 60
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
