import { IStandardHeader } from './set/standard_header'
import { ISettlInstGrp } from './set/settl_inst_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Settlement Instructions message provides the brokers,  *
* the institutions, or the intermediarys instructions for   *
* trade settlement. This message has been designed so that it *
* can be sent from the broker to the institution, from the    *
* institution to the broker, or from either to an independent *
* "standing instructions" database or matching system or, for *
* CIV, from an intermediary to a fund manager.                *
***************************************************************
*/
export interface ISettlementInstructions {
  StandardHeader: IStandardHeader
  SettlInstMsgID: string// 777
  SettlInstReqID?: string// 791
  SettlInstMode: string// 160
  SettlInstReqRejCode?: number// 792
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  ClOrdID?: string// 11
  TransactTime: Date// 60
  SettlInstGrp?: ISettlInstGrp[]
  StandardTrailer: IStandardTrailer
}
