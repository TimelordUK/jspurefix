import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISecTypesGrp } from './set/sec_types_grp'

/*
*************************************************
* SecurityTypes can be found in Volume 3 of the *
*                                               *
* specification                                 *
*************************************************
*/
export interface ISecurityTypes {
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityResponseType: number// 323
  TotNoSecurityTypes?: number// 557
  LastFragment?: boolean// 893
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SecTypesGrp?: ISecTypesGrp[]
}
