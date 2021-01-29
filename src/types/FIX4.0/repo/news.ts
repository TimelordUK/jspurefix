import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**********************************************************
* The news message is intended for use as a general free *
* format message between the broker and institution.     *
**********************************************************
*/
export interface INews {
  StandardHeader: IStandardHeader
  OrigTime?: string// 42
  Urgency?: string// 61
  RelatdSym?: string// 46
  LinesOfText: number// 33
  Text: string// 58
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  StandardTrailer: IStandardTrailer
}
