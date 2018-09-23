import { IInstrument } from './instrument'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IQuotEntryGrp {
  QuoteEntryID: string// 299
  LegBidPx?: number// 681
  LegOfferPx?: number// 684
  TotalBidSize?: number// 1749
  TotalOfferSize?: number// 1750
  BidSize?: number// 134
  OfferSize?: number// 135
  ValidUntilTime?: Date// 62
  BidSpotRate?: number// 188
  OfferSpotRate?: number// 190
  BidForwardPoints?: string// 189
  OfferForwardPoints?: string// 191
  LegMidPx?: number// 2346
  BidYield?: number// 632
  MidYield?: number// 633
  OfferYield?: number// 634
  RelSymTransactTime?: Date// 1504
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  LegSettlDate?: Date// 588
  OrdType?: string// 40
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  BidForwardPoints2?: string// 642
  OfferForwardPoints2?: string// 643
  UnderlyingReturnRatePriceCurrency?: string// 43067
  BookingType?: number// 775
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  Instrument?: IInstrument
  InstrmtLegGrp?: IInstrmtLegGrp[]
}
