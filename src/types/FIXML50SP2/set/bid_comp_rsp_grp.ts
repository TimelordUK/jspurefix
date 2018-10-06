import { ICommissionData } from './commission_data'

export interface IBidCompRspGrp {
  ListID?: string// 66
  Country?: string// 421
  RelativeValueSide?: number// 2532
  Price?: number// 44
  PriceType?: number// 423
  FairValue?: number// 406
  NetGrossInd?: number// 430
  InstrumentScopeSettlType?: string// 1557
  SettlDate?: Date// 64
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  CommissionData: ICommissionData
}
