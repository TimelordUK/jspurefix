import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'

/*
****************************************************************
* TradeCaptureReportRequestAck can be found in Volume 5 of the *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface ITradeCaptureReportRequestAck {
  TradeRequestID: string// 568
  TradeID?: string// 1003
  SecondaryTradeID?: string// 1
  FirmTradeID?: string// 1041
  SecondaryFirmTradeID?: string// 1042
  TradeRequestType: number// 569
  SubscriptionRequestType?: string// 263
  TotNumTradeReports?: number// 748
  SecurityRequestResult: number// 560
  TradeRequestStatus: number// 750
  MultiLegReportingType?: string// 442
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  MessageEventSource?: string// 1011
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
}
