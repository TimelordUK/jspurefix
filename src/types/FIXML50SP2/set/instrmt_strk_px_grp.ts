import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'

export interface IInstrmtStrkPxGrp {
  PrevClosePx?: number// [1] 140 (Float)
  ClOrdID?: string// [1] 11 (String)
  SecondaryClOrdID?: string// [1] 526 (String)
  Side?: string// [1] 54 (String)
  Price?: number// [1] 44 (Float)
  Currency?: string// [1] 15 (String)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  Instrument: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp[]// [2] Sym.311, Sfx.312 .. XID.2631
}
