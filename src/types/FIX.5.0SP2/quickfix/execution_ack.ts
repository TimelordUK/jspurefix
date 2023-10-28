import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IPriceQualifierGrp } from './set/price_qualifier_grp'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IExecutionAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID: string// [2] 37 (String)
  SecondaryOrderID?: string// [3] 198 (String)
  ClOrdID?: string// [4] 11 (String)
  ExecAckStatus: string// [5] 1036 (String)
  ExecID: string// [6] 17 (String)
  DKReason?: string// [7] 127 (String)
  Instrument?: IInstrument// [8] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp// [9] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [10] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  Side: string// [11] 54 (String)
  OrderQtyData?: IOrderQtyData// [12] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  LastQty?: number// [13] 32 (Float)
  LastPx?: number// [14] 31 (Float)
  PriceType?: number// [15] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [16] NoPriceQualifiers.2709, PriceQualifier.2710
  LastParPx?: number// [17] 669 (Float)
  CumQty?: number// [18] 14 (Float)
  AvgPx?: number// [19] 6 (Float)
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [20] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  Text?: string// [21] 58 (String)
  EncodedTextLen?: number// [22] 354 (Length)
  EncodedText?: Buffer// [23] 355 (RawData)
  StandardTrailer: IStandardTrailer// [24] SignatureLength.93, Signature.89, CheckSum.10
}
