import { IInstrument } from './instrument'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IQuotEntryAckGrp {
  QuoteEntryID?: string// [1] 299 (String)
  BidPx?: number// [1] 132 (Float)
  OfferPx?: number// [1] 133 (Float)
  BidSize?: number// [1] 134 (Float)
  OfferSize?: number// [1] 135 (Float)
  ValidUntilTime?: Date// [1] 62 (UtcTimestamp)
  BidSpotRate?: number// [1] 188 (Float)
  OfferSpotRate?: number// [1] 190 (Float)
  BidForwardPoints?: number// [1] 189 (Float)
  OfferForwardPoints?: number// [1] 191 (Float)
  MidPx?: number// [1] 631 (Float)
  BidYield?: number// [1] 632 (Float)
  MidYield?: number// [1] 633 (Float)
  OfferYield?: number// [1] 634 (Float)
  TransactTime?: Date// [1] 60 (UtcTimestamp)
  TradingSessionID?: string// [1] 336 (String)
  TradingSessionSubID?: string// [1] 625 (String)
  SettlDate?: Date// [1] 64 (LocalDate)
  OrdType?: string// [1] 40 (String)
  SettlDate2?: Date// [1] 193 (LocalDate)
  OrderQty2?: number// [1] 192 (Float)
  BidForwardPoints2?: number// [1] 642 (Float)
  OfferForwardPoints2?: number// [1] 643 (Float)
  Currency?: string// [1] 15 (String)
  BookingType?: number// [1] 775 (Int)
  OrderCapacity?: string// [1] 528 (String)
  OrderRestrictions?: string// [1] 529 (String)
  QuoteEntryStatus?: number// [1] 1167 (Int)
  QuoteEntryRejectReason?: number// [1] 368 (Int)
  Instrument?: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrmtLegGrp?: IInstrmtLegGrp[]// [2] Sym.600, Sfx.601 .. ExchLookAlike.2607
}
