import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Security Status Request message provides for the ability *
* to request the status of a security.                         *
****************************************************************
*/
export interface ISecurityStatusRequest {
  StandardHeader: IStandardHeader
  SecurityStatusReqID: string// 324
  Instrument: IInstrument
  Currency?: number// 15
  SubscriptionRequestType: string// 263
  TradingSessionID?: string// 336
  StandardTrailer: IStandardTrailer
}
