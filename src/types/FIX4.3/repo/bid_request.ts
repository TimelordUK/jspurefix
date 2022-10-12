import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The BidRequest Message can be used in one of two ways     *
* depending on which market conventions are being followed. *
*************************************************************
*/
export interface IBidRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  BidID?: string// [2] 390 (String)
  ClientBidID: string// [3] 391 (String)
  BidRequestTransType: string// [4] 374 (String)
  ListName?: string// [5] 392 (String)
  TotalNumSecurities: number// [6] 393 (Int)
  BidType: number// [7] 394 (Int)
  NumTickets?: number// [8] 395 (Int)
  Currency?: string// [9] 15 (String)
  SideValue1?: number// [10] 396 (Float)
  SideValue2?: number// [11] 397 (Float)
  NoBidDescriptors?: number// [12] 398 (Int)
  BidDescriptorType?: number// [13] 399 (Int)
  BidDescriptor?: string// [14] 400 (String)
  SideValueInd?: number// [15] 401 (Int)
  LiquidityValue?: number// [16] 404 (Float)
  LiquidityNumSecurities?: number// [17] 441 (Int)
  LiquidityPctLow?: number// [18] 402 (Float)
  LiquidityPctHigh?: number// [19] 403 (Float)
  EFPTrackingError?: number// [20] 405 (Float)
  FairValue?: number// [21] 406 (Float)
  OutsideIndexPct?: number// [22] 407 (Float)
  ValueOfFutures?: number// [23] 408 (Float)
  NoBidComponents?: number// [24] 420 (Int)
  ListID?: string// [25] 66 (String)
  Side?: string// [26] 54 (String)
  TradingSessionID?: string// [27] 336 (String)
  NetGrossInd?: number// [28] 430 (Int)
  SettlmntTyp?: string// [29] 63 (String)
  FutSettDate?: Date// [30] 64 (LocalDate)
  Account?: string// [31] 1 (String)
  LiquidityIndType?: number// [32] 409 (Int)
  WtAverageLiquidity?: number// [33] 410 (Float)
  ExchangeForPhysical?: boolean// [34] 411 (Boolean)
  OutMainCntryUIndex?: number// [35] 412 (Float)
  CrossPercent?: number// [36] 413 (Float)
  ProgRptReqs?: number// [37] 414 (Int)
  ProgPeriodInterval?: number// [38] 415 (Int)
  IncTaxInd?: number// [39] 416 (Int)
  ForexReq?: boolean// [40] 121 (Boolean)
  NumBidders?: number// [41] 417 (Int)
  TradeDate?: Date// [42] 75 (LocalDate)
  TradeType: string// [43] 418 (String)
  BasisPxType: string// [44] 419 (String)
  StrikeTime?: Date// [45] 443 (UtcTimestamp)
  Text?: string// [46] 58 (String)
  EncodedTextLen?: number// [47] 354 (Int)
  EncodedText?: Buffer// [48] 355 (RawData)
  StandardTrailer: IStandardTrailer// [49] SignatureLength.93, Signature.89, CheckSum.10
}
