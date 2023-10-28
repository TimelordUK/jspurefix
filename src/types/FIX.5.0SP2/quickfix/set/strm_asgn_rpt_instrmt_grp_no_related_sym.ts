import { IInstrument } from './instrument'

export interface IStrmAsgnRptInstrmtGrpNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  SettlType?: string// [2] 63 (String)
  StreamAsgnType?: number// [3] 1617 (Int)
  MDStreamID?: string// [4] 1500 (String)
  StreamAsgnRejReason?: number// [5] 1502 (Int)
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Length)
  EncodedText?: Buffer// [8] 355 (RawData)
}
