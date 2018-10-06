import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Security Type Request message is used to return a list *
* of security types available from a counterparty or market. *
**************************************************************
*/
export interface ISecurityTypeRequest {
  StandardHeader: IStandardHeader
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
  StandardTrailer: IStandardTrailer
}
