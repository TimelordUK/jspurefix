import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IParties } from './set/parties'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStipulations } from './set/stipulations'
import { IInstrmtLegIOIGrp } from './set/instrmt_leg_ioi_grp'
import { IIOIQualGrp } from './set/ioi_qual_grp'
import { IRoutingGrp } from './set/routing_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IRelativeValueGrp } from './set/relative_value_grp'
import { IYieldData } from './set/yield_data'

/*
***************************************
* IOI can be found in Volume 3 of the *
*                                     *
* specification                       *
***************************************
*/
export interface IIOI {
  IOIID: string// 23
  TransferTransType: number// 2439
  EntitlementRefID?: string// 1885
  RelativeValueSide: number// 2532
  LegQtyType?: number// 1591
  RelatedTradeQuantity: number// 1860
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingReturnRatePriceType?: number// 43068
  UnderlyingReturnRatePrice?: number// 43066
  ValidUntilTime?: Date// 62
  IOIQltyInd?: string// 25
  IOINaturalFlag?: string// 130
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  RelSymTransactTime?: Date// 1504
  AttachmentExternalURL?: string// 2108
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  Parties?: IParties[]
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  OrderQtyData?: IOrderQtyData
  Stipulations?: IStipulations[]
  InstrmtLegIOIGrp?: IInstrmtLegIOIGrp[]
  IOIQualGrp?: IIOIQualGrp[]
  RoutingGrp?: IRoutingGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  RelativeValueGrp?: IRelativeValueGrp[]
  YieldData?: IYieldData
}
