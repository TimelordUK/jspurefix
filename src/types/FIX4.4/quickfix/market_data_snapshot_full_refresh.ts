import { Iheader } from './set/header'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IMDFullGrp } from './set/md_full_grp'
import { Itrailer } from './set/trailer'

export interface IMarketDataSnapshotFullRefresh {
  header: Iheader
  MDReqID?: string// 262
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  NetChgPrevDay?: number// 451
  MDFullGrp?: IMDFullGrp
  ApplQueueDepth?: number// 813
  ApplQueueResolution?: number// 814
  trailer: Itrailer
}
