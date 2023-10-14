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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  IOIID: string// [3] 23 (String)
  IOITransType: string// [4] 28 (String)
  IOIRefID?: string// [5] 26 (String)
  Instrument: IInstrument// [6] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  Parties?: IParties[]// [7] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  FinancingDetails?: IFinancingDetails// [8] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [9] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Side: string// [10] 54 (String)
  QtyType?: number// [11] 854 (Int)
  OrderQtyData?: IOrderQtyData// [12] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  IOIQty: string// [13] 27 (String)
  Currency?: string// [14] 15 (String)
  Stipulations?: IStipulations[]// [15] StipulationType.233, StipulationValue.234
  InstrmtLegIOIGrp?: IInstrmtLegIOIGrp[]// [16] LegSymbol.600, LegSymbolSfx.601 .. LegStipulationValue.689
  PriceType?: number// [17] 423 (Int)
  Price?: number// [18] 44 (Float)
  ValidUntilTime?: Date// [19] 62 (UtcTimestamp)
  IOIQltyInd?: string// [20] 25 (String)
  IOINaturalFlag?: boolean// [21] 130 (Boolean)
  IOIQualGrp?: IIOIQualGrp[]// [22] IOIQualifier.104
  Text?: string// [23] 58 (String)
  EncodedTextLen?: number// [24] 354 (Int)
  EncodedText?: Buffer// [25] 355 (RawData)
  TransactTime?: Date// [26] 60 (UtcTimestamp)
  URLLink?: string// [27] 149 (String)
  RoutingGrp?: IRoutingGrp[]// [28] RoutingType.216, RoutingID.217
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [29] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [30] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  StandardTrailer: IStandardTrailer// [31] SignatureLength.93, Signature.89, CheckSum.10
}
