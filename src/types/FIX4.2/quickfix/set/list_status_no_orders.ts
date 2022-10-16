export interface IListStatusNoOrders {
  ClOrdID: string// [1] 11 (String)
  CumQty: number// [2] 14 (Float)
  OrdStatus: string// [3] 39 (String)
  LeavesQty: number// [4] 151 (Float)
  CxlQty: number// [5] 84 (Float)
  AvgPx: number// [6] 6 (Float)
  OrdRejReason?: number// [7] 103 (Int)
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Length)
  EncodedText?: Buffer// [10] 355 (RawData)
}
