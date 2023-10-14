import { IInstrument } from './instrument'

export interface IStrmAsgnReqInstrmtGrp {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  SettlType?: string// [2] 63 (String)
  MDEntrySize?: number// [3] 271 (Float)
  MDStreamID?: string// [4] 1500 (String)
}
