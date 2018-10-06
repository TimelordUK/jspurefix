import { IInstrument } from './instrument'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IOrderQtyData } from './order_qty_data'
import { IRateSource } from './rate_source'
import { IStipulations } from './stipulations'
import { IQuotReqLegsGrp } from './quot_req_legs_grp'
import { IQuotQualGrp } from './quot_qual_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { IParties } from './parties'

export interface IQuotReqGrp {
  PrevClosePx?: number// 140
  QuoteRequestType?: number// 303
  QuoteID?: string// 117
  SecondaryQuoteID?: string// 1751
  QuoteType?: number// 537
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TradeOriginationDate?: Date// 229
  NumOfCompetitors?: number// 1913
  Side?: string// 54
  QtyType?: number// 854
  MinQty?: number// 110
  SettlType?: string// 63
  SettlDate?: Date// 64
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  Currency?: string// 15
  SettlCurrency?: string// 120
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  TrdType?: number// 828
  RegulatoryTransactionType?: number// 2347
  NegotiationMethod?: number// 2115
  QuotePriceType?: number// 692
  OrdType?: string// 40
  ValidUntilTime?: Date// 62
  ExpireTime?: Date// 126
  ResponseTime?: Date// 1914
  QuoteDisplayTime?: Date// 1915
  ExposureDuration?: number// 1629
  ExposureDurationUnit?: number// 1916
  TransactTime?: Date// 60
  PriceType?: number// 423
  Price?: number// 44
  MidPx?: number// 631
  Price2?: number// 640
  StrikeTime?: Date// 443
  Instrument: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  OrderQtyData?: IOrderQtyData
  RateSource?: IRateSource[]
  Stipulations?: IStipulations[]
  QuotReqLegsGrp?: IQuotReqLegsGrp[]
  QuotQualGrp?: IQuotQualGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  Parties?: IParties[]
}
