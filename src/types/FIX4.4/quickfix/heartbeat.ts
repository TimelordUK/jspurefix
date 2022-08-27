import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IHeartbeat {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TestReqID?: string// [2] 112 (String)
  StandardTrailer: IStandardTrailer// [3] SignatureLength.93, Signature.89, CheckSum.10
}
