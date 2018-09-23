import { IStandardHeader } from './set/standard_header'
import { IBidCompRspGrp } from './set/bid_comp_rsp_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Bid Response message can be used in one of two ways     *
* depending on which market conventions are being followed.   *
*                                                             *
* In the "Non disclosed" convention the Bid Response message  *
* can be used to supply a bid based on the sector, country,   *
* index and liquidity information contained within the        *
* corresponding bid request message. See "Program/Basket/List *
* Trading"  for an example.                                   *
*                                                             *
* In the "Disclosed" convention the Bid Response message can  *
* be used to supply bids based on the List Order Detail       *
* messages sent in advance of the corresponding Bid Request   *
* message.                                                    *
***************************************************************
*/
export interface IBidResponse {
  StandardHeader: IStandardHeader
  BidID?: string// 390
  ClientBidID?: string// 391
  BidCompRspGrp: IBidCompRspGrp[]
  StandardTrailer: IStandardTrailer
}
