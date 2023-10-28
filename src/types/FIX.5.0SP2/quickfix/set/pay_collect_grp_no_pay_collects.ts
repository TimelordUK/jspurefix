export interface IPayCollectGrpNoPayCollects {
  PayCollectType?: string// [1] 1708 (String)
  PayCollectCurrency?: string// [2] 1709 (String)
  PayCollectCurrencyCodeSource?: string// [3] 2955 (String)
  PayCollectFXRate?: number// [4] 2094 (Float)
  PayCollectFXRateCalc?: string// [5] 2095 (String)
  PayAmount?: number// [6] 1710 (Float)
  CollectAmount?: number// [7] 1711 (Float)
  PayCollectMarketSegmentID?: string// [8] 1712 (String)
  PayCollectMarketID?: string// [9] 1713 (String)
}
