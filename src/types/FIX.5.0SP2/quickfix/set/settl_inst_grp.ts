import { IParties } from './parties'
import { ISettlInstructionsData } from './settl_instructions_data'

export interface ISettlInstGrp {
  SettlInstID?: string// [1] 162 (String)
  SettlInstTransType?: string// [2] 163 (String)
  SettlInstRefID?: string// [3] 214 (String)
  Parties?: IParties[]// [4] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Side?: string// [5] 54 (String)
  Product?: number// [6] 460 (Int)
  SecurityType?: string// [7] 167 (String)
  CFICode?: string// [8] 461 (String)
  SettlCurrency?: string// [9] 120 (String)
  EffectiveTime?: Date// [10] 168 (UtcTimestamp)
  ExpireTime?: Date// [11] 126 (UtcTimestamp)
  LastUpdateTime?: Date// [12] 779 (UtcTimestamp)
  SettlInstructionsData?: ISettlInstructionsData// [13] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
  PaymentMethod?: number// [14] 492 (Int)
  PaymentRef?: string// [15] 476 (String)
  CardHolderName?: string// [16] 488 (String)
  CardNumber?: string// [17] 489 (String)
  CardStartDate?: Date// [18] 503 (LocalDate)
  CardExpDate?: Date// [19] 490 (LocalDate)
  CardIssNum?: string// [20] 491 (String)
  PaymentDate?: Date// [21] 504 (LocalDate)
  PaymentRemitterID?: string// [22] 505 (String)
}
