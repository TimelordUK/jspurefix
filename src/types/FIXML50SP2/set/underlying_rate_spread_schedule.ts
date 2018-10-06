import { IUnderlyingRateSpreadStepGrp } from './underlying_rate_spread_step_grp'

export interface IUnderlyingRateSpreadSchedule {
  UnderlyingRateSpreadInitialValue?: number// 43004
  UnderlyingRateSpreadStepGrp?: IUnderlyingRateSpreadStepGrp[]
}
