import { IStandardHeader } from './set/standard_header'

/*
*******************************************************
* SecurityTypeRequest can be found in Volume 3 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface ISecurityTypeRequest {
  SecurityReqID: string// 320
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Product?: number// 460
  SecurityType?: string// 167
  SecuritySubType?: string// 762
  StandardHeader?: IStandardHeader
}
