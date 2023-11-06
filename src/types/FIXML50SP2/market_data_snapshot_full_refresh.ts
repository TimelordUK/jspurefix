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

/*
*************************************************************
* MarketDataSnapshotFullRefresh can be found in Volume 3 of *
* the                                                       *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IMarketDataSnapshotFullRefresh {
  TotNumReports?: number// [2] 911 (Int)
  MDReportID?: number// [2] 963 (Int)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  MDBookType?: number// [2] 1021 (Int)
  MDSubBookType?: number// [2] 1173 (Int)
  MarketDepth?: number// [2] 264 (Int)
  MDFeedType?: string// [2] 1022 (String)
  MDSubFeedType?: string// [2] 1683 (String)
  RefreshIndicator?: boolean// [2] 1187 (Boolean)
  TradeDate?: Date// [2] 75 (LocalDate)
  MDReqID?: string// [2] 262 (String)
  MDStreamID?: string// [2] 1500 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  LastUpdateTime: Date// [2] 779 (UtcTimestamp)
  FinancialStatus?: string// [2] 291 (String)
  CorporateAction?: string// [2] 292 (String)
  NetChgPrevDay?: number// [2] 451 (Float)
  MDSecurityTradingStatus?: number// [2] 1682 (Int)
  MDHaltReason?: number// [2] 1684 (Int)
  ApplQueueDepth?: number// [2] 813 (Int)
  ApplQueueResolution?: number// [2] 814 (Int)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [4] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [5] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [7] Sym.600, Sfx.601 .. ExchLookAlike.2607
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [8] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  MDFullGrp?: IMDFullGrp[]// [9] Typ.269, ID.278 .. RefID.654
  RoutingGrp?: IRoutingGrp[]// [10] RtgTyp.216, RtgID.217
}
