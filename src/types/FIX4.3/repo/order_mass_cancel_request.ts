import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The order mass cancel request message requests the          *
* cancellation of all of the remaining quantity of a group of *
* orders matching criteria specified within the request.      *
***************************************************************
*/
export interface IOrderMassCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ClOrdID: string// [2] 11 (String)
  TradingSessionID?: string// [3] 336 (String)
  Instrument?: IInstrument// [4] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  UnderlyingInstrument?: IUnderlyingInstrument// [5] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. EncodedUnderlyingSecurityDesc.365
  Side?: string// [6] 54 (String)
  TransactTime: Date// [7] 60 (UtcTimestamp)
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Int)
  EncodedText?: Buffer// [10] 355 (RawData)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
