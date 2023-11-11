import { IThrottleMsgTypeGrp } from './throttle_msg_type_grp'

export interface IThrottleParamsGrpNoThrottles {
  ThrottleAction?: number// [1] 1611 (Int)
  ThrottleType?: number// [2] 1612 (Int)
  ThrottleNoMsgs?: number// [3] 1613 (Int)
  ThrottleTimeInterval?: number// [4] 1614 (Int)
  ThrottleTimeUnit?: number// [5] 1615 (Int)
  ThrottleMsgTypeGrp?: IThrottleMsgTypeGrp// [6] NoThrottleMsgType.1618, ThrottleMsgType.1619
}
