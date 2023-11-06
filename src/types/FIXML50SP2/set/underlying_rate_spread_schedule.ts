import { IUnderlyingRateSpreadStepGrp } from './underlying_rate_spread_step_grp'

export interface IUnderlyingRateSpreadSchedule {
  UnderlyingRateSpreadInitialValue?: number// [1] 43004 (Float)
  UnderlyingRateSpreadStepGrp?: IUnderlyingRateSpreadStepGrp[]// [1] Dt.43006, Val.43007
}
