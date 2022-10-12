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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  SecurityResponseType: number// [4] 323 (Int)
  Instrument?: IInstrument// [5] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [6] 15 (String)
  TradingSessionID?: string// [7] 336 (String)
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Int)
  EncodedText?: Buffer// [10] 355 (RawData)
  InstrumentLeg?: IInstrumentLeg// [11] 
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
