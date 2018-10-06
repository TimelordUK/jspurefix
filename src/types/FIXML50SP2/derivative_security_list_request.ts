import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeInstrument } from './set/derivative_instrument'

/*
*************************************************************
* DerivativeSecurityListRequest can be found in Volume 3 of *
* the                                                       *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IDerivativeSecurityListRequest {
  SecurityReqID: string// 320
  SecurityListRequestType: number// 559
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  SecuritySubType?: string// 762
  Currency?: string// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
  StandardHeader?: IStandardHeader
  UnderlyingInstrument?: IUnderlyingInstrument
  DerivativeInstrument?: IDerivativeInstrument
}
