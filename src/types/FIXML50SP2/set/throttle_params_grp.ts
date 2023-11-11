import { IThrottleMsgTypeGrp } from './throttle_msg_type_grp'

export interface IThrottleParamsGrp {
  ThrottleAction?: number// [1] 1611 (Int)
  ThrottleType?: number// [1] 1612 (Int)
  ThrottleNoMsgs?: number// [1] 1613 (Int)
  ThrottleTimeInterval?: number// [1] 1614 (Int)
  ThrottleTimeUnit?: number// [1] 1615 (Int)
  ThrottleMsgTypeGrp?: IThrottleMsgTypeGrp[]// [1] MsgTyp.1619
}
