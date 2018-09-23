import { IStandardHeader } from './set/standard_header'
import { IBidDescReqGrp } from './set/bid_desc_req_grp'
import { IBidCompReqGrp } from './set/bid_comp_req_grp'

/*
**********************************************
* BidRequest can be found in Volume 4 of the *
*                                            *
* specification                              *
**********************************************
*/
export interface IBidRequest {
  BidID?: string// 390
  ClientBidID: string// 391
  BidRequestTransType: string// 374
  ListName?: string// 392
  TotNoRelatedSym: number// 393
  BidType: number// 394
  NumTickets?: number// 395
  UnderlyingReturnRatePriceCurrency?: string// 43067
  SideValue1?: number// 396
  SideValue2?: number// 397
  LiquidityIndType?: number// 409
  WtAverageLiquidity?: number// 410
  ExchangeForPhysical?: string// 411
  OutMainCntryUIndex?: number// 412
  CrossPercent?: number// 413
  ProgRptReqs?: number// 414
  ProgPeriodInterval?: number// 415
  IncTaxInd?: number// 416
  ForexReq?: string// 121
  NumBidders?: number// 417
  TradeDate?: Date// 75
  BidTradeType: string// 418
  BasisPxType: string// 419
  StrikeTime?: Date// 443
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  BidDescReqGrp?: IBidDescReqGrp[]
  BidCompReqGrp?: IBidCompReqGrp[]
}
