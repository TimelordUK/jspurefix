import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'

/*
***************************************************
* CrossRequestAck can be found in Volume 3 of the *
*                                                 *
* specification                                   *
***************************************************
*/
export interface ICrossRequestAck {
  CrossRequestID: string// 2672
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  OrderQty?: number// 38
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
}
