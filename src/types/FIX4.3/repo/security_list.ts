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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  TotalNumSecurities?: number// [4] 393 (Int)
  NoRelatedSym?: number// [5] 146 (Int)
  Instrument?: IInstrument// [6] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [7] 15 (String)
  InstrumentLeg?: IInstrumentLeg// [8] 
  TradingSessionID?: string// [9] 336 (String)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Int)
  EncodedText?: Buffer// [12] 355 (RawData)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
