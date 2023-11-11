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

/*
**************************************************************
* MarketDataStatisticsReport can be found in Volume 3 of the *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface IMarketDataStatisticsReport {
  MDStatisticRptID: string// [2] 2453 (String)
  MDStatisticReqID?: string// [2] 2452 (String)
  SecurityRequestResult?: number// [2] 560 (Int)
  UnsolicitedIndicator?: boolean// [2] 325 (Boolean)
  TradeDate?: Date// [2] 75 (LocalDate)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  MarketSegmentDesc?: string// [2] 1396 (String)
  EncodedMktSegmDescLen?: number// [2] 1397 (Length)
  EncodedMktSegmDesc?: Buffer// [2] 1398 (RawData)
  SecurityListID?: string// [2] 1465 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [4] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [5] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [6] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [7] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [8] Sym.600, Sfx.601 .. ExchLookAlike.2607
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [9] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  MDStatisticRptGrp?: IMDStatisticRptGrp[]// [10] StatsID.2475, Tm.2476 .. ValUnit.2480
}
