import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Order Mass Cancel Report is used to acknowledge an Order *
* Mass Cancel Request.                                         *
****************************************************************
*/
export interface IOrderMassCancelReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ClOrdID?: string// [2] 11 (String)
  OrderID: string// [3] 37 (String)
  SecondaryOrderID?: string// [4] 198 (String)
  OrigClOrdID?: string// [5] 41 (String)
  TradingSessionID?: string// [6] 336 (String)
  Instrument?: IInstrument// [7] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  UnderlyingInstrument?: IUnderlyingInstrument// [8] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. EncodedUnderlyingSecurityDesc.365
  Side?: string// [9] 54 (String)
  TransactTime?: Date// [10] 60 (UtcTimestamp)
  Text?: string// [11] 58 (String)
  EncodedTextLen?: number// [12] 354 (Int)
  EncodedText?: Buffer// [13] 355 (RawData)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
