import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The logout message initiates or confirms the termination of *
* a FIX session. Disconnection without the exchange of logout *
* messages should be interpreted as an abnormal condition.    *
***************************************************************
*/
export interface ILogout {
  StandardHeader: IStandardHeader
  SessionStatus?: number// 1409
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
