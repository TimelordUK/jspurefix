import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { ITrdInstrmtLegGrp } from './set/trd_instrmt_leg_grp'
import { ITrdAllocGrp } from './set/trd_alloc_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeCaptureReportAck {
  StandardHeader: IStandardHeader
  TradeReportID: string// 571
  TradeReportTransType?: number// 487
  TradeReportType?: number// 856
  TrdType?: number// 828
  TrdSubType?: number// 829
  SecondaryTrdType?: number// 855
  TransferReason?: string// 830
  ExecType: string// 150
  TradeReportRefID?: string// 572
  SecondaryTradeReportRefID?: string// 881
  TrdRptStatus?: number// 939
  TradeReportRejectReason?: number// 751
  SecondaryTradeReportID?: string// 818
  SubscriptionRequestType?: string// 263
  TradeLinkID?: string// 820
  TrdMatchID?: string// 880
  ExecID?: string// 17
  SecondaryExecID?: string// 527
  Instrument?: IInstrument
  TransactTime?: Date// 60
  TrdRegTimestamps?: ITrdRegTimestamps
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TrdInstrmtLegGrp?: ITrdInstrmtLegGrp
  ClearingFeeIndicator?: string// 635
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  CustOrderCapacity?: number// 582
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  PositionEffect?: string// 77
  PreallocMethod?: string// 591
  TrdAllocGrp?: ITrdAllocGrp
  StandardTrailer: IStandardTrailer
}
