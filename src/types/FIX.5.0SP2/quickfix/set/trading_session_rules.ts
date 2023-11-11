import { IOrdTypeRules } from './ord_type_rules'
import { ITimeInForceRules } from './time_in_force_rules'
import { IExecInstRules } from './exec_inst_rules'
import { IAuctionTypeRuleGrp } from './auction_type_rule_grp'
import { IMatchRules } from './match_rules'
import { IMarketDataFeedTypes } from './market_data_feed_types'

export interface ITradingSessionRules {
  OrdTypeRules?: IOrdTypeRules// [1] NoOrdTypeRules.1237, OrdType.40
  TimeInForceRules?: ITimeInForceRules// [2] NoTimeInForceRules.1239, TimeInForce.59
  ExecInstRules?: IExecInstRules// [3] NoExecInstRules.1232, ExecInstValue.1308
  AuctionTypeRuleGrp?: IAuctionTypeRuleGrp// [4] NoAuctionTypeRules.2548, AuctionType.1803, AuctionTypeProductComplex.2549
  MatchRules?: IMatchRules// [5] NoMatchRules.1235, MatchAlgorithm.1142 .. CustomerPriority.2570
  MarketDataFeedTypes?: IMarketDataFeedTypes// [6] NoMDFeedTypes.1141, MDFeedType.1022 .. SecondaryServiceLocationID.2568
}
