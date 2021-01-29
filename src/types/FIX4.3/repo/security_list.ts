import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentLeg } from './set/instrument_leg'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Security List message is used to return a list of        *
* securities that matches the criteria specified in a Security *
* List Request.                                                *
****************************************************************
*/
export interface ISecurityList {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  TotalNumSecurities?: number// 393
  NoRelatedSym?: number// 146
  Instrument?: IInstrument
  Currency?: string// 15
  InstrumentLeg?: IInstrumentLeg
  TradingSessionID?: string// 336
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
