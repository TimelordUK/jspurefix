import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Sequence Reset message has two modes: Gap Fill mode and *
* Reset mode.                                                 *
***************************************************************
*/
export interface ISequenceReset {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  GapFillFlag?: boolean// [2] 123 (Boolean)
  NewSeqNo: number// [3] 36 (Int)
  StandardTrailer: IStandardTrailer// [4] SignatureLength.93, Signature.89, CheckSum.10
}
