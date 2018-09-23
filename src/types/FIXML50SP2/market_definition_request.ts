import { IStandardHeader } from './set/standard_header'

/*
***********************************************************
* MarketDefinitionRequest can be found in Volume 3 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface IMarketDefinitionRequest {
  MarketReqID: string// 1393
  SubscriptionRequestType: string// 263
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  ParentMktSegmID?: string// 1325
  StandardHeader?: IStandardHeader
}
