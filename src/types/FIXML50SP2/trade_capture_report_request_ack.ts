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
  MDStatisticReqID: string// 2452
  LegTradeID?: string// 1894
  SecondaryTradeID?: string// 1
  FirmTradeID?: string// 1041
  SecondaryFirmTradeID?: string// 1042
  RiskLimitRequestType: number// 1760
  SubscriptionRequestType?: string// 263
  TotNumTradeReports?: number// 748
  MDStatisticRequestResult: number// 2473
  MassOrderRequestStatus: number// 2425
  SideMultiLegReportingType?: number// 752
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  MessageEventSource?: string// 1011
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
}
