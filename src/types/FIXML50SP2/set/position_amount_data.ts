export interface IPositionAmountData {
  PosAmtType?: string// [1] 707 (String)
  PosAmt?: number// [1] 708 (Float)
  PosAmtStreamDesc?: string// [1] 2096 (String)
  PositionCurrency?: string// [1] 1055 (String)
  PositionFXRate?: number// [1] 2097 (Float)
  PositionFXRateCalc?: string// [1] 2098 (String)
  SecurityClassificationReason?: number// [1] 1583 (Int)
  PosAmtMarketSegmentID?: string// [1] 2099 (String)
  PosAmtMarketID?: string// [1] 2100 (String)
}
