import { IStandardHeader } from './set/standard_header'
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
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* Indication of interest messages are used to market          *
* merchandise which the broker is buying or selling in either *
* a proprietary or agency capacity.                           *
***************************************************************
*/
export interface IIOI {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  IOIID: string// [2] 23 (String)
  IOITransType: string// [3] 28 (String)
  IOIRefID?: string// [4] 26 (String)
  Instrument: IInstrument// [5] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [6] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [7] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  Side: string// [8] 54 (String)
  QtyType?: number// [9] 854 (Int)
  OrderQtyData?: IOrderQtyData// [10] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  IOIQty: string// [11] 27 (String)
  Currency?: string// [12] 15 (String)
  Stipulations?: IStipulations[]// [13] StipulationType.233, StipulationValue.234
  InstrmtLegIOIGrp?: IInstrmtLegIOIGrp[]// [14] LegSymbol.600, LegSymbolSfx.601 .. LegStipulationValue.689
  PriceType?: number// [15] 423 (Int)
  Price?: number// [16] 44 (Float)
  ValidUntilTime?: Date// [17] 62 (UtcTimestamp)
  IOIQltyInd?: string// [18] 25 (String)
  IOINaturalFlag?: boolean// [19] 130 (Boolean)
  IOIQualGrp?: IIOIQualGrp[]// [20] IOIQualifier.104
  Text?: string// [21] 58 (String)
  EncodedTextLen?: number// [22] 354 (Int)
  EncodedText?: Buffer// [23] 355 (RawData)
  TransactTime?: Date// [24] 60 (UtcTimestamp)
  URLLink?: string// [25] 149 (String)
  RoutingGrp?: IRoutingGrp[]// [26] RoutingType.216, RoutingID.217
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [27] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [28] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  StandardTrailer: IStandardTrailer// [29] SignatureLength.93, Signature.89, CheckSum.10
}
