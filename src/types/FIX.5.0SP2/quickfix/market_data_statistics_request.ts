import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IMDStatisticReqGrp } from './set/md_statistic_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataStatisticsRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MDStatisticReqID: string// [2] 2452 (String)
  SubscriptionRequestType: string// [3] 263 (String)
  Parties?: IParties// [4] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeDate?: Date// [5] 75 (LocalDate)
  MarketID?: string// [6] 1301 (String)
  MarketSegmentID?: string// [7] 1300 (String)
  MarketSegmentDesc?: string// [8] 1396 (String)
  EncodedMktSegmDescLen?: number// [9] 1397 (Length)
  EncodedMktSegmDesc?: Buffer// [10] 1398 (RawData)
  SecurityListID?: string// [11] 1465 (String)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [13] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [14] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [15] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [16] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [17] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  MDStatisticReqGrp?: IMDStatisticReqGrp// [18] NoMDStatistics.2474, MDStatisticID.2475 .. AggressorIndicator.1057
  TransactTime?: Date// [19] 60 (UtcTimestamp)
  Text?: string// [20] 58 (String)
  EncodedTextLen?: number// [21] 354 (Length)
  EncodedText?: Buffer// [22] 355 (RawData)
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
