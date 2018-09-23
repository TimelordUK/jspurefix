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
  TotNumReports?: number// 911
  MDStatisticRptID?: string// 2453
  ClearingBusinessDate?: Date// 715
  MDBookType?: number// 1021
  MDSubBookType?: number// 1173
  MarketDepth?: number// 264
  MDFeedType?: string// 1022
  MDSubFeedType?: string// 1683
  RefreshIndicator?: string// 1187
  TradeDate?: Date// 75
  MDStatisticReqID?: string// 2452
  MDStreamID?: string// 1500
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  LastUpdateTime: Date// 779
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  NetChgPrevDay?: string// 451
  MDSecurityTradingStatus?: number// 1682
  MDHaltReason?: number// 1684
  ApplQueueDepth?: number// 813
  ApplQueueResolution?: number// 814
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  MDFullGrp?: IMDFullGrp[]
  RoutingGrp?: IRoutingGrp[]
}
