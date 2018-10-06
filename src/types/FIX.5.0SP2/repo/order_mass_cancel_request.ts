import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'
import { ITargetParties } from './set/target_parties'

/*
****************************************************************
* The order mass cancel request message requests the           *
* cancellation of all of the remaining quantity of a group of  *
* orders matching criteria specified within the request. NOTE: *
* This message can only be used to cancel order messages       *
* (reduce the full quantity).                                  *
****************************************************************
*/
export interface IOrderMassCancelRequest {
  StandardHeader: IStandardHeader
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  MassCancelRequestType: string// 530
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Parties?: IParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  Side?: string// 54
  TransactTime: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
  TargetParties?: ITargetParties[]
}
