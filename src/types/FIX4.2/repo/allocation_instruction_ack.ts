import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The allocation ACK message is used to acknowledge the     *
* receipt and status of an allocation message received from *
* the institution.                                          *
*************************************************************
*/
export interface IAllocationInstructionAck {
  StandardHeader: IStandardHeader
  ClientID?: string// 109
  ExecBroker?: string// 76
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
