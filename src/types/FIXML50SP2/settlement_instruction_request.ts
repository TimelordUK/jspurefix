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
  RelSymTransactTime: Date// 1504
  LegAccount?: string// 2680
  AllocAcctIDSource?: number// 661
  RelativeValueSide?: number// 2532
  InstrumentScopeProduct?: number// 1543
  RelatedSecurityType?: string// 1652
  InstrumentScopeCFICode?: string// 1546
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  EffectiveTime?: Date// 168
  ExpireTime?: Date// 126
  LastUpdateTime?: Date// 779
  StandInstDbType?: number// 169
  StandInstDbName?: string// 170
  StandInstDbID?: string// 171
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
