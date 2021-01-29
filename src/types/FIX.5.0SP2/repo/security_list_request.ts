import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Security List Request message is used to return a list *
* of securities from the counterparty that match criteria    *
* provided on the request                                    *
**************************************************************
*/
export interface ISecurityListRequest {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityListRequestType: number// 559
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  Currency?: string// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
  SecurityListID?: string// 1465
  SecurityListType?: number// 1470
  SecurityListTypeSource?: number// 1471
}
