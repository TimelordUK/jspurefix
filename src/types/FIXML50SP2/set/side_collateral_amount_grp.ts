export interface ISideCollateralAmountGrp {
  SideCurrentCollateralAmount?: number// [1] 2702 (Float)
  SideCollateralCurrency?: string// [1] 2695 (String)
  SideCollateralAmountType?: number// [1] 2694 (Int)
  SideCollateralFXRate?: number// [1] 2696 (Float)
  SideCollateralFXRateCalc?: string// [1] 2697 (String)
  SideCollateralType?: string// [1] 2701 (String)
  SideCollateralAmountMarketSegmentID?: string// [1] 2693 (String)
  SideCollateralAmountMarketID?: string// [1] 2692 (String)
  SideHaircutIndicator?: boolean// [1] 2703 (Boolean)
  SideCollateralPortfolioID?: string// [1] 2700 (String)
  SideCollateralPercentOverage?: number// [1] 2699 (Float)
  SideCollateralMarketPrice?: number// [1] 2698 (Float)
}
