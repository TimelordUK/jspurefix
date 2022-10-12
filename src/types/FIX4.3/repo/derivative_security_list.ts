import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IInstrument } from './set/instrument'
import { IInstrumentLeg } from './set/instrument_leg'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Derivative Security List message is used to return a    *
* list of securities that matches the criteria specified in a *
* Derivative Security List Request.                           *
***************************************************************
*/
export interface IDerivativeSecurityList {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [4] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. EncodedUnderlyingSecurityDesc.365
  TotalNumSecurities?: number// [5] 393 (Int)
  NoRelatedSym?: number// [6] 146 (Int)
  Instrument?: IInstrument// [7] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [8] 15 (String)
  InstrumentLeg?: IInstrumentLeg// [9] 
  TradingSessionID?: string// [10] 336 (String)
  Text?: string// [11] 58 (String)
  EncodedTextLen?: number// [12] 354 (Int)
  EncodedText?: Buffer// [13] 355 (RawData)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
