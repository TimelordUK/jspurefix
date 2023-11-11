import { IReturnRateGrpNoReturnRates } from './return_rate_grp_no_return_rates'

export interface IReturnRateGrp {
  NoReturnRates?: IReturnRateGrpNoReturnRates[]// [1] ReturnRatePriceSequence.42736, ReturnRateCommissionBasis.42737 .. ReturnRateFinalPriceFallback.42760
}
