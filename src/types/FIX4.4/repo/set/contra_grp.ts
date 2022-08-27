export interface IContraGrp {
  ContraBroker?: string// [1] 375 (String)
  ContraTrader?: string// [2] 337 (String)
  ContraTradeQty?: number// [3] 437 (Float)
  ContraTradeTime?: Date// [4] 438 (UtcTimestamp)
  ContraLegRefID?: string// [5] 655 (String)
}
