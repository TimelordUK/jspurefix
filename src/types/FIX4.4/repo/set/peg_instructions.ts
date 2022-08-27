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
  PegMoveType?: number// [2] 835 (Int)
  PegOffsetType?: number// [3] 836 (Int)
  PegLimitType?: number// [4] 837 (Int)
  PegRoundDirection?: number// [5] 838 (Int)
  PegScope?: number// [6] 840 (Int)
}
