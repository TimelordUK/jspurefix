import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
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
  UnderlyingInstrument?: IUnderlyingInstrument
  Currency?: number// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
}
