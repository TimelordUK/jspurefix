export interface ILimitAmtsNoLimitAmts {
  LimitAmtType?: number// [1] 1631 (Int)
  LastLimitAmt?: number// [2] 1632 (Float)
  LimitAmtRemaining?: number// [3] 1633 (Float)
  LimitUtilizationAmt?: number// [4] 2394 (Float)
  LimitAmt?: number// [5] 2395 (Float)
  LimitAmtCurrency?: string// [6] 1634 (String)
  LimitAmtCurrencyCodeSource?: string// [7] 2935 (String)
  LimitRole?: number// [8] 2396 (Int)
}
