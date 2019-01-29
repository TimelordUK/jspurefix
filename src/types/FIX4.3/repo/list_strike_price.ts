import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The strike price message is used to exchange strike price *
* information for principal trades.                         *
*************************************************************
*/
export interface IListStrikePrice {
  StandardHeader: IStandardHeader
  ListID: string// 66
  TotNoStrikes: number// 422
  NoStrikes: number// 428
  Instrument: IInstrument
  PrevClosePx?: number// 140
  ClOrdID?: string// 11
  Side?: string// 54
  Price: number// 44
  Currency?: number// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
