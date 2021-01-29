import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
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
****************************************************************
* Indication of interest messages are used to market           *
* merchandise which the broker is buying or selling in either  *
* a proprietary or agency capacity. The indications can be     *
* time bound with a specific expiration value. Indications are *
* distributed with the understanding that other firms may      *
* react to the message first and that the merchandise may no   *
* longer be available due to prior trade.                      *
* Indication messages can be transmitted in various            *
* transaction types; NEW, CANCEL, and REPLACE. All message     *
* types other than NEW modify the state of the message         *
* identified in IOIRefID.                                      *
****************************************************************
*/
export interface IIOI {
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  IOIID: string// 23
  IOITransType: string// 28
  IOIRefID?: string// 26
  Instrument: IInstrument
  Parties?: IParties[]
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp
  Side: string// 54
  QtyType?: number// 854
  OrderQtyData?: IOrderQtyData
  IOIQty: string// 27
  Currency?: string// 15
  Stipulations?: IStipulations[]
  InstrmtLegIOIGrp?: IInstrmtLegIOIGrp[]
  PriceType?: number// 423
  Price?: number// 44
  ValidUntilTime?: Date// 62
  IOIQltyInd?: string// 25
  IOINaturalFlag?: boolean// 130
  IOIQualGrp?: IIOIQualGrp[]
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TransactTime?: Date// 60
  URLLink?: string// 149
  RoutingGrp?: IRoutingGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  StandardTrailer: IStandardTrailer
}
