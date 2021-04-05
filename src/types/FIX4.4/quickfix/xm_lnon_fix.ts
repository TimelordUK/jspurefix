import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IXMLnonFIX {
  StandardHeader: IStandardHeader
  StandardTrailer: IStandardTrailer
}
