import { IStandardHeader } from './set/standard_header'
import { IBidDescReqGrp } from './set/bid_desc_req_grp'
import { IBidCompReqGrp } from './set/bid_comp_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

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
  CurrencyCodeSource?: string// [10] 2897 (String)
  SideValue1?: number// [11] 396 (Float)
  SideValue2?: number// [12] 397 (Float)
  BidDescReqGrp?: IBidDescReqGrp// [13] NoBidDescriptors.398, BidDescriptorType.399 .. ValueOfFutures.408
  BidCompReqGrp?: IBidCompReqGrp// [14] NoBidComponents.420, ListID.66 .. AcctIDSource.660
  LiquidityIndType?: number// [15] 409 (Int)
  WtAverageLiquidity?: number// [16] 410 (Float)
  ExchangeForPhysical?: boolean// [17] 411 (Boolean)
  OutMainCntryUIndex?: number// [18] 412 (Float)
  CrossPercent?: number// [19] 413 (Float)
  ProgRptReqs?: number// [20] 414 (Int)
  ProgPeriodInterval?: number// [21] 415 (Int)
  IncTaxInd?: number// [22] 416 (Int)
  ForexReq?: boolean// [23] 121 (Boolean)
  NumBidders?: number// [24] 417 (Int)
  TradeDate?: Date// [25] 75 (LocalDate)
  BidTradeType: string// [26] 418 (String)
  BasisPxType: string// [27] 419 (String)
  StrikeTime?: Date// [28] 443 (UtcTimestamp)
  Text?: string// [29] 58 (String)
  EncodedTextLen?: number// [30] 354 (Length)
  EncodedText?: Buffer// [31] 355 (RawData)
  StandardTrailer: IStandardTrailer// [32] SignatureLength.93, Signature.89, CheckSum.10
}
