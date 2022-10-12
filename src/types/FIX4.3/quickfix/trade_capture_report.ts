import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IOrderQtyData } from './set/order_qty_data'
import { ITradeCaptureReportNoSides } from './set/trade_capture_report_no_sides'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeCaptureReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeReportID: string// [2] 571 (String)
  TradeReportTransType?: string// [3] 487 (String)
  TradeRequestID?: string// [4] 568 (String)
  ExecType: string// [5] 150 (String)
  TradeReportRefID?: string// [6] 572 (String)
  ExecID?: string// [7] 17 (String)
  SecondaryExecID?: string// [8] 527 (String)
  ExecRestatementReason?: number// [9] 378 (Int)
  PreviouslyReported: boolean// [10] 570 (Boolean)
  Instrument?: IInstrument// [11] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  OrderQtyData?: IOrderQtyData// [12] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  LastQty: number// [13] 32 (Float)
  LastPx: number// [14] 31 (Float)
  LastSpotRate?: number// [15] 194 (Float)
  LastForwardPoints?: number// [16] 195 (Float)
  LastMkt?: string// [17] 30 (String)
  TradeDate: Date// [18] 75 (LocalDate)
  TransactTime: Date// [19] 60 (UtcTimestamp)
  SettlmntTyp?: string// [20] 63 (String)
  FutSettDate?: Date// [21] 64 (LocalDate)
  MatchStatus?: string// [22] 573 (String)
  MatchType?: string// [23] 574 (String)
  NoSides: ITradeCaptureReportNoSides[]// [24] Side.54, OrderID.37 .. MiscFeeType.139
  StandardTrailer: IStandardTrailer// [25] SignatureLength.93, Signature.89, CheckSum.10
}
