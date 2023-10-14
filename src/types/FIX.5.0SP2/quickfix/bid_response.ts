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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  BidID?: string// [2] 390 (String)
  ClientBidID?: string// [3] 391 (String)
  BidCompRspGrp: IBidCompRspGrp[]// [4] Commission.12, CommType.13 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
