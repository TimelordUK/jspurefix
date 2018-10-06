import { IThrottleMsgTypeGrp } from './throttle_msg_type_grp'

export interface IThrottleParamsGrp {
  ThrottleAction?: number// 1611
  ThrottleType?: number// 1612
  ThrottleNoMsgs?: number// 1613
  ThrottleTimeInterval?: number// 1614
  ThrottleTimeUnit?: number// 1615
  ThrottleMsgTypeGrp?: IThrottleMsgTypeGrp[]
}
