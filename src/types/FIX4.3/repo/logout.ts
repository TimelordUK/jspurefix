import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The logout message initiates or confirms the termination of *
* a FIX session.                                              *
***************************************************************
*/
export interface ILogout {
  StandardHeader: IStandardHeader
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
