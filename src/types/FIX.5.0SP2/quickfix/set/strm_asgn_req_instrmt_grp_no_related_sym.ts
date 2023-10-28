import { IInstrument } from './instrument'

export interface IStrmAsgnReqInstrmtGrpNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  SettlType?: string// [2] 63 (String)
  MDEntrySize?: number// [3] 271 (Float)
  MDStreamID?: string// [4] 1500 (String)
}
