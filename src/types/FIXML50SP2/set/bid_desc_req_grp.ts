export interface IBidDescReqGrp {
  BidDescriptorType?: number// [1] 399 (Int)
  BidDescriptor?: string// [1] 400 (String)
  SideValueInd?: number// [1] 401 (Int)
  LiquidityValue?: number// [1] 404 (Float)
  LiquidityNumSecurities?: number// [1] 441 (Int)
  LiquidityPctLow?: number// [1] 402 (Float)
  LiquidityPctHigh?: number// [1] 403 (Float)
  EFPTrackingError?: number// [1] 405 (Float)
  FairValue?: number// [1] 406 (Float)
  OutsideIndexPct?: number// [1] 407 (Float)
  ValueOfFutures?: number// [1] 408 (Float)
}
