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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  BidID?: string// [2] 390 (String)
  ClientBidID: string// [3] 391 (String)
  BidRequestTransType: string// [4] 374 (String)
  ListName?: string// [5] 392 (String)
  TotNoRelatedSym: number// [6] 393 (Int)
  BidType: number// [7] 394 (Int)
  NumTickets?: number// [8] 395 (Int)
  Currency?: string// [9] 15 (String)
  SideValue1?: number// [10] 396 (Float)
  SideValue2?: number// [11] 397 (Float)
  BidDescReqGrp?: IBidDescReqGrp[]// [12] BidDescriptorType.399, BidDescriptor.400 .. ValueOfFutures.408
  BidCompReqGrp?: IBidCompReqGrp[]// [13] ListID.66, Side.54 .. AcctIDSource.660
  LiquidityIndType?: number// [14] 409 (Int)
  WtAverageLiquidity?: number// [15] 410 (Float)
  ExchangeForPhysical?: boolean// [16] 411 (Boolean)
  OutMainCntryUIndex?: number// [17] 412 (Float)
  CrossPercent?: number// [18] 413 (Float)
  ProgRptReqs?: number// [19] 414 (Int)
  ProgPeriodInterval?: number// [20] 415 (Int)
  IncTaxInd?: number// [21] 416 (Int)
  ForexReq?: boolean// [22] 121 (Boolean)
  NumBidders?: number// [23] 417 (Int)
  TradeDate?: Date// [24] 75 (LocalDate)
  BidTradeType: string// [25] 418 (String)
  BasisPxType: string// [26] 419 (String)
  StrikeTime?: Date// [27] 443 (UtcTimestamp)
  Text?: string// [28] 58 (String)
  EncodedTextLen?: number// [29] 354 (Int)
  EncodedText?: Buffer// [30] 355 (RawData)
  StandardTrailer: IStandardTrailer// [31] SignatureLength.93, Signature.89, CheckSum.10
}
