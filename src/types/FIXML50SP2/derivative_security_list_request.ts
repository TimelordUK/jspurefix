import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeInstrument } from './set/derivative_instrument'

/*
*************************************************************
* DerivativeSecurityListRequest can be found in Volume 3 of *
* the                                                       *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IDerivativeSecurityListRequest {
  MDStatisticReqID: string// 2452
  SecurityListRequestType: number// 559
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  PaymentSubType?: number// 40993
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
  StandardHeader?: IStandardHeader
  UnderlyingInstrument?: IUnderlyingInstrument
  DerivativeInstrument?: IDerivativeInstrument
}
