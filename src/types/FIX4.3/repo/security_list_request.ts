import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Security List Request message is used to return a list *
* of securities from the counterparty that match criteria    *
* provided on the request                                    *
**************************************************************
*/
export interface ISecurityListRequest {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  Instrument?: IInstrument
  Currency?: number// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
}
