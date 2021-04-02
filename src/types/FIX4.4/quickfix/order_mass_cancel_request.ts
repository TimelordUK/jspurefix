import { Iheader } from './set/header'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { Itrailer } from './set/trailer'

export interface IOrderMassCancelRequest {
  header: Iheader
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  MassCancelRequestType: string// 530
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
  Side?: string// 54
  TransactTime: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  trailer: Itrailer
}
