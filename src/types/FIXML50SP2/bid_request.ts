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
  BidID?: string// [2] 390 (String)
  ClientBidID: string// [2] 391 (String)
  BidRequestTransType: string// [2] 374 (String)
  ListName?: string// [2] 392 (String)
  TotNoRelatedSym: number// [2] 393 (Int)
  BidType: number// [2] 394 (Int)
  NumTickets?: number// [2] 395 (Int)
  Currency?: string// [2] 15 (String)
  SideValue1?: number// [2] 396 (Float)
  SideValue2?: number// [2] 397 (Float)
  LiquidityIndType?: number// [2] 409 (Int)
  WtAverageLiquidity?: number// [2] 410 (Float)
  ExchangeForPhysical?: boolean// [2] 411 (Boolean)
  OutMainCntryUIndex?: number// [2] 412 (Float)
  CrossPercent?: number// [2] 413 (Float)
  ProgRptReqs?: number// [2] 414 (Int)
  ProgPeriodInterval?: number// [2] 415 (Int)
  IncTaxInd?: number// [2] 416 (Int)
  ForexReq?: boolean// [2] 121 (Boolean)
  NumBidders?: number// [2] 417 (Int)
  TradeDate?: Date// [2] 75 (LocalDate)
  BidTradeType: string// [2] 418 (String)
  BasisPxType: string// [2] 419 (String)
  StrikeTime?: Date// [2] 443 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  BidDescReqGrp?: IBidDescReqGrp[]// [2] BidDescptrTyp.399, BidDescptr.400 .. ValuOfFuts.408
  BidCompReqGrp?: IBidCompReqGrp[]// [3] ID.66, Side.54 .. AcctIDSrc.660
}
