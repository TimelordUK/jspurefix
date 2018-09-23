import { IThrottleMsgTypeGrp } from './throttle_msg_type_grp'

export interface IThrottleParamsGrp {
  PosReportAction?: number// 2364
  UnderlyingReturnRateValuationDateType?: number// 43073
  ThrottleNoMsgs?: number// 1613
  ThrottleTimeInterval?: number// 1614
  LegEventTimeUnit?: string// 2063
  ThrottleMsgTypeGrp?: IThrottleMsgTypeGrp[]
}
