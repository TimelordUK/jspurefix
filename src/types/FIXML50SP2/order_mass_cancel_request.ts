import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'

/*
**********************************************************
* OrderMassCancelRequest can be found in Volume 4 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IOrderMassCancelRequest {
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  MassStatusReqType: number// 585
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  RelativeValueSide?: number// 2532
  RelSymTransactTime: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
}
