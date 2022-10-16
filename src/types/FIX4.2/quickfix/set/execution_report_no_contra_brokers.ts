export interface IExecutionReportNoContraBrokers {
  ContraBroker?: string// [1] 375 (String)
  ContraTrader?: string// [2] 337 (String)
  ContraTradeQty?: number// [3] 437 (Float)
  ContraTradeTime?: Date// [4] 438 (UtcTimestamp)
}
