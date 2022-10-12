import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuote {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteType?: number// [4] 537 (Int)
  QuoteResponseLevel?: number// [5] 301 (Int)
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
  SettlmntTyp?: string// [30] 63 (String)
  FutSettDate?: Date// [31] 64 (LocalDate)
  OrdType?: string// [32] 40 (String)
  FutSettDate2?: Date// [33] 193 (LocalDate)
  OrderQty2?: number// [34] 192 (Float)
  BidForwardPoints2?: number// [35] 642 (Float)
  OfferForwardPoints2?: number// [36] 643 (Float)
  Currency?: string// [37] 15 (String)
  SettlCurrBidFxRate?: number// [38] 656 (Float)
  SettlCurrOfferFxRate?: number// [39] 657 (Float)
  SettlCurrFxRateCalc?: string// [40] 156 (String)
  Commission?: number// [41] 12 (Float)
  CommType?: string// [42] 13 (String)
  CustOrderCapacity?: number// [43] 582 (Int)
  ExDestination?: string// [44] 100 (String)
  Text?: string// [45] 58 (String)
  EncodedTextLen?: number// [46] 354 (Length)
  EncodedText?: Buffer// [47] 355 (RawData)
  StandardTrailer: IStandardTrailer// [48] SignatureLength.93, Signature.89, CheckSum.10
}
