import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'

export interface ISecurityStatusRequest {
  SecurityStatusReqID: string// 324
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  Currency?: number// 15
  SubscriptionRequestType: string// 263
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
}
