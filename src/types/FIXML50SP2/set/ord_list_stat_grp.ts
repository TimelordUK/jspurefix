export interface IOrdListStatGrp {
  ClOrdID?: string// 11
  NotAffectedOrderID?: string// 1371
  SecondaryClOrdID?: string// 526
  CumQty: number// 14
  OrdStatus: string// 39
  WorkingIndicator?: string// 636
  LeavesQty: number// 151
  CxlQty: number// 84
  SideAvgPx: number// 1852
  CollRptRejectReason?: number// 2487
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
}
