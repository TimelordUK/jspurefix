export interface ITickRules {
  StartTickPriceRange?: number// [1] 1206 (Float)
  EndTickPriceRange?: number// [1] 1207 (Float)
  TickIncrement?: number// [1] 1208 (Float)
  TickRuleType?: number// [1] 1209 (Int)
  TickRuleProductComplex?: string// [1] 2571 (String)
  SettlPriceIncrement?: number// [1] 1830 (Float)
  SettlPriceSecondaryIncrement?: number// [1] 1831 (Float)
}
