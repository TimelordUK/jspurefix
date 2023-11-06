export interface ILegMarketDisruptionFallbackReferencePriceGrp {
  LegMarketDisruptionFallbackUnderlierType?: number// [1] 41472 (Int)
  LegMarketDisruptionFallbackUnderlierSecurityID?: string// [1] 41473 (String)
  LegMarketDisruptionFallbackUnderlierSecurityIDSource?: string// [1] 41474 (String)
  LegMarketDisruptionFallbackUnderlierSecurityDesc?: string// [1] 41475 (String)
  EncodedLegMarketDisruptionFallbackUnderlierSecurityDescLen?: number// [1] 41476 (Length)
  EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc?: Buffer// [1] 41477 (RawData)
  LegMarketDisruptionFallbackOpenUnits?: number// [1] 41478 (Float)
  LegMarketDisruptionFallbackBasketCurrency?: string// [1] 41479 (String)
  LegMarketDisruptionFallbackBasketDivisor?: number// [1] 41480 (Float)
}
