export interface IPayCollectGrp {
  PayCollectType?: string// [1] 1708 (String)
  PayCollectCurrency?: string// [1] 1709 (String)
  PayCollectFXRate?: number// [1] 2094 (Float)
  PayCollectFXRateCalc?: string// [1] 2095 (String)
  PayAmount?: number// [1] 1710 (Float)
  CollectAmount?: number// [1] 1711 (Float)
  PayCollectMarketSegmentID?: string// [1] 1712 (String)
  PayCollectMarketID?: string// [1] 1713 (String)
}
