import { IStandardHeader } from './set/standard_header'
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
  NoBidComponents: number// 420
  Commission: number// 12
  CommType: string// 13
  ListID?: string// 66
  Country?: string// 421
  Side?: string// 54
  Price?: number// 44
  PriceType?: number// 423
  FairValue?: number// 406
  NetGrossInd?: number// 430
  SettlmntTyp?: string// 63
  FutSettDate?: Date// 64
  TradingSessionID?: string// 336
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
