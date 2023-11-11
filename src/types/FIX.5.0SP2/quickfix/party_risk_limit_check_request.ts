import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp'
import { IInstrument } from './set/instrument'
import { ILegOrdGrp } from './set/leg_ord_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyRiskLimitCheckRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RiskLimitCheckRequestID?: string// [2] 2318 (String)
  RiskLimitCheckID?: string// [3] 2319 (String)
  RiskLimitCheckTransType: number// [4] 2320 (Int)
  RiskLimitCheckType: number// [5] 2321 (Int)
  RiskLimitCheckRequestRefID?: number// [6] 2322 (Int)
  RefOrderID?: string// [7] 1080 (String)
  RefOrderIDSource?: string// [8] 1081 (String)
  RiskLimitCheckRequestType?: number// [9] 2323 (Int)
  RiskLimitCheckAmount?: number// [10] 2324 (Float)
  Currency?: string// [11] 15 (String)
  CurrencyCodeSource?: string// [12] 2897 (String)
  RiskLimitID?: string// [13] 1670 (String)
  RequestingPartyGrp?: IRequestingPartyGrp// [14] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  Parties?: IParties// [15] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp// [16] NoRelatedPartyDetailID.1562, RelatedPartyDetailID.1563 .. PartyRelationship.1515
  Instrument?: IInstrument// [17] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  LegOrdGrp?: ILegOrdGrp// [18] NoLegs.555, LegSymbol.600 .. LegShortSaleExemptionReason.1689
  UndInstrmtGrp?: IUndInstrmtGrp// [19] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  Side?: string// [20] 54 (String)
  TransactTime?: Date// [21] 60 (UtcTimestamp)
  Text?: string// [22] 58 (String)
  EncodedTextLen?: number// [23] 354 (Length)
  EncodedText?: Buffer// [24] 355 (RawData)
  StandardTrailer: IStandardTrailer// [25] SignatureLength.93, Signature.89, CheckSum.10
}
