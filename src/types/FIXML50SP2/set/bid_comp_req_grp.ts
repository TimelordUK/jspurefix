export interface IBidCompReqGrp {
  ListID?: string// [1] 66 (String)
  Side?: string// [1] 54 (String)
  TradingSessionID?: string// [1] 336 (String)
  TradingSessionSubID?: string// [1] 625 (String)
  NetGrossInd?: number// [1] 430 (Int)
  SettlType?: string// [1] 63 (String)
  SettlDate?: Date// [1] 64 (LocalDate)
  Account?: string// [1] 1 (String)
  AcctIDSource?: number// [1] 660 (Int)
}
