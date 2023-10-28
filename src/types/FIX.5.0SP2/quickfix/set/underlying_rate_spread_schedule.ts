import { IUnderlyingRateSpreadStepGrp } from './underlying_rate_spread_step_grp'

export interface IUnderlyingRateSpreadSchedule {
  UnderlyingRateSpreadInitialValue?: number// [1] 43004 (Float)
  UnderlyingRateSpreadStepGrp?: IUnderlyingRateSpreadStepGrp// [2] NoUnderlyingRateSpreadSteps.43005, UnderlyingRateSpreadStepDate.43006, UnderlyingRateSpreadStepValue.43007
}
