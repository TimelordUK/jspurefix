import { IStandardHeader } from './set/standard_header'
import { IBidDescReqGrp } from './set/bid_desc_req_grp'
import { IBidCompReqGrp } from './set/bid_comp_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The BidRequest Message can be used in one of two ways        *
* depending on which market conventions are being followed.    *
*                                                              *
* In the "Non disclosed" convention (e.g. US/European model)   *
* the BidRequest message can be used to request a bid based on *
* the sector, country, index and liquidity information         *
* contained within the message itself. In the "Non disclosed"  *
* convention the entry repeating group is used to define       *
* liquidity of the program. See " Program/Basket/List Trading" *
* for an example.                                              *
*                                                              *
* In the "Disclosed" convention (e.g. Japanese model) the      *
* BidRequest message can be used to request bids based on the  *
* ListOrderDetail messages sent in advance of BidRequest       *
* message. In the "Disclosed" convention the list repeating    *
* group is used to define which ListOrderDetail messages a bid *
* is being sort for and the directions of the required bids.   *
****************************************************************
*/
export interface IBidRequest {
  StandardHeader: IStandardHeader
  BidID?: string// 390
  ClientBidID: string// 391
  BidRequestTransType: string// 374
  ListName?: string// 392
  TotNoRelatedSym: number// 393
  BidType: number// 394
  NumTickets?: number// 395
  Currency?: string// 15
  SideValue1?: number// 396
  SideValue2?: number// 397
  BidDescReqGrp?: IBidDescReqGrp[]
  BidCompReqGrp?: IBidCompReqGrp[]
  LiquidityIndType?: number// 409
  WtAverageLiquidity?: number// 410
  ExchangeForPhysical?: boolean// 411
  OutMainCntryUIndex?: number// 412
  CrossPercent?: number// 413
  ProgRptReqs?: number// 414
  ProgPeriodInterval?: number// 415
  IncTaxInd?: number// 416
  ForexReq?: boolean// 121
  NumBidders?: number// 417
  TradeDate?: Date// 75
  BidTradeType: string// 418
  BasisPxType: string// 419
  StrikeTime?: Date// 443
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
