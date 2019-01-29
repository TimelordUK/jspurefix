import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The order mass cancel request message requests the          *
* cancellation of all of the remaining quantity of a group of *
* orders matching criteria specified within the request.      *
***************************************************************
*/
export interface IOrderMassCancelRequest {
  StandardHeader: IStandardHeader
  ClOrdID: string// 11
  TradingSessionID?: string// 336
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
  Side?: string// 54
  TransactTime: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
