import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IMDStatisticRptGrp } from './set/md_statistic_rpt_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataStatisticsReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  MDStatisticRptID: string// [3] 2453 (String)
  MDStatisticReqID?: string// [4] 2452 (String)
  MDStatisticRequestResult?: number// [5] 2473 (Int)
  UnsolicitedIndicator?: boolean// [6] 325 (Boolean)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  CustOrderCapacity?: number// [8] 582 (Int)
  TradeDate?: Date// [9] 75 (LocalDate)
  MarketID?: string// [10] 1301 (String)
  MarketSegmentID?: string// [11] 1300 (String)
  MarketSegmentDesc?: string// [12] 1396 (String)
  EncodedMktSegmDescLen?: number// [13] 1397 (Length)
  EncodedMktSegmDesc?: Buffer// [14] 1398 (RawData)
  SecurityListID?: string// [15] 1465 (String)
  Currency?: string// [16] 15 (String)
  CurrencyCodeSource?: string// [17] 2897 (String)
  Instrument?: IInstrument// [18] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [19] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [20] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [21] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [22] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [23] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  MDStatisticRptGrp?: IMDStatisticRptGrp// [24] NoMDStatistics.2474, MDStatisticType.2456 .. MDStatisticValueUnit.2480
  TransactTime?: Date// [25] 60 (UtcTimestamp)
  Text?: string// [26] 58 (String)
  EncodedTextLen?: number// [27] 354 (Length)
  EncodedText?: Buffer// [28] 355 (RawData)
  StandardTrailer: IStandardTrailer// [29] SignatureLength.93, Signature.89, CheckSum.10
}
