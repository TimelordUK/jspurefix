import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The List Cancel Request message type is used by institutions *
* wishing to cancel previously submitted lists either before   *
* or during execution.                                         *
****************************************************************
*/
export interface IListCancelRequest {
  StandardHeader: IStandardHeader
  ListID: string// 66
  Parties?: IParties[]
  TransactTime: Date// 60
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
