import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IMDFullGrp } from './set/md_full_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataSnapshotFullRefresh {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MDReqID?: string// [2] 262 (String)
  Instrument?: IInstrument// [3] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp?: IUndInstrmtGrp// [4] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp// [5] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  FinancialStatus?: string// [6] 291 (String)
  CorporateAction?: string// [7] 292 (String)
  NetChgPrevDay?: number// [8] 451 (Float)
  MDFullGrp?: IMDFullGrp// [9] NoMDEntries.268, MDEntryType.269 .. EncodedText.355
  ApplQueueDepth?: number// [10] 813 (Int)
  ApplQueueResolution?: number// [11] 814 (Int)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
