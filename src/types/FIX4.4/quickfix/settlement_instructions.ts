import { ISettlInstGrp } from './set/settl_inst_grp'

export interface ISettlementInstructions {
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
}
