import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Market Definition Request message is used to request for *
* market structure information from the Respondent that        *
* receives this request.                                       *
****************************************************************
*/
export interface IMarketDefinitionRequest {
  StandardHeader: IStandardHeader
  MarketReqID: string// 1393
  SubscriptionRequestType: string// 263
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  ParentMktSegmID?: string// 1325
  StandardTrailer: IStandardTrailer
}
