import { ICommissionData } from './commission_data'

export interface IBidCompRspGrp {
  ListID?: string// 66
  UnderlyingStreamCommoditySettlCountry?: string// 42003
  RelativeValueSide?: number// 2532
  UnderlyingReturnRatePrice?: number// 43066
  UnderlyingReturnRatePriceType?: number// 43068
  FairValue?: number// 406
  NetGrossInd?: number// 430
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  CommissionData: ICommissionData
}
