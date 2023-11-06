export interface ICollateralAmountGrp {
  CurrentCollateralAmount?: number// [1] 1704 (Float)
  CollateralCurrency?: string// [1] 1705 (String)
  CollateralAmountType?: number// [1] 2632 (Int)
  CollateralFXRate?: number// [1] 2090 (Float)
  CollateralFXRateCalc?: string// [1] 2091 (String)
  CollateralType?: string// [1] 1706 (String)
  CollateralAmountMarketSegmentID?: string// [1] 2092 (String)
  CollateralAmountMarketID?: string// [1] 2093 (String)
  HaircutIndicator?: boolean// [1] 1902 (Boolean)
  CollateralPortfolioID?: string// [1] 2350 (String)
  CollateralPercentOverage?: number// [1] 2690 (Float)
  CollateralMarketPrice?: number// [1] 2689 (Float)
}
