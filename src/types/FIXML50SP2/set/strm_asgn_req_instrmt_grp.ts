import { IInstrument } from './instrument'

export interface IStrmAsgnReqInstrmtGrp {
  SettlType?: string// [1] 63 (String)
  MDEntrySize?: number// [1] 271 (Float)
  MDStreamID?: string// [1] 1500 (String)
  Instrument?: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
}
