import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrmtMatchSideGrp } from './set/instrmt_match_side_grp'

/*
****************************************************
* TradeMatchReport can be found in Volume 5 of the *
*                                                  *
* specification                                    *
****************************************************
*/
export interface ITradeMatchReport {
  TradeMatchID: string// 1
  MatchType?: string// 574
  TransferReportType?: number// 2444
  ClearingBusinessDate?: Date// 715
  TrdType?: number// 828
  SideTrdSubTyp?: number// 1008
  TradeDate?: Date// 75
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SideVenueType?: string// 1899
  TradeMatchTimestamp?: Date// 1888
  RelSymTransactTime?: Date// 1504
  SideMultiLegReportingType?: number// 752
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  InstrmtMatchSideGrp?: IInstrmtMatchSideGrp[]
}
