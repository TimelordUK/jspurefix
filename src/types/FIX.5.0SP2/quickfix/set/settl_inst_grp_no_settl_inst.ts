import { IParties } from './parties'
import { ISettlInstructionsData } from './settl_instructions_data'

export interface ISettlInstGrpNoSettlInst {
  SettlInstID?: string// [1] 162 (String)
  SettlInstTransType?: string// [2] 163 (String)
  SettlInstRefID?: string// [3] 214 (String)
  Parties?: IParties// [4] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Side?: string// [5] 54 (String)
  Product?: number// [6] 460 (Int)
  SecurityType?: string// [7] 167 (String)
  CFICode?: string// [8] 461 (String)
  UPICode?: string// [9] 2891 (String)
  SettlCurrency?: string// [10] 120 (String)
  SettlCurrencyCodeSource?: string// [11] 2899 (String)
  EffectiveTime?: Date// [12] 168 (UtcTimestamp)
  ExpireTime?: Date// [13] 126 (UtcTimestamp)
  LastUpdateTime?: Date// [14] 779 (UtcTimestamp)
  SettlInstructionsData?: ISettlInstructionsData// [15] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
  PaymentMethod?: number// [16] 492 (Int)
  PaymentRef?: string// [17] 476 (String)
  CardHolderName?: string// [18] 488 (String)
  CardNumber?: string// [19] 489 (String)
  CardStartDate?: Date// [20] 503 (LocalDate)
  CardExpDate?: Date// [21] 490 (LocalDate)
  CardIssNum?: string// [22] 491 (String)
  PaymentDate?: Date// [23] 504 (LocalDate)
  PaymentRemitterID?: string// [24] 505 (String)
}
