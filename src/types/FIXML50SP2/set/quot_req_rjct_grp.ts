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
  PrevClosePx?: number// [1] 140 (Float)
  QuoteRequestType?: number// [1] 303 (Int)
  QuoteType?: number// [1] 537 (Int)
  TradingSessionID?: string// [1] 336 (String)
  TradingSessionSubID?: string// [1] 625 (String)
  TradeOriginationDate?: Date// [1] 229 (LocalDate)
  Side?: string// [1] 54 (String)
  QtyType?: number// [1] 854 (Int)
  SettlType?: string// [1] 63 (String)
  SettlDate?: Date// [1] 64 (LocalDate)
  SettlDate2?: Date// [1] 193 (LocalDate)
  OrderQty2?: number// [1] 192 (Float)
  Currency?: string// [1] 15 (String)
  Account?: string// [1] 1 (String)
  AcctIDSource?: number// [1] 660 (Int)
  AccountType?: number// [1] 581 (Int)
  NegotiationMethod?: number// [1] 2115 (Int)
  QuotePriceType?: number// [1] 692 (Int)
  OrdType?: string// [1] 40 (String)
  ExpireTime?: Date// [1] 126 (UtcTimestamp)
  TransactTime?: Date// [1] 60 (UtcTimestamp)
  PriceType?: number// [1] 423 (Int)
  Price?: number// [1] 44 (Float)
  Price2?: number// [1] 640 (Float)
  StrikeTime?: Date// [1] 443 (UtcTimestamp)
  Instrument: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [2] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [3] Sym.311, Sfx.312 .. XID.2631
  OrderQtyData?: IOrderQtyData// [4] Qty.38, Cash.152 .. RndMod.469
  Stipulations?: IStipulations[]// [5] Typ.233, Val.234
  QuotReqLegsGrp?: IQuotReqLegsGrp[]// [6] OrdQty.685, Qty.687 .. RefID.654
  QuotQualGrp?: IQuotQualGrp[]// [7] Qual.695
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [8] Spread.218, Ccy.220 .. SecIDSrc.761
  YieldData?: IYieldData// [9] Typ.235, Yld.236 .. RedPxTyp.698
  Parties?: IParties[]// [10] ID.448, Src.447 .. Qual.2376
}
