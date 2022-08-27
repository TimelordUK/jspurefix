export interface IAllocAckGrp {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocPrice?: number// [3] 366 (Float)
  IndividualAllocID?: string// [4] 467 (String)
  IndividualAllocRejCode?: number// [5] 776 (Int)
  AllocText?: string// [6] 161 (String)
  EncodedAllocTextLen?: number// [7] 360 (Int)
  EncodedAllocText?: Buffer// [8] 361 (RawData)
}
