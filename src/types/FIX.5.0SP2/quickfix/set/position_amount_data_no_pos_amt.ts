export interface IPositionAmountDataNoPosAmt {
  PosAmtType?: string// [1] 707 (String)
  PosAmt?: number// [2] 708 (Float)
  PosAmtStreamDesc?: string// [3] 2096 (String)
  PositionCurrency?: string// [4] 1055 (String)
  PositionCurrencyCodeSource?: string// [5] 2937 (String)
  PositionFXRate?: number// [6] 2097 (Float)
  PositionFXRateCalc?: string// [7] 2098 (String)
  PosAmtReason?: number// [8] 1585 (Int)
  PosAmtMarketSegmentID?: string// [9] 2099 (String)
  PosAmtMarketID?: string// [10] 2100 (String)
  PosAmtPrice?: number// [11] 2876 (Float)
  PosAmtPriceType?: number// [12] 2877 (Int)
}
