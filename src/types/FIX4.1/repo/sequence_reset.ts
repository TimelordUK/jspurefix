import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
************************************************************
* The sequence reset message is used by the sending        *
* application to reset the incoming sequence number on the *
* opposing side.                                           *
************************************************************
*/
export interface ISequenceReset {
  StandardHeader: IStandardHeader
  GapFillFlag?: string// 123
  NewSeqNo: number// 36
  StandardTrailer: IStandardTrailer
}
