export interface IPegInstructions {
  PegOffsetValue?: number// [1] 211 (Float)
  PegPriceType?: number// [1] 1094 (Int)
  PegMoveType?: number// [1] 835 (Int)
  PegOffsetType?: number// [1] 836 (Int)
  PegLimitType?: number// [1] 837 (Int)
  PegRoundDirection?: number// [1] 838 (Int)
  PegScope?: number// [1] 840 (Int)
  PegSecurityIDSource?: string// [1] 1096 (String)
  PegSecurityID?: string// [1] 1097 (String)
  PegSymbol?: string// [1] 1098 (String)
  PegSecurityDesc?: string// [1] 1099 (String)
}
