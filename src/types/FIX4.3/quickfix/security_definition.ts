import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { ISecurityDefinitionNoLegs } from './set/security_definition_no_legs'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityDefinition {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  SecurityResponseType: number// [4] 323 (Int)
  Instrument?: IInstrument// [5] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [6] 15 (String)
  TradingSessionID?: string// [7] 336 (String)
  TradingSessionSubID?: string// [8] 625 (String)
  Text?: string// [9] 58 (String)
  EncodedTextLen?: number// [10] 354 (Length)
  EncodedText?: Buffer// [11] 355 (RawData)
  NoLegs?: ISecurityDefinitionNoLegs[]// [12] LegSymbol.600, LegSymbolSfx.601 .. LegCurrency.556
  RoundLot?: number// [13] 561 (Float)
  MinTradeVol?: number// [14] 562 (Float)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
