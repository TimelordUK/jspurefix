import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The reject message should be issued when a message is       *
* received but cannot be properly processed due to a          *
* session-level rule violation. An example of when a reject   *
* may be appropriate would be the receipt of a message with   *
* invalid basic data which successfully passes de-encryption, *
* CheckSum and BodyLength checks.                             *
***************************************************************
*/
export interface IReject {
  StandardHeader: IStandardHeader
  RefSeqNum: number// 45
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
