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
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  ParentMktSegmID?: string// 1325
  StandardHeader?: IStandardHeader
}
