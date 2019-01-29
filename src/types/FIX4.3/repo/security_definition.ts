import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentLeg } from './set/instrument_leg'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Security Definition message is used for the following: *
* 1. Accept the security defined in a Security Definition    *
* message.                                                   *
* 2. Accept the security defined in a Security Definition    *
* message with changes to the definition and/or identity of  *
* the security.                                              *
* 3. Reject the security requested in a Security Definition  *
* message                                                    *
**************************************************************
*/
export interface ISecurityDefinition {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityResponseType: number// 323
  Instrument?: IInstrument
  Currency?: number// 15
  TradingSessionID?: string// 336
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  InstrumentLeg?: IInstrumentLeg
  StandardTrailer: IStandardTrailer
}
