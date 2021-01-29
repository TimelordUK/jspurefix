import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentLeg } from './set/instrument_leg'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Security Definition Request message is used for the     *
* following:                                                  *
* 1. Request a specific Security to be traded with the second *
* party. The request security can be defined as a multileg    *
* security made up of one or more instrument legs.            *
***************************************************************
*/
export interface ISecurityDefinitionRequest {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityRequestType: number// 321
  Instrument?: IInstrument
  Currency?: string// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  InstrumentLeg?: IInstrumentLeg
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
}
