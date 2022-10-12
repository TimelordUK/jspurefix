import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteStatusReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteStatusReqID?: string// [2] 649 (String)
  QuoteReqID?: string// [3] 131 (String)
  QuoteID: string// [4] 117 (String)
  QuoteType?: number// [5] 537 (Int)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [7] 1 (String)
  AccountType?: number// [8] 581 (Int)
  TradingSessionID?: string// [9] 336 (String)
  TradingSessionSubID?: string// [10] 625 (String)
  Instrument?: IInstrument// [11] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  BidPx?: number// [12] 132 (Float)
  OfferPx?: number// [13] 133 (Float)
  MktBidPx?: number// [14] 645 (Float)
  MktOfferPx?: number// [15] 646 (Float)
  MinBidSize?: number// [16] 647 (Float)
  BidSize?: number// [17] 134 (Float)
  MinOfferSize?: number// [18] 648 (Float)
  OfferSize?: number// [19] 135 (Float)
  ValidUntilTime?: Date// [20] 62 (UtcTimestamp)
  BidSpotRate?: number// [21] 188 (Float)
  OfferSpotRate?: number// [22] 190 (Float)
  BidForwardPoints?: number// [23] 189 (Float)
  OfferForwardPoints?: number// [24] 191 (Float)
  MidPx?: number// [25] 631 (Float)
  BidYield?: number// [26] 632 (Float)
  MidYield?: number// [27] 633 (Float)
  OfferYield?: number// [28] 634 (Float)
  TransactTime?: Date// [29] 60 (UtcTimestamp)
  FutSettDate?: Date// [30] 64 (LocalDate)
  OrdType?: string// [31] 40 (String)
  FutSettDate2?: Date// [32] 193 (LocalDate)
  OrderQty2?: number// [33] 192 (Float)
  BidForwardPoints2?: number// [34] 642 (Float)
  OfferForwardPoints2?: number// [35] 643 (Float)
  Currency?: string// [36] 15 (String)
  SettlCurrBidFxRate?: number// [37] 656 (Float)
  SettlCurrOfferFxRate?: number// [38] 657 (Float)
  SettlCurrFxRateCalc?: string// [39] 156 (String)
  Commission?: number// [40] 12 (Float)
  CommType?: string// [41] 13 (String)
  CustOrderCapacity?: number// [42] 582 (Int)
  ExDestination?: string// [43] 100 (String)
  QuoteStatus?: number// [44] 297 (Int)
  StandardTrailer: IStandardTrailer// [45] SignatureLength.93, Signature.89, CheckSum.10
}
