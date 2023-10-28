import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp'
import { IInstrument } from './set/instrument'
import { ILegOrdGrp } from './set/leg_ord_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyRiskLimitCheckRequestAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RiskLimitCheckRequestID?: string// [2] 2318 (String)
  RiskLimitCheckID?: string// [3] 2319 (String)
  RiskLimitCheckRequestStatus: number// [4] 2325 (Int)
  RiskLimitCheckRequestResult?: number// [5] 2326 (Int)
  RiskLimitCheckTransType: number// [6] 2320 (Int)
  RiskLimitCheckType: number// [7] 2321 (Int)
  RiskLimitCheckRequestRefID?: number// [8] 2322 (Int)
  RejectText?: string// [9] 1328 (String)
  EncodedRejectTextLen?: number// [10] 1664 (Length)
  EncodedRejectText?: Buffer// [11] 1665 (RawData)
  RefOrderID?: string// [12] 1080 (String)
  RefOrderIDSource?: string// [13] 1081 (String)
  Side?: string// [14] 54 (String)
  RiskLimitApprovedAmount?: number// [15] 2327 (Float)
  RiskLimitCheckAmount?: number// [16] 2324 (Float)
  RiskLimitID?: string// [17] 1670 (String)
  Currency?: string// [18] 15 (String)
  CurrencyCodeSource?: string// [19] 2897 (String)
  ExpireTime?: Date// [20] 126 (UtcTimestamp)
  RequestingPartyGrp?: IRequestingPartyGrp// [21] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  Parties?: IParties// [22] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp// [23] NoRelatedPartyDetailID.1562, RelatedPartyDetailID.1563 .. PartyRelationship.1515
  Instrument?: IInstrument// [24] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  LegOrdGrp?: ILegOrdGrp// [25] NoLegs.555, LegSymbol.600 .. LegShortSaleExemptionReason.1689
  UndInstrmtGrp?: IUndInstrmtGrp// [26] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  TransactTime?: Date// [27] 60 (UtcTimestamp)
  Text?: string// [28] 58 (String)
  EncodedTextLen?: number// [29] 354 (Length)
  EncodedText?: Buffer// [30] 355 (RawData)
  StandardTrailer: IStandardTrailer// [31] SignatureLength.93, Signature.89, CheckSum.10
}
