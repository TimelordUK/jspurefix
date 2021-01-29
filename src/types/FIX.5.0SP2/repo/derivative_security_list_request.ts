import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeInstrument } from './set/derivative_instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Derivative Security List Request message is used to      *
* return a list of securities from the counterparty that match *
* criteria provided on the request                             *
****************************************************************
*/
export interface IDerivativeSecurityListRequest {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityListRequestType: number// 559
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  UnderlyingInstrument?: IUnderlyingInstrument
  DerivativeInstrument?: IDerivativeInstrument
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
