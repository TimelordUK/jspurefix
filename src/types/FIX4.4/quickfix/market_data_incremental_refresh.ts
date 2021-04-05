import { IStandardHeader } from './set/standard_header'
import { IMDIncGrp } from './set/md_inc_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataIncrementalRefresh {
  StandardHeader: IStandardHeader
  MDReqID?: string// 262
  MDIncGrp?: IMDIncGrp
  ApplQueueDepth?: number// 813
  ApplQueueResolution?: number// 814
  StandardTrailer: IStandardTrailer
}
