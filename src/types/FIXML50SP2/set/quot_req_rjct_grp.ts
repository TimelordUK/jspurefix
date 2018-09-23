import { IInstrument } from './instrument'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IOrderQtyData } from './order_qty_data'
import { IStipulations } from './stipulations'
import { IQuotReqLegsGrp } from './quot_req_legs_grp'
import { IQuotQualGrp } from './quot_qual_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { IParties } from './parties'

export interface IQuotReqRjctGrp {
  PrevClosePx?: number// 140
  RiskLimitRequestType?: number// 1760
  UnderlyingReturnRateValuationDateType?: number// 43073
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TradeOriginationDate?: Date// 229
  RelativeValueSide?: number// 2532
  LegQtyType?: number// 1591
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  UnderlyingReturnRatePriceCurrency?: string// 43067
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  NegotiationMethod?: number// 2115
  QuotePriceType?: number// 692
  OrdType?: string// 40
  ExpireTime?: Date// 126
  RelSymTransactTime?: Date// 1504
  UnderlyingReturnRatePriceType?: number// 43068
  UnderlyingReturnRatePrice?: number// 43066
  Price2?: number// 640
  StrikeTime?: Date// 443
  Instrument: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  OrderQtyData?: IOrderQtyData
  Stipulations?: IStipulations[]
  QuotReqLegsGrp?: IQuotReqLegsGrp[]
  QuotQualGrp?: IQuotQualGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  Parties?: IParties[]
}
