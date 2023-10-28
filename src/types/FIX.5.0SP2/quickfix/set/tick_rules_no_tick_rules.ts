export interface ITickRulesNoTickRules {
  StartTickPriceRange?: number// [1] 1206 (Float)
  EndTickPriceRange?: number// [2] 1207 (Float)
  TickIncrement?: number// [3] 1208 (Float)
  TickRuleType?: number// [4] 1209 (Int)
  TickRuleProductComplex?: string// [5] 2571 (String)
  SettlPriceIncrement?: number// [6] 1830 (Float)
  SettlPriceSecondaryIncrement?: number// [7] 1831 (Float)
}
