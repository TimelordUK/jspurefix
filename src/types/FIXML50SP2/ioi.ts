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
  IOIID: string// [2] 23 (String)
  IOITransType: string// [2] 28 (String)
  IOIRefID?: string// [2] 26 (String)
  Side: string// [2] 54 (String)
  QtyType?: number// [2] 854 (Int)
  IOIQty: string// [2] 27 (String)
  Currency?: string// [2] 15 (String)
  PriceType?: number// [2] 423 (Int)
  Price?: number// [2] 44 (Float)
  ValidUntilTime?: Date// [2] 62 (UtcTimestamp)
  IOIQltyInd?: string// [2] 25 (String)
  IOINaturalFlag?: boolean// [2] 130 (Boolean)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  URLLink?: string// [2] 149 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [4] DlvryForm.668, PctAtRisk.869
  Parties?: IParties[]// [5] ID.448, Src.447 .. Qual.2376
  FinancingDetails?: IFinancingDetails// [6] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [7] Sym.311, Sfx.312 .. XID.2631
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [8] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  OrderQtyData?: IOrderQtyData// [9] Qty.38, Cash.152 .. RndMod.469
  Stipulations?: IStipulations[]// [10] Typ.233, Val.234
  InstrmtLegIOIGrp?: IInstrmtLegIOIGrp[]// [11] IOIQty.27
  IOIQualGrp?: IIOIQualGrp[]// [12] Qual.104
  RoutingGrp?: IRoutingGrp[]// [13] RtgTyp.216, RtgID.217
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [14] Spread.218, Ccy.220 .. SecIDSrc.761
  RelativeValueGrp?: IRelativeValueGrp[]// [15] Typ.139, Val.2531, Side.2532
  YieldData?: IYieldData// [16] Typ.235, Yld.236 .. RedPxTyp.698
}
