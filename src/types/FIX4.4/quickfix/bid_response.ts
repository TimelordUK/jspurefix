import { IBidCompRspGrp } from './set/bid_comp_rsp_grp'

export interface IBidResponse {
  BidID?: string// 390
  ClientBidID?: string// 391
  BidCompRspGrp?: IBidCompRspGrp
}
