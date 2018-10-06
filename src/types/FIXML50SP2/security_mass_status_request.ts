import { IStandardHeader } from './set/standard_header'
import { IInstrumentScope } from './set/instrument_scope'

/*
*************************************************************
* SecurityMassStatusRequest can be found in Volume 3 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface ISecurityMassStatusRequest {
  SecurityStatusReqID: string// 324
  SubscriptionRequestType: string// 263
  SecurityListID?: string// 1465
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  StandardHeader?: IStandardHeader
  InstrumentScope?: IInstrumentScope
}
