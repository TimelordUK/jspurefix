import { Iheader } from './set/header'
import { IBidCompRspGrp } from './set/bid_comp_rsp_grp'
import { Itrailer } from './set/trailer'

export interface IBidResponse {
  header: Iheader
  BidID?: string// 390
  ClientBidID?: string// 391
  BidCompRspGrp?: IBidCompRspGrp
  trailer: Itrailer
}
