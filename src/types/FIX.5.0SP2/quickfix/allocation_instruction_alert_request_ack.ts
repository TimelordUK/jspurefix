import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocationInstructionAlertRequestAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocRequestID: string// [2] 2758 (String)
  AllocRequestStatus: number// [3] 2768 (Int)
  RejectText?: string// [4] 1328 (String)
  EncodedRejectTextLen?: number// [5] 1664 (Length)
  EncodedRejectText?: Buffer// [6] 1665 (RawData)
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
