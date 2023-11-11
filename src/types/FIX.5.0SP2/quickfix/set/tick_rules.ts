import { ITickRulesNoTickRules } from './tick_rules_no_tick_rules'

export interface ITickRules {
  NoTickRules?: ITickRulesNoTickRules[]// [1] StartTickPriceRange.1206, EndTickPriceRange.1207 .. SettlPriceSecondaryIncrement.1831
}
