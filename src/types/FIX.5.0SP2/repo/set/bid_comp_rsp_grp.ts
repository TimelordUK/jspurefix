import { ICommissionData } from './commission_data'

export interface IBidCompRspGrp {
  CommissionData: ICommissionData
  ListID?: string// 66
  Country?: string// 421
  Side?: string// 54
  Price?: number// 44
  PriceType?: number// 423
  FairValue?: number// 406
  NetGrossInd?: number// 430
  SettlType?: string// 63
  SettlDate?: Date// 64
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
