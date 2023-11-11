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
  ListID: string// [2] 66 (String)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  TradeOriginationDate?: Date// [2] 229 (LocalDate)
  TradeDate?: Date// [2] 75 (LocalDate)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
}
