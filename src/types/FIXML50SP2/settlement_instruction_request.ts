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
  SettlInstReqID: string// 791
  TransactTime: Date// 60
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  RelativeValueSide?: number// 2532
  Product?: number// 460
  SecurityType?: string// 167
  CFICode?: string// 461
  SettlCurrency?: string// 120
  EffectiveTime?: Date// 168
  ExpireTime?: Date// 126
  LastUpdateTime?: Date// 779
  StandInstDbType?: number// 169
  StandInstDbName?: string// 170
  StandInstDbID?: string// 171
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
