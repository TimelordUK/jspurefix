import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IMDFullGrp } from './set/md_full_grp'
import { IRoutingGrp } from './set/routing_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataSnapshotFullRefresh {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  TotNumReports?: number// [3] 911 (Int)
  MDReportID?: number// [4] 963 (Int)
  ClearingBusinessDate?: Date// [5] 715 (LocalDate)
  MDBookType?: number// [6] 1021 (Int)
  MDSubBookType?: number// [7] 1173 (Int)
  MarketDepth?: number// [8] 264 (Int)
  MDFeedType?: string// [9] 1022 (String)
  MDSubFeedType?: string// [10] 1683 (String)
  RefreshIndicator?: boolean// [11] 1187 (Boolean)
  TradeDate?: Date// [12] 75 (LocalDate)
  MDReqID?: string// [13] 262 (String)
  MDStreamID?: string// [14] 1500 (String)
  MarketID?: string// [15] 1301 (String)
  MarketSegmentID?: string// [16] 1300 (String)
  Instrument?: IInstrument// [17] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [18] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [19] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [20] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [21] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [22] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  LastUpdateTime: Date// [23] 779 (UtcTimestamp)
  FinancialStatus?: string// [24] 291 (String)
  CorporateAction?: string// [25] 292 (String)
  NetChgPrevDay?: number// [26] 451 (Float)
  MDSecurityTradingStatus?: number// [27] 1682 (Int)
  MDHaltReason?: number// [28] 1684 (Int)
  MDFullGrp?: IMDFullGrp// [29] NoMDEntries.268, MDEntryType.269 .. LegRefID.654
  ApplQueueDepth?: number// [30] 813 (Int)
  ApplQueueResolution?: number// [31] 814 (Int)
  RoutingGrp?: IRoutingGrp// [32] NoRoutingIDs.215, RoutingType.216, RoutingID.217
  StandardTrailer: IStandardTrailer// [33] SignatureLength.93, Signature.89, CheckSum.10
}
