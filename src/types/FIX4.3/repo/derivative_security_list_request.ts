import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Derivative Security List Request message is used to      *
* return a list of securities from the counterparty that match *
* criteria provided on the request                             *
****************************************************************
*/
export interface IDerivativeSecurityListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityReqID: string// [2] 320 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [3] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. EncodedUnderlyingSecurityDesc.365
  Currency?: string// [4] 15 (String)
  Text?: string// [5] 58 (String)
  EncodedTextLen?: number// [6] 354 (Int)
  EncodedText?: Buffer// [7] 355 (RawData)
  TradingSessionID?: string// [8] 336 (String)
  SubscriptionRequestType?: string// [9] 263 (String)
  StandardTrailer: IStandardTrailer// [10] SignatureLength.93, Signature.89, CheckSum.10
}
