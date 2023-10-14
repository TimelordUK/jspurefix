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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SessionStatus?: number// [2] 1409 (Int)
  Text?: string// [3] 58 (String)
  EncodedTextLen?: number// [4] 354 (Int)
  EncodedText?: Buffer// [5] 355 (RawData)
  StandardTrailer: IStandardTrailer// [6] SignatureLength.93, Signature.89, CheckSum.10
}
