import { ISideCollateralReinvestmentGrp } from './side_collateral_reinvestment_grp'

export interface ISideCollateralAmountGrpNoSideCollateralAmounts {
  SideCurrentCollateralAmount?: number// [1] 2702 (Float)
  SideCollateralCurrency?: string// [2] 2695 (String)
  SideCollateralCurrencyCodeSource?: string// [3] 2930 (String)
  SideCollateralAmountType?: number// [4] 2694 (Int)
  SideCollateralFXRate?: number// [5] 2696 (Float)
  SideCollateralFXRateCalc?: string// [6] 2697 (String)
  SideCollateralType?: string// [7] 2701 (String)
  SideCollateralAmountMarketSegmentID?: string// [8] 2693 (String)
  SideCollateralAmountMarketID?: string// [9] 2692 (String)
  SideHaircutIndicator?: boolean// [10] 2703 (Boolean)
  SideCollateralPortfolioID?: string// [11] 2700 (String)
  SideCollateralPercentOverage?: number// [12] 2699 (Float)
  SideCollateralMarketPrice?: number// [13] 2698 (Float)
  SideCollateralReinvestmentRate?: number// [14] 2862 (Float)
  SideCollateralReinvestmentGrp?: ISideCollateralReinvestmentGrp// [15] NoSideCollateralReinvestments.2864, SideCollateralReinvestmentType.2867 .. SideCollateralReinvestmentCurrencyCodeSource.2932
  SideUnderlyingRefID?: string// [16] 2863 (String)
}
