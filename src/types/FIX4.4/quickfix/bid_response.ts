import { IStandardHeader } from './set/standard_header'
import { IBidCompRspGrp } from './set/bid_comp_rsp_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IBidResponse {
  StandardHeader: IStandardHeader
  BidID?: string// 390
  ClientBidID?: string// 391
  BidCompRspGrp?: IBidCompRspGrp
  StandardTrailer: IStandardTrailer
}
