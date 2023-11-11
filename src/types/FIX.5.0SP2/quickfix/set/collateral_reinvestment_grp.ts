import { ICollateralReinvestmentGrpNoCollateralReinvestments } from './collateral_reinvestment_grp_no_collateral_reinvestments'

export interface ICollateralReinvestmentGrp {
  NoCollateralReinvestments?: ICollateralReinvestmentGrpNoCollateralReinvestments[]// [1] CollateralReinvestmentType.2844, CollateralReinvestmentAmount.2842 .. CollateralReinvestmentCurrencyCodeSource.2931
}
