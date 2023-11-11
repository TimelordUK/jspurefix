import { IThrottleParamsGrpNoThrottles } from './throttle_params_grp_no_throttles'

export interface IThrottleParamsGrp {
  NoThrottles?: IThrottleParamsGrpNoThrottles[]// [1] ThrottleAction.1611, ThrottleType.1612 .. ThrottleMsgType.1619
}
