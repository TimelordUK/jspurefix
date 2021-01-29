import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStipulations } from './set/stipulations'
import { IInstrmtLegIOIGrp } from './set/instrmt_leg_ioi_grp'
import { IIOIQualGrp } from './set/ioi_qual_grp'
import { IRoutingGrp } from './set/routing_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'

export interface IIOI {
  IOIID: string// 23
  IOITransType: string// 28
  IOIRefID?: string// 26
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp
  Side: string// 54
  QtyType?: number// 854
  OrderQtyData?: IOrderQtyData
  IOIQty: string// 27
  Currency?: string// 15
  Stipulations?: IStipulations
  InstrmtLegIOIGrp?: IInstrmtLegIOIGrp
  PriceType?: number// 423
  Price?: number// 44
  ValidUntilTime?: Date// 62
  IOIQltyInd?: string// 25
  IOINaturalFlag?: boolean// 130
  IOIQualGrp?: IIOIQualGrp
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TransactTime?: Date// 60
  URLLink?: string// 149
  RoutingGrp?: IRoutingGrp
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
}
