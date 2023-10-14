import { IOrdTypeRules } from './ord_type_rules'
import { ITimeInForceRules } from './time_in_force_rules'
import { IExecInstRules } from './exec_inst_rules'
import { IMatchRules } from './match_rules'
import { IMarketDataFeedTypes } from './market_data_feed_types'

export interface ITradingSessionRules {
  OrdTypeRules?: IOrdTypeRules[]// [1] OrdType.40
  TimeInForceRules?: ITimeInForceRules[]// [2] TimeInForce.59
  ExecInstRules?: IExecInstRules[]// [3] ExecInstValue.1308
  MatchRules?: IMatchRules[]// [4] MatchAlgorithm.1142, MatchType.574
  MarketDataFeedTypes?: IMarketDataFeedTypes[]// [5] MDFeedType.1022, MarketDepth.264, MDBookType.1021
}
