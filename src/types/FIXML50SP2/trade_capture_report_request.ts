import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ITrdCapDtGrp } from './set/trd_cap_dt_grp'

/*
*************************************************************
* TradeCaptureReportRequest can be found in Volume 5 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface ITradeCaptureReportRequest {
  TradeRequestID: string// 568
  TradeID?: string// 1003
  SecondaryTradeID?: string// 1040
  FirmTradeID?: string// 1041
  SecondaryFirmTradeID?: string// 1042
  TradeRequestType: number// 569
  SubscriptionRequestType?: string// 263
  TradeReportID?: string// 571
  SecondaryTradeReportID?: string// 818
  SecondaryExecID?: string// 527
  ExecID?: string// 17
  ExecType?: string// 150
  OrderID?: string// 37
  ClOrdID?: string// 11
  MatchStatus?: string// 573
  TrdType?: number// 828
  TrdSubType?: number// 829
  OffsetInstruction?: number// 1849
  TradeHandlingInstr?: string// 1123
  TransferReason?: string// 830
  SecondaryTrdType?: number// 855
  TradeLinkID?: string// 820
  TrdMatchID?: string// 880
  ClearingBusinessDate?: Date// 715
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TimeBracket?: string// 943
  Side?: string// 54
  MultiLegReportingType?: string// 442
  TradeInputSource?: string// 578
  TradeInputDevice?: string// 579
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  MessageEventSource?: string// 1011
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  TrdCapDtGrp?: ITrdCapDtGrp[]
}
