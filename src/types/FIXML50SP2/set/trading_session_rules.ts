import { IOrdTypeRules } from './ord_type_rules'
import { ITimeInForceRules } from './time_in_force_rules'
import { IExecInstRules } from './exec_inst_rules'
import { IAuctionTypeRuleGrp } from './auction_type_rule_grp'
import { IMatchRules } from './match_rules'
import { IMarketDataFeedTypes } from './market_data_feed_types'

export interface ITradingSessionRules {
  OrdTypeRules?: IOrdTypeRules[]
  TimeInForceRules?: ITimeInForceRules[]
  ExecInstRules?: IExecInstRules[]
  AuctionTypeRuleGrp?: IAuctionTypeRuleGrp[]
  MatchRules?: IMatchRules[]
  MarketDataFeedTypes?: IMarketDataFeedTypes[]
}
