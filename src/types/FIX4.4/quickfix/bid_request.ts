import { IBidDescReqGrp } from './set/bid_desc_req_grp'
import { IBidCompReqGrp } from './set/bid_comp_req_grp'

export interface IBidRequest {
  BidID?: string// 390
  ClientBidID: string// 391
  BidRequestTransType: string// 374
  ListName?: string// 392
  TotNoRelatedSym: number// 393
  BidType: number// 394
  NumTickets?: number// 395
  Currency?: number// 15
  SideValue1?: number// 396
  SideValue2?: number// 397
  BidDescReqGrp?: IBidDescReqGrp
  BidCompReqGrp?: IBidCompReqGrp
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
}
