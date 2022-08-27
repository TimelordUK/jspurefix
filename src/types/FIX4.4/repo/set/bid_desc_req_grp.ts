export interface IBidDescReqGrp {
  BidDescriptorType?: number// [1] 399 (Int)
  BidDescriptor?: string// [2] 400 (String)
  SideValueInd?: number// [3] 401 (Int)
  LiquidityValue?: number// [4] 404 (Float)
  LiquidityNumSecurities?: number// [5] 441 (Int)
  LiquidityPctLow?: number// [6] 402 (Float)
  LiquidityPctHigh?: number// [7] 403 (Float)
  EFPTrackingError?: number// [8] 405 (Float)
  FairValue?: number// [9] 406 (Float)
  OutsideIndexPct?: number// [10] 407 (Float)
  ValueOfFutures?: number// [11] 408 (Float)
}
