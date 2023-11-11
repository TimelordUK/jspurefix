import { ICommissionData } from './commission_data'

export interface IBidCompRspGrp {
  ListID?: string// [1] 66 (String)
  Country?: string// [1] 421 (String)
  Side?: string// [1] 54 (String)
  Price?: number// [1] 44 (Float)
  PriceType?: number// [1] 423 (Int)
  FairValue?: number// [1] 406 (Float)
  NetGrossInd?: number// [1] 430 (Int)
  SettlType?: string// [1] 63 (String)
  SettlDate?: Date// [1] 64 (LocalDate)
  TradingSessionID?: string// [1] 336 (String)
  TradingSessionSubID?: string// [1] 625 (String)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  CommissionData: ICommissionData// [1] Comm.12, CommTyp.13 .. FundRenewWaiv.497
}
