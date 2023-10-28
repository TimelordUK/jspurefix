export interface IMarketDisruptionFallbackReferencePriceGrpNoMarketDisruptionFallbackReferencePrices {
  MarketDisruptionFallbackUnderlierType?: number// [1] 41097 (Int)
  MarketDisruptionFallbackUnderlierSecurityID?: string// [2] 41098 (String)
  MarketDisruptionFallbackUnderlierSecurityIDSource?: string// [3] 41099 (String)
  MarketDisruptionFallbackUnderlierSecurityDesc?: string// [4] 41100 (String)
  EncodedMarketDisruptionFallbackUnderlierSecurityDescLen?: number// [5] 41101 (Length)
  EncodedMarketDisruptionFallbackUnderlierSecurityDesc?: Buffer// [6] 41102 (RawData)
  MarketDisruptionFallbackOpenUnits?: number// [7] 41103 (Float)
  MarketDisruptionFallbackBasketCurrency?: string// [8] 41104 (String)
  MarketDisruptionFallbackBasketDivisor?: number// [9] 41105 (Float)
}
