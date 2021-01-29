import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The BidRequest Message can be used in one of two ways     *
* depending on which market conventions are being followed. *
*************************************************************
*/
export interface IBidRequest {
  StandardHeader: IStandardHeader
  BidID?: string// 390
  ClientBidID: string// 391
  BidRequestTransType: string// 374
  ListName?: string// 392
  TotalNumSecurities: number// 393
  BidType: number// 394
  NumTickets?: number// 395
  Currency?: string// 15
  SideValue1?: number// 396
  SideValue2?: number// 397
  NoBidDescriptors?: number// 398
  BidDescriptorType?: number// 399
  BidDescriptor?: string// 400
  SideValueInd?: number// 401
  LiquidityValue?: number// 404
  LiquidityNumSecurities?: number// 441
  LiquidityPctLow?: number// 402
  LiquidityPctHigh?: number// 403
  EFPTrackingError?: number// 405
  FairValue?: number// 406
  OutsideIndexPct?: number// 407
  ValueOfFutures?: number// 408
  NoBidComponents?: number// 420
  ListID?: string// 66
  Side?: string// 54
  TradingSessionID?: string// 336
  NetGrossInd?: number// 430
  SettlmntTyp?: string// 63
  FutSettDate?: Date// 64
  Account?: string// 1
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
  TradeType: string// 418
  BasisPxType: string// 419
  StrikeTime?: Date// 443
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
