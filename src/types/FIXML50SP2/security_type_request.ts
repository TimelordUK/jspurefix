import { IStandardHeader } from './set/standard_header'

/*
*******************************************************
* SecurityTypeRequest can be found in Volume 3 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface ISecurityTypeRequest {
  MDStatisticReqID: string// 2452
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  InstrumentScopeProduct?: number// 1543
  RelatedSecurityType?: string// 1652
  PaymentSubType?: number// 40993
  StandardHeader?: IStandardHeader
}
