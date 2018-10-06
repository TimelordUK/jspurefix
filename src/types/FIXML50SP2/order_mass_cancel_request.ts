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
  MassCancelRequestType: string// 530
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  RelativeValueSide?: number// 2532
  TransactTime: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
}
