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
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  RelatedTradeQuantity?: number// 1860
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
}
