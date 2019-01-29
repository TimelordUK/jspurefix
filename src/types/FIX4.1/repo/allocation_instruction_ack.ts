import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The allocation ACK record is used by the broker to         *
* acknowledge the receipt and status of an allocation record *
* received from the institution.                             *
**************************************************************
*/
export interface IAllocationInstructionAck {
  StandardHeader: IStandardHeader
  ClientID?: string// 109
  ExecBroker?: string// 76
  AllocID: string// 70
  TradeDate: string// 75
  TransactTime?: string// 60
  AllocStatus: number// 87
  AllocRejCode?: number// 88
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
