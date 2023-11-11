import { IInstrument } from './instrument'

export interface IStrmAsgnRptInstrmtGrp {
  SettlType?: string// [1] 63 (String)
  StreamAsgnType?: number// [1] 1617 (Int)
  MDStreamID?: string// [1] 1500 (String)
  OrdRejReason?: number// [1] 103 (Int)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  Instrument?: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
}
