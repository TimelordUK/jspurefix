import { IInstrument } from './instrument'
import { IParties } from './parties'
import { ISettlDetails } from './settl_details'

export interface ISettlObligationInstructions {
  NetGrossInd?: number// [1] 430 (Int)
  SettlObligID?: string// [2] 1161 (String)
  SettlObligTransType?: string// [3] 1162 (String)
  SettlObligRefID?: string// [4] 1163 (String)
  CcyAmt?: number// [5] 1157 (Float)
  SettlCurrAmt?: number// [6] 119 (Float)
  Currency?: string// [7] 15 (String)
  SettlCurrency?: string// [8] 120 (String)
  SettlCurrFxRate?: number// [9] 155 (Float)
  SettlDate?: Date// [10] 64 (LocalDate)
  Instrument?: IInstrument// [11] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  Parties?: IParties[]// [12] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  EffectiveTime?: Date// [13] 168 (UtcTimestamp)
  ExpireTime?: Date// [14] 126 (UtcTimestamp)
  LastUpdateTime?: Date// [15] 779 (UtcTimestamp)
  SettlDetails?: ISettlDetails[]// [16] SettlObligSource.1164, SettlParties.781 .. SettlPartySubIDType.786
}
