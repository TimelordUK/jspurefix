import { IStandardHeader } from './set/standard_header'
import { ISettlInstGrp } from './set/settl_inst_grp'

/*
**********************************************************
* SettlementInstructions can be found in Volume 5 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
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
  StandardHeader?: IStandardHeader
  SettlInstGrp?: ISettlInstGrp[]
}
