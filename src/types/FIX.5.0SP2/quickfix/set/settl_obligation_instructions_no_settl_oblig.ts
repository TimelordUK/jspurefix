import { IInstrument } from './instrument'
import { IParties } from './parties'
import { ISettlDetails } from './settl_details'

export interface ISettlObligationInstructionsNoSettlOblig {
  NetGrossInd?: number// [1] 430 (Int)
  SettlObligID?: string// [2] 1161 (String)
  SettlObligTransType?: string// [3] 1162 (String)
  SettlObligRefID?: string// [4] 1163 (String)
  CcyAmt?: number// [5] 1157 (Float)
  SettlCurrAmt?: number// [6] 119 (Float)
  Currency?: string// [7] 15 (String)
  CurrencyCodeSource?: string// [8] 2897 (String)
  SettlCurrency?: string// [9] 120 (String)
  SettlCurrencyCodeSource?: string// [10] 2899 (String)
  SettlCurrFxRate?: number// [11] 155 (Float)
  SettlDate?: Date// [12] 64 (LocalDate)
  Instrument?: IInstrument// [13] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  Parties?: IParties// [14] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  EffectiveTime?: Date// [15] 168 (UtcTimestamp)
  ExpireTime?: Date// [16] 126 (UtcTimestamp)
  LastUpdateTime?: Date// [17] 779 (UtcTimestamp)
  SettlDetails?: ISettlDetails// [18] NoSettlDetails.1158, SettlObligSource.1164 .. SettlPartySubIDType.786
}
