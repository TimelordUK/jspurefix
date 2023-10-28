import { ICollateralReinvestmentGrp } from './collateral_reinvestment_grp'

export interface ICollateralAmountGrpNoCollateralAmounts {
  CurrentCollateralAmount?: number// [1] 1704 (Float)
  CollateralCurrency?: string// [2] 1705 (String)
  CollateralCurrencyCodeSource?: string// [3] 2929 (String)
  CollateralAmountType?: number// [4] 2632 (Int)
  CollateralFXRate?: number// [5] 2090 (Float)
  CollateralFXRateCalc?: string// [6] 2091 (String)
  CollateralType?: string// [7] 1706 (String)
  CollateralAmountMarketSegmentID?: string// [8] 2092 (String)
  CollateralAmountMarketID?: string// [9] 2093 (String)
  HaircutIndicator?: boolean// [10] 1902 (Boolean)
  CollateralPortfolioID?: string// [11] 2350 (String)
  CollateralPercentOverage?: number// [12] 2690 (Float)
  CollateralMarketPrice?: number// [13] 2689 (Float)
  CollateralReinvestmentRate?: number// [14] 2840 (Float)
  CollateralReinvestmentGrp?: ICollateralReinvestmentGrp// [15] NoCollateralReinvestments.2845, CollateralReinvestmentType.2844 .. CollateralReinvestmentCurrencyCodeSource.2931
  UnderlyingRefID?: string// [16] 2841 (String)
}
