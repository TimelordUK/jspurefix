import { ILegReturnRateGrpNoLegReturnRates } from './leg_return_rate_grp_no_leg_return_rates'

export interface ILegReturnRateGrp {
  NoLegReturnRates?: ILegReturnRateGrpNoLegReturnRates[]// [1] LegReturnRatePriceSequence.42535, LegReturnRateCommissionBasis.42536 .. LegReturnRateFinalPriceFallback.42559
}
