import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***********************************************************
* The Settlement Instructions message provides either the *
* brokers or the institutions instructions for trade    *
* settlement.                                             *
***********************************************************
*/
export interface ISettlementInstructions {
  StandardHeader: IStandardHeader
  SettlInstID: string// 162
  SettlInstTransType: string// 163
  SettlInstRefID: string// 214
  SettlInstMode: string// 160
  SettlInstSource: string// 165
  AllocAccount: string// 79
  SettlLocation?: string// 166
  TradeDate?: Date// 75
  AllocID?: string// 70
  LastMkt?: string// 30
  TradingSessionID?: string// 336
  Side?: string// 54
  SecurityType?: string// 167
  EffectiveTime?: Date// 168
  TransactTime: Date// 60
  ClientID?: string// 109
  ExecBroker?: string// 76
  StandInstDbType?: number// 169
  StandInstDbName?: string// 170
  StandInstDbID?: string// 171
  SettlDeliveryType?: number// 172
  SettlDepositoryCode?: string// 173
  SettlBrkrCode?: string// 174
  SettlInstCode?: string// 175
  SecuritySettlAgentName?: string// 176
  SecuritySettlAgentCode?: string// 177
  SecuritySettlAgentAcctNum?: string// 178
  SecuritySettlAgentAcctName?: string// 179
  SecuritySettlAgentContactName?: string// 180
  SecuritySettlAgentContactPhone?: string// 181
  CashSettlAgentName?: string// 182
  CashSettlAgentCode?: string// 183
  CashSettlAgentAcctNum?: string// 184
  CashSettlAgentAcctName?: string// 185
  CashSettlAgentContactName?: string// 186
  CashSettlAgentContactPhone?: string// 187
  StandardTrailer: IStandardTrailer
}
