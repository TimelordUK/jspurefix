import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* The Allocation ACK message is used to acknowledge the *
* receipt and status of an Allocation message.          *
*********************************************************
*/
export interface IAllocationAck {
  StandardHeader: IStandardHeader
  Parties?: IParties[]
  AllocID: string// 70
  TradeDate: Date// 75
  TransactTime?: Date// 60
  AllocStatus: number// 87
  AllocRejCode?: number// 88
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
