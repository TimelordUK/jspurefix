import { IStandardHeader } from './set/standard_header'
import { IMDIncGrp } from './set/md_inc_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataIncrementalRefresh {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MDReqID?: string// [2] 262 (String)
  MDIncGrp?: IMDIncGrp// [3] NoMDEntries.268, MDUpdateAction.279 .. EncodedText.355
  ApplQueueDepth?: number// [4] 813 (Int)
  ApplQueueResolution?: number// [5] 814 (Int)
  StandardTrailer: IStandardTrailer// [6] SignatureLength.93, Signature.89, CheckSum.10
}
