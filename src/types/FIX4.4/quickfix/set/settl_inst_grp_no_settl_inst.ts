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
  EffectiveTime?: Date// [9] 168 (UtcTimestamp)
  ExpireTime?: Date// [10] 126 (UtcTimestamp)
  LastUpdateTime?: Date// [11] 779 (UtcTimestamp)
  SettlInstructionsData?: ISettlInstructionsData// [12] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
  PaymentMethod?: number// [13] 492 (Int)
  PaymentRef?: string// [14] 476 (String)
  CardHolderName?: string// [15] 488 (String)
  CardNumber?: string// [16] 489 (String)
  CardStartDate?: Date// [17] 503 (LocalDate)
  CardExpDate?: Date// [18] 490 (LocalDate)
  CardIssNum?: string// [19] 491 (String)
  PaymentDate?: Date// [20] 504 (LocalDate)
  PaymentRemitterID?: string// [21] 505 (String)
}
