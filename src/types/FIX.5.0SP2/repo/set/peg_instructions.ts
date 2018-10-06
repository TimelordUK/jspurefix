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
  PegPriceType?: number// 1094
  PegMoveType?: number// 835
  PegOffsetType?: number// 836
  PegLimitType?: number// 837
  PegRoundDirection?: number// 838
  PegScope?: number// 840
  PegSecurityIDSource?: string// 1096
  PegSecurityID?: string// 1097
  PegSymbol?: string// 1098
  PegSecurityDesc?: string// 1099
}
