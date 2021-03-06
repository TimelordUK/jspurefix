import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderMassStatusRequest {
  StandardHeader: IStandardHeader
  MassStatusReqID: string// 584
  MassStatusReqType: number// 585
  Parties?: IParties
  Account?: string// 1
  AcctIDSource?: number// 660
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
  Side?: string// 54
  StandardTrailer: IStandardTrailer
}
