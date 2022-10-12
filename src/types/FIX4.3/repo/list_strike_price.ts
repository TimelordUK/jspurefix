import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The strike price message is used to exchange strike price *
* information for principal trades.                         *
*************************************************************
*/
export interface IListStrikePrice {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ListID: string// [2] 66 (String)
  TotNoStrikes: number// [3] 422 (Int)
  NoStrikes: number// [4] 428 (Int)
  Instrument: IInstrument// [5] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [6] 140 (Float)
  ClOrdID?: string// [7] 11 (String)
  Side?: string// [8] 54 (String)
  Price: number// [9] 44 (Float)
  Currency?: string// [10] 15 (String)
  Text?: string// [11] 58 (String)
  EncodedTextLen?: number// [12] 354 (Int)
  EncodedText?: Buffer// [13] 355 (RawData)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
