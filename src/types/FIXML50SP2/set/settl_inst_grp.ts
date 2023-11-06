import { IParties } from './parties'
import { ISettlInstructionsData } from './settl_instructions_data'

export interface ISettlInstGrp {
  SettlInstID?: string// [1] 162 (String)
  SettlInstTransType?: string// [1] 163 (String)
  SettlInstRefID?: string// [1] 214 (String)
  Side?: string// [1] 54 (String)
  Product?: number// [1] 460 (Int)
  SecurityType?: string// [1] 167 (String)
  CFICode?: string// [1] 461 (String)
  SettlCurrency?: string// [1] 120 (String)
  EffectiveTime?: Date// [1] 168 (UtcTimestamp)
  ExpireTime?: Date// [1] 126 (UtcTimestamp)
  LastUpdateTime?: Date// [1] 779 (UtcTimestamp)
  PaymentMethod?: number// [1] 492 (Int)
  PaymentRef?: string// [1] 476 (String)
  CardHolderName?: string// [1] 488 (String)
  CardNumber?: string// [1] 489 (String)
  CardStartDate?: Date// [1] 503 (LocalDate)
  CardExpDate?: Date// [1] 490 (LocalDate)
  CardIssNum?: string// [1] 491 (String)
  PaymentDate?: Date// [1] 504 (LocalDate)
  PaymentRemitterID?: string// [1] 505 (String)
  Parties?: IParties[]// [1] ID.448, Src.447 .. Qual.2376
  SettlInstructionsData?: ISettlInstructionsData// [2] DlvryTyp.172, StandInstDbTyp.169 .. StandInstDbID.171
}
