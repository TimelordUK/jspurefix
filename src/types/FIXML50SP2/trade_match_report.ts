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
  TrdMatchID: string// 880
  MatchType?: string// 574
  TradeReportType?: number// 856
  ClearingBusinessDate?: Date// 715
  TrdType?: number// 828
  TrdSubType?: number// 829
  TradeDate?: Date// 75
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  VenueType?: string// 1430
  TradeMatchTimestamp?: Date// 1888
  TransactTime?: Date// 60
  MultiLegReportingType?: string// 442
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  InstrmtMatchSideGrp?: IInstrmtMatchSideGrp[]
}
