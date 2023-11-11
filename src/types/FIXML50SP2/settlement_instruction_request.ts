import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'

/*
****************************************************************
* SettlementInstructionRequest can be found in Volume 5 of the *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface ISettlementInstructionRequest {
  SettlInstReqID: string// [2] 791 (String)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  AllocAccount?: string// [2] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  Side?: string// [2] 54 (String)
  Product?: number// [2] 460 (Int)
  SecurityType?: string// [2] 167 (String)
  CFICode?: string// [2] 461 (String)
  SettlCurrency?: string// [2] 120 (String)
  EffectiveTime?: Date// [2] 168 (UtcTimestamp)
  ExpireTime?: Date// [2] 126 (UtcTimestamp)
  LastUpdateTime?: Date// [2] 779 (UtcTimestamp)
  StandInstDbType?: number// [2] 169 (Int)
  StandInstDbName?: string// [2] 170 (String)
  StandInstDbID?: string// [2] 171 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
}
