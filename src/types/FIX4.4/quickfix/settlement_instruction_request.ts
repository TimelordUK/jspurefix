import { IParties } from './set/parties'

export interface ISettlementInstructionRequest {
  SettlInstReqID: string// 791
  TransactTime: Date// 60
  Parties?: IParties
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  Side?: string// 54
  Product?: number// 460
  SecurityType?: string// 167
  CFICode?: string// 461
  EffectiveTime?: Date// 168
  ExpireTime?: Date// 126
  LastUpdateTime?: Date// 779
  StandInstDbType?: number// 169
  StandInstDbName?: string// 170
  StandInstDbID?: string// 171
}
