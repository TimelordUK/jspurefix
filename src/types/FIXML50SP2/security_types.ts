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
  MDStatisticReqID: string// 2452
  QuoteRespID: string// 693
  QuoteRespType: number// 694
  TotNoSecurityTypes?: number// 557
  LastFragment?: string// 893
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SecTypesGrp?: ISecTypesGrp[]
}
