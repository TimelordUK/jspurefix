import { IParties } from './parties'
import { ISettlInstructionsData } from './settl_instructions_data'

export interface ISettlInstGrp {
  SettlInstID?: string// 162
  SettlInstTransType?: string// 163
  SettlInstRefID?: string// 214
  Parties?: IParties[]
  Side?: string// 54
  Product?: number// 460
  SecurityType?: string// 167
  CFICode?: string// 461
  SettlCurrency?: string// 120
  EffectiveTime?: Date// 168
  ExpireTime?: Date// 126
  LastUpdateTime?: Date// 779
  SettlInstructionsData?: ISettlInstructionsData
  PaymentMethod?: number// 492
  PaymentRef?: string// 476
  CardHolderName?: string// 488
  CardNumber?: string// 489
  CardStartDate?: Date// 503
  CardExpDate?: Date// 490
  CardIssNum?: string// 491
  PaymentDate?: Date// 504
  PaymentRemitterID?: string// 505
}
