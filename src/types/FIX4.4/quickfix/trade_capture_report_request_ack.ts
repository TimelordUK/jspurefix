import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'

export interface ITradeCaptureReportRequestAck {
  TradeRequestID: string// 568
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
}
