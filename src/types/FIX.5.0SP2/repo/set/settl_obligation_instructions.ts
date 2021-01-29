import { IInstrument } from './instrument'
import { IParties } from './parties'
import { ISettlDetails } from './settl_details'

export interface ISettlObligationInstructions {
  NetGrossInd?: number// 430
  SettlObligID?: string// 1161
  SettlObligTransType?: string// 1162
  SettlObligRefID?: string// 1163
  CcyAmt?: number// 1157
  SettlCurrAmt?: number// 119
  Currency?: string// 15
  SettlCurrency?: string// 120
  SettlCurrFxRate?: number// 155
  SettlDate?: Date// 64
  Instrument?: IInstrument
  Parties?: IParties[]
  EffectiveTime?: Date// 168
  ExpireTime?: Date// 126
  LastUpdateTime?: Date// 779
  SettlDetails?: ISettlDetails[]
}
