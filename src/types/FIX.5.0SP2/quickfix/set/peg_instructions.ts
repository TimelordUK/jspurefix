/*
****************************************************************
* The Peg Instructions component block is used to tie the      *
* price of a security to a market event such as opening price, *
* mid-price, best price. The Peg Instructions block may also   *
* be used to tie the price to the behavior of a related        *
* security.                                                    *
****************************************************************
*/
export interface IPegInstructions {
  PegOffsetValue?: number// [1] 211 (Float)
  PegPriceType?: number// [2] 1094 (Int)
  PegMoveType?: number// [3] 835 (Int)
  PegOffsetType?: number// [4] 836 (Int)
  PegLimitType?: number// [5] 837 (Int)
  PegRoundDirection?: number// [6] 838 (Int)
  PegScope?: number// [7] 840 (Int)
  PegSecurityIDSource?: string// [8] 1096 (String)
  PegSecurityID?: string// [9] 1097 (String)
  PegSymbol?: string// [10] 1098 (String)
  PegSecurityDesc?: string// [11] 1099 (String)
}
