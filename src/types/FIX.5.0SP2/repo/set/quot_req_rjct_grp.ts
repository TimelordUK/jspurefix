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
  Instrument: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp
  PrevClosePx?: number// 140
  QuoteRequestType?: number// 303
  QuoteType?: number// 537
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TradeOriginationDate?: Date// 229
  Side?: string// 54
  QtyType?: number// 854
  OrderQtyData?: IOrderQtyData
  SettlType?: string// 63
  SettlDate?: Date// 64
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  Currency?: string// 15
  Stipulations?: IStipulations[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  QuotReqLegsGrp?: IQuotReqLegsGrp[]
  QuotQualGrp?: IQuotQualGrp[]
  QuotePriceType?: number// 692
  OrdType?: string// 40
  ExpireTime?: Date// 126
  TransactTime?: Date// 60
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  PriceType?: number// 423
  Price?: number// 44
  Price2?: number// 640
  YieldData?: IYieldData
  Parties?: IParties[]
}
