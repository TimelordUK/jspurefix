import { IStandardHeader } from './set/standard_header'

/*
***********************************************************
* MarketDefinitionRequest can be found in Volume 3 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface IMarketDefinitionRequest {
  MarketReqID: string// [2] 1393 (String)
  SubscriptionRequestType: string// [2] 263 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  ParentMktSegmID?: string// [2] 1325 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
}
