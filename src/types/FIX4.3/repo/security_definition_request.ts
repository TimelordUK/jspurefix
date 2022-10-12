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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityReqID: string// [2] 320 (String)
  SecurityRequestType: number// [3] 321 (Int)
  Instrument?: IInstrument// [4] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [5] 15 (String)
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Int)
  EncodedText?: Buffer// [8] 355 (RawData)
  TradingSessionID?: string// [9] 336 (String)
  InstrumentLeg?: IInstrumentLeg// [10] 
  SubscriptionRequestType?: string// [11] 263 (String)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
