import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Order Mass Cancel Report is used to acknowledge an Order *
* Mass Cancel Request.                                         *
****************************************************************
*/
export interface IOrderMassCancelReport {
  StandardHeader: IStandardHeader
  ClOrdID?: string// 11
  OrderID: string// 37
  SecondaryOrderID?: string// 198
  OrigClOrdID?: string// 41
  TradingSessionID?: string// 336
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
  Side?: string// 54
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
