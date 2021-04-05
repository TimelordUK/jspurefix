import { IStandardHeader } from './set/standard_header'
import { ISettlInstGrp } from './set/settl_inst_grp'
import { IStandardTrailer } from './set/standard_trailer'

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
  SettlInstGrp?: ISettlInstGrp
  StandardTrailer: IStandardTrailer
}
