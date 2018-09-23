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
  OrdStatusReqID: string// 790
  SubscriptionRequestType: string// 263
  SecurityListID?: string// 1465
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  StandardHeader?: IStandardHeader
  InstrumentScope?: IInstrumentScope
}
