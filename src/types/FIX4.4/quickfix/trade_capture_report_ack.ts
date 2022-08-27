import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { ITrdInstrmtLegGrp } from './set/trd_instrmt_leg_grp'
import { ITrdAllocGrp } from './set/trd_alloc_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeCaptureReportAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeReportID: string// [2] 571 (String)
  TradeReportTransType?: number// [3] 487 (Int)
  TradeReportType?: number// [4] 856 (Int)
  TrdType?: number// [5] 828 (Int)
  TrdSubType?: number// [6] 829 (Int)
  SecondaryTrdType?: number// [7] 855 (Int)
  TransferReason?: string// [8] 830 (String)
  ExecType: string// [9] 150 (String)
  TradeReportRefID?: string// [10] 572 (String)
  SecondaryTradeReportRefID?: string// [11] 881 (String)
  TrdRptStatus?: number// [12] 939 (Int)
  TradeReportRejectReason?: number// [13] 751 (Int)
  SecondaryTradeReportID?: string// [14] 818 (String)
  SubscriptionRequestType?: string// [15] 263 (String)
  TradeLinkID?: string// [16] 820 (String)
  TrdMatchID?: string// [17] 880 (String)
  ExecID?: string// [18] 17 (String)
  SecondaryExecID?: string// [19] 527 (String)
  Instrument?: IInstrument// [20] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  TransactTime?: Date// [21] 60 (UtcTimestamp)
  TrdRegTimestamps?: ITrdRegTimestamps// [22] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. TrdRegTimestampOrigin.771
  ResponseTransportType?: number// [23] 725 (Int)
  ResponseDestination?: string// [24] 726 (String)
  Text?: string// [25] 58 (String)
  EncodedTextLen?: number// [26] 354 (Length)
  EncodedText?: Buffer// [27] 355 (RawData)
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp// [28] NoLegs.555, LegSymbol.600 .. LegLastPx.637
  ClearingFeeIndicator?: string// [29] 635 (String)
  OrderCapacity?: string// [30] 528 (String)
  OrderRestrictions?: string// [31] 529 (String)
  CustOrderCapacity?: number// [32] 582 (Int)
  Account?: string// [33] 1 (String)
  AcctIDSource?: number// [34] 660 (Int)
  AccountType?: number// [35] 581 (Int)
  PositionEffect?: string// [36] 77 (String)
  PreallocMethod?: string// [37] 591 (String)
  TrdAllocGrp?: ITrdAllocGrp// [38] NoAllocs.78, AllocAccount.79 .. AllocQty.80
  StandardTrailer: IStandardTrailer// [39] SignatureLength.93, Signature.89, CheckSum.10
}
