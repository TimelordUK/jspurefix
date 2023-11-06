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
  TrdMatchID: string// [2] 880 (String)
  MatchType?: string// [2] 574 (String)
  TradeReportType?: number// [2] 856 (Int)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  TrdType?: number// [2] 828 (Int)
  TrdSubType?: number// [2] 829 (Int)
  TradeDate?: Date// [2] 75 (LocalDate)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  VenueType?: string// [2] 1430 (String)
  TradeMatchTimestamp?: Date// [2] 1888 (UtcTimestamp)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  MultiLegReportingType?: string// [2] 442 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  InstrmtMatchSideGrp?: IInstrmtMatchSideGrp[]// [3] MtchSubID.1891, Qty.53 .. LastMkt.30
}
