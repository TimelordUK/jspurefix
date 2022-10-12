import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { ISecurityDefinitionRequestNoLegs } from './set/security_definition_request_no_legs'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityDefinitionRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityRequestType: number// [3] 321 (Int)
  Instrument?: IInstrument// [4] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [5] 15 (String)
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Length)
  EncodedText?: Buffer// [8] 355 (RawData)
  TradingSessionID?: string// [9] 336 (String)
  TradingSessionSubID?: string// [10] 625 (String)
  NoLegs?: ISecurityDefinitionRequestNoLegs[]// [11] LegSymbol.600, LegSymbolSfx.601 .. LegCurrency.556
  SubscriptionRequestType?: string// [12] 263 (String)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
