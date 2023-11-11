export interface ILimitAmts {
  LimitAmtType?: number// [1] 1631 (Int)
  LastLimitAmt?: number// [1] 1632 (Float)
  LimitAmtRemaining?: number// [1] 1633 (Float)
  LimitUtilizationAmt?: number// [1] 2394 (Float)
  LimitAmt?: number// [1] 2395 (Float)
  LimitAmtCurrency?: string// [1] 1634 (String)
  LimitRole?: number// [1] 2396 (Int)
}
