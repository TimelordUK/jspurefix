import { IRFQReqGrp } from './set/rfq_req_grp'

export interface IRFQRequest {
  RFQReqID: string// 644
  RFQReqGrp?: IRFQReqGrp
  SubscriptionRequestType?: string// 263
}
