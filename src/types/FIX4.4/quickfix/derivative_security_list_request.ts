import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IDerivativeSecurityListRequest {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityListRequestType: number// 559
  UnderlyingInstrument?: IUnderlyingInstrument
  SecuritySubType?: string// 762
  Currency?: string// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
}
