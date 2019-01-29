import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Trade Capture Report can be used to:                   *
* " Request one or more trade capture reports based upon     *
* selection criteria provided on the trade capture report    *
* request                                                    *
* " Subscribe for trade capture reports based upon selection *
* criteria provided on the trade capture report request.     *
**************************************************************
*/
export interface ITradeCaptureReportRequest {
  StandardHeader: IStandardHeader
  SubscriptionRequestType?: string// 263
  ExecID?: string// 17
  OrderID?: string// 37
  ClOrdID?: string// 11
  Parties?: IParties[]
  Instrument?: IInstrument
  TradeDate?: Date// 75
  TransactTime?: Date// 60
  Side?: string// 54
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
