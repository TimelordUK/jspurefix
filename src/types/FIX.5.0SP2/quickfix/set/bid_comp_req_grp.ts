export interface IBidCompReqGrp {
  ListID?: string// [1] 66 (String)
  Side?: string// [2] 54 (String)
  TradingSessionID?: string// [3] 336 (String)
  TradingSessionSubID?: string// [4] 625 (String)
  NetGrossInd?: number// [5] 430 (Int)
  SettlType?: string// [6] 63 (String)
  SettlDate?: Date// [7] 64 (LocalDate)
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
}
