export interface IMarketDisruptionFallbackReferencePriceGrp {
  MarketDisruptionFallbackUnderlierType?: number// [1] 41097 (Int)
  MarketDisruptionFallbackUnderlierSecurityID?: string// [1] 41098 (String)
  MarketDisruptionFallbackUnderlierSecurityIDSource?: string// [1] 41099 (String)
  MarketDisruptionFallbackUnderlierSecurityDesc?: string// [1] 41100 (String)
  EncodedMarketDisruptionFallbackUnderlierSecurityDescLen?: number// [1] 41101 (Length)
  EncodedMarketDisruptionFallbackUnderlierSecurityDesc?: Buffer// [1] 41102 (RawData)
  MarketDisruptionFallbackOpenUnits?: number// [1] 41103 (Float)
  MarketDisruptionFallbackBasketCurrency?: string// [1] 41104 (String)
  MarketDisruptionFallbackBasketDivisor?: number// [1] 41105 (Float)
}
