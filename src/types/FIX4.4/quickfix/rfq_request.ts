import { Iheader } from './set/header'
import { IRFQReqGrp } from './set/rfq_req_grp'
import { Itrailer } from './set/trailer'

export interface IRFQRequest {
  header: Iheader
  RFQReqID: string// 644
  RFQReqGrp?: IRFQReqGrp
  SubscriptionRequestType?: string// 263
  trailer: Itrailer
}
