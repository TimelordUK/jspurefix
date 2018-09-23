import { IMDIncGrp } from './set/md_inc_grp'

export interface IMarketDataIncrementalRefresh {
  MDReqID?: string// 262
  MDIncGrp?: IMDIncGrp
  ApplQueueDepth?: number// 813
  ApplQueueResolution?: number// 814
}
