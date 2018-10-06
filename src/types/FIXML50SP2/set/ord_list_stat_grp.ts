export interface IOrdListStatGrp {
  ClOrdID?: string// 11
  OrderID?: string// 37
  SecondaryClOrdID?: string// 526
  CumQty: number// 14
  OrdStatus: string// 39
  WorkingIndicator?: boolean// 636
  LeavesQty: number// 151
  CxlQty: number// 84
  AvgPx: number// 6
  OrdRejReason?: number// 103
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
