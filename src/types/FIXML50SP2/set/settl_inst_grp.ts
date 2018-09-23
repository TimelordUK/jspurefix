import { IParties } from './parties'
import { ISettlInstructionsData } from './settl_instructions_data'

export interface ISettlInstGrp {
  SettlInstID?: string// 162
  SettlInstTransType?: string// 163
  SettlInstRefID?: string// 214
  RelativeValueSide?: number// 2532
  InstrumentScopeProduct?: number// 1543
  RelatedSecurityType?: string// 1652
  InstrumentScopeCFICode?: string// 1546
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  EffectiveTime?: Date// 168
  ExpireTime?: Date// 126
  LastUpdateTime?: Date// 779
  PaymentMethod?: number// 492
  PaymentRef?: string// 476
  CardHolderName?: string// 488
  CardNumber?: string// 489
  CardStartDate?: Date// 503
  CardExpDate?: Date// 490
  CardIssNum?: string// 491
  UnderlyingDividendPeriodPaymentDateAdjusted?: Date// 42880
  PaymentRemitterID?: string// 505
  Parties?: IParties[]
  SettlInstructionsData?: ISettlInstructionsData
}
