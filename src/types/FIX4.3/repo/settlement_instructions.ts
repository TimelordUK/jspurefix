import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Settlement Instructions message provides the brokers, *
* the institutions, or the intermediarys instructions for  *
* trade settlement.                                          *
**************************************************************
*/
export interface ISettlementInstructions {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SettlInstID: string// [2] 162 (String)
  SettlInstTransType: string// [3] 163 (String)
  SettlInstRefID: string// [4] 214 (String)
  SettlInstMode: string// [5] 160 (String)
  SettlInstSource: string// [6] 165 (String)
  AllocAccount: string// [7] 79 (String)
  ClOrdID?: string// [8] 11 (String)
  TradeDate?: Date// [9] 75 (LocalDate)
  AllocID?: string// [10] 70 (String)
  LastMkt?: string// [11] 30 (String)
  TradingSessionID?: string// [12] 336 (String)
  Side?: string// [13] 54 (String)
  SecurityType?: string// [14] 167 (String)
  EffectiveTime?: Date// [15] 168 (UtcTimestamp)
  TransactTime: Date// [16] 60 (UtcTimestamp)
  Parties?: IParties[]// [17] 
  StandInstDbType?: number// [18] 169 (Int)
  StandInstDbName?: string// [19] 170 (String)
  StandInstDbID?: string// [20] 171 (String)
  SettlDeliveryType?: number// [21] 172 (Int)
  SettlDepositoryCode?: string// [22] 173 (String)
  SettlBrkrCode?: string// [23] 174 (String)
  SettlInstCode?: string// [24] 175 (String)
  SecuritySettlAgentName?: string// [25] 176 (String)
  SecuritySettlAgentCode?: string// [26] 177 (String)
  SecuritySettlAgentAcctNum?: string// [27] 178 (String)
  SecuritySettlAgentAcctName?: string// [28] 179 (String)
  SecuritySettlAgentContactName?: string// [29] 180 (String)
  SecuritySettlAgentContactPhone?: string// [30] 181 (String)
  CashSettlAgentName?: string// [31] 182 (String)
  CashSettlAgentCode?: string// [32] 183 (String)
  CashSettlAgentAcctNum?: string// [33] 184 (String)
  CashSettlAgentAcctName?: string// [34] 185 (String)
  CashSettlAgentContactName?: string// [35] 186 (String)
  CashSettlAgentContactPhone?: string// [36] 187 (String)
  StandardTrailer: IStandardTrailer// [37] SignatureLength.93, Signature.89, CheckSum.10
}
