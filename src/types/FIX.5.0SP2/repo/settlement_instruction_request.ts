import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Settlement Instruction Request message is used to        *
* request standing settlement instructions from another party. *
****************************************************************
*/
export interface ISettlementInstructionRequest {
  StandardHeader: IStandardHeader
  SettlInstReqID: string// 791
  TransactTime: Date// 60
  Parties?: IParties[]
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  Side?: string// 54
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
  StandardTrailer: IStandardTrailer
}
