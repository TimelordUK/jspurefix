import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeCaptureReportRequestAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeRequestID: string// [2] 568 (String)
  TradeID?: string// [3] 1003 (String)
  SecondaryTradeID?: string// [4] 1040 (String)
  FirmTradeID?: string// [5] 1041 (String)
  SecondaryFirmTradeID?: string// [6] 1042 (String)
  TradeRequestType: number// [7] 569 (Int)
  SubscriptionRequestType?: string// [8] 263 (String)
  TotNumTradeReports?: number// [9] 748 (Int)
  TradeRequestResult: number// [10] 749 (Int)
  TradeRequestStatus: number// [11] 750 (Int)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [13] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  UndInstrmtGrp?: IUndInstrmtGrp// [14] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [15] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  MultiLegReportingType?: string// [16] 442 (String)
  ResponseTransportType?: number// [17] 725 (Int)
  ResponseDestination?: string// [18] 726 (String)
  Text?: string// [19] 58 (String)
  EncodedTextLen?: number// [20] 354 (Length)
  EncodedText?: Buffer// [21] 355 (RawData)
  MessageEventSource?: string// [22] 1011 (String)
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
