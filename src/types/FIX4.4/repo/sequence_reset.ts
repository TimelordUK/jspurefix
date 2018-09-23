import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Sequence Reset message has two modes: Gap Fill mode and *
* Reset mode.                                                 *
***************************************************************
*/
export interface ISequenceReset {
  StandardHeader: IStandardHeader
  GapFillFlag?: boolean// 123
  NewSeqNo: number// 36
  StandardTrailer: IStandardTrailer
}
