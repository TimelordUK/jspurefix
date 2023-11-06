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
  SettlInstMsgID: string// [2] 777 (String)
  SettlInstReqID?: string// [2] 791 (String)
  SettlInstMode: string// [2] 160 (String)
  SettlInstReqRejCode?: number// [2] 792 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  ClOrdID?: string// [2] 11 (String)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  SettlInstGrp?: ISettlInstGrp[]// [2] SettlInstID.162, SettlInstTransTyp.163 .. PmtRemtrID.505
}
