import { IOrdTypeRules } from './ord_type_rules'
import { ITimeInForceRules } from './time_in_force_rules'
import { IExecInstRules } from './exec_inst_rules'
import { IAuctionTypeRuleGrp } from './auction_type_rule_grp'
import { IMatchRules } from './match_rules'
import { IMarketDataFeedTypes } from './market_data_feed_types'

export interface ITradingSessionRules {
  OrdTypeRules?: IOrdTypeRules[]// [1] OrdTyp.40
  TimeInForceRules?: ITimeInForceRules[]// [2] TmInForce.59
  ExecInstRules?: IExecInstRules[]// [3] ExecInstValu.1308
  AuctionTypeRuleGrp?: IAuctionTypeRuleGrp[]// [4] AuctTyp.1803, AuctTypProdCmplx.2549
  MatchRules?: IMatchRules[]// [5] MtchAlgo.1142, MtchTyp.574 .. CustPri.2570
  MarketDataFeedTypes?: IMarketDataFeedTypes[]// [6] MDFeedTyp.1022, MDSubFeedTyp.1683 .. SvcLctnID2.2568
}
