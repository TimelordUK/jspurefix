import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityStatusRequest {
  StandardHeader: IStandardHeader
  SecurityStatusReqID: string// 324
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  Currency?: string// 15
  SubscriptionRequestType: string// 263
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  StandardTrailer: IStandardTrailer
}
