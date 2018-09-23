import { IStandardHeader } from './set/standard_header'
import { IBidCompRspGrp } from './set/bid_comp_rsp_grp'

/*
***********************************************
* BidResponse can be found in Volume 4 of the *
*                                             *
* specification                               *
***********************************************
*/
export interface IBidResponse {
  BidID?: string// 390
  ClientBidID?: string// 391
  StandardHeader?: IStandardHeader
  BidCompRspGrp?: IBidCompRspGrp[]
}
