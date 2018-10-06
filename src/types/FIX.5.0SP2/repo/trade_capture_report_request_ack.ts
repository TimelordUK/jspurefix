import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Trade Capture Request Ack message is used to:            *
* " Provide an acknowledgement to a Trade Capture Report       *
* Request in the case where the Trade Capture Report Request   *
* is used to specify a subscription or delivery of reports via *
* an out-of-band ResponseTransmissionMethod.                   *
* " Provide an acknowledgement to a Trade Capture Report       *
* Request in the case when the return of the Trade Capture     *
* Reports matching that request will be delayed or delivered   *
* asynchronously. This is useful in distributed trading system *
* environments.                                                *
* " Indicate that no trades were found that matched the        *
* selection criteria specified on the Trade Capture Report     *
* Request                                                      *
* " The Trade Capture Request was invalid for some business    *
* reason, such as request is not authorized, invalid or        *
* unknown instrument, party, trading session, etc.             *
****************************************************************
*/
export interface ITradeCaptureReportRequestAck {
  StandardHeader: IStandardHeader
  TradeRequestID: string// 568
  TradeID?: string// 1003
  SecondaryTradeID?: string// 1040
  FirmTradeID?: string// 1041
  SecondaryFirmTradeID?: string// 1042
  TradeRequestType: number// 569
  SubscriptionRequestType?: string// 263
  TotNumTradeReports?: number// 748
  TradeRequestResult: number// 749
  TradeRequestStatus: number// 750
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  MultiLegReportingType?: string// 442
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  MessageEventSource?: string// 1011
  StandardTrailer: IStandardTrailer
}
