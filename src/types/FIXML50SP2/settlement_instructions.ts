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
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  ClOrdID?: string// 11
  RelSymTransactTime: Date// 1504
  StandardHeader?: IStandardHeader
  SettlInstGrp?: ISettlInstGrp[]
}
