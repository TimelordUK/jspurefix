import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'
import { ITargetParties } from './set/target_parties'

/*
****************************************************************
* The Order Mass Action Request message can be used to request *
* the suspension or release of a group of orders that match    *
* the criteria specified within the request. This is           *
* equivalent to individual Order Cancel Replace Requests for   *
* each order with or without adding "S" to the ExecInst        *
* values. It can also be used for mass order cancellation.     *
****************************************************************
*/
export interface IOrderMassActionRequest {
  StandardHeader: IStandardHeader
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  MassActionType: number// 1373
  MassActionScope: number// 1374
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Parties?: IParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
  Side?: string// 54
  TransactTime: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
  TargetParties?: ITargetParties[]
}
