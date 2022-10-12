import { ICommissionData } from './commission_data'

export interface IBidResponseNoBidComponents {
  CommissionData: ICommissionData// [1] Commission.12, CommType.13 .. FundRenewWaiv.497
  ListID?: string// [2] 66 (String)
  Country?: string// [3] 421 (String)
  Side?: string// [4] 54 (String)
  Price?: number// [5] 44 (Float)
  PriceType?: number// [6] 423 (Int)
  FairValue?: number// [7] 406 (Float)
  NetGrossInd?: number// [8] 430 (Int)
  SettlmntTyp?: string// [9] 63 (String)
  FutSettDate?: Date// [10] 64 (LocalDate)
  TradingSessionID?: string// [11] 336 (String)
  TradingSessionSubID?: string// [12] 625 (String)
  Text?: string// [13] 58 (String)
  EncodedTextLen?: number// [14] 354 (Length)
  EncodedText?: Buffer// [15] 355 (RawData)
}
