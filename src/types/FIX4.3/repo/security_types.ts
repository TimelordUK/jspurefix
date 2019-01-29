import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***********************************************************
* The Security Type message is used to return a list of   *
* security types available from a counterparty or market. *
***********************************************************
*/
export interface ISecurityTypes {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityResponseType: number// 323
  SecurityType?: string// 167
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
}
