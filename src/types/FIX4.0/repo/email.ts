import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
********************************************************
* Format and purpose similar to News message, however, *
* intended for private use between two parties.        *
********************************************************
*/
export interface IEmail {
  StandardHeader: IStandardHeader
  EmailType: string// 94
  OrigTime?: string// 42
  RelatdSym?: string// 46
  OrderID?: string// 37
  ClOrdID?: string// 11
  LinesOfText: number// 33
  Text: string// 58
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  StandardTrailer: IStandardTrailer
}
