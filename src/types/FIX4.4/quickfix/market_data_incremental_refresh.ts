import { Iheader } from './set/header'
import { IMDIncGrp } from './set/md_inc_grp'
import { Itrailer } from './set/trailer'

export interface IMarketDataIncrementalRefresh {
  header: Iheader
  MDReqID?: string// 262
  MDIncGrp?: IMDIncGrp
  ApplQueueDepth?: number// 813
  ApplQueueResolution?: number// 814
  trailer: Itrailer
}
