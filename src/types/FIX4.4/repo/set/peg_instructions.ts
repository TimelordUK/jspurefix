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
  PegOffsetValue?: number// 211
  PegMoveType?: number// 835
  PegOffsetType?: number// 836
  PegLimitType?: number// 837
  PegRoundDirection?: number// 838
  PegScope?: number// 840
}
