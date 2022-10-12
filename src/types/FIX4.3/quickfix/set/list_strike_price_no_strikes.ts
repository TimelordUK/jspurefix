import { IInstrument } from './instrument'

export interface IListStrikePriceNoStrikes {
  Instrument: IInstrument// [1] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [2] 140 (Float)
  ClOrdID?: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  Side?: string// [5] 54 (String)
  Price: number// [6] 44 (Float)
  Currency?: string// [7] 15 (String)
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Length)
  EncodedText?: Buffer// [10] 355 (RawData)
}
