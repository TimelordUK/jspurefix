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
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  SettlCurrFxRate?: string// 155
  LegSettlDate?: Date// 588
  EffectiveTime?: Date// 168
  ExpireTime?: Date// 126
  LastUpdateTime?: Date// 779
  Instrument?: IInstrument
  Parties?: IParties[]
  SettlDetails?: ISettlDetails[]
}
