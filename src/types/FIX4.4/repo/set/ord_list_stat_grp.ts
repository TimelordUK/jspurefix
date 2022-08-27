export interface IOrdListStatGrp {
  ClOrdID: string// [1] 11 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  CumQty: number// [3] 14 (Float)
  OrdStatus: string// [4] 39 (String)
  WorkingIndicator?: boolean// [5] 636 (Boolean)
  LeavesQty: number// [6] 151 (Float)
  CxlQty: number// [7] 84 (Float)
  AvgPx: number// [8] 6 (Float)
  OrdRejReason?: number// [9] 103 (Int)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Int)
  EncodedText?: Buffer// [12] 355 (RawData)
}
