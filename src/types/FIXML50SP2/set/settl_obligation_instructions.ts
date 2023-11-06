import { IInstrument } from './instrument'
import { IParties } from './parties'
import { ISettlDetails } from './settl_details'

export interface ISettlObligationInstructions {
  NetGrossInd?: number// [1] 430 (Int)
  SettlObligID?: string// [1] 1161 (String)
  SettlObligTransType?: string// [1] 1162 (String)
  SettlObligRefID?: string// [1] 1163 (String)
  CcyAmt?: number// [1] 1157 (Float)
  SettlCurrAmt?: number// [1] 119 (Float)
  Currency?: string// [1] 15 (String)
  SettlCurrency?: string// [1] 120 (String)
  SettlCurrFxRate?: number// [1] 155 (Float)
  SettlDate?: Date// [1] 64 (LocalDate)
  EffectiveTime?: Date// [1] 168 (UtcTimestamp)
  ExpireTime?: Date// [1] 126 (UtcTimestamp)
  LastUpdateTime?: Date// [1] 779 (UtcTimestamp)
  Instrument?: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  SettlDetails?: ISettlDetails[]// [3] SettlSrc.1164
}
