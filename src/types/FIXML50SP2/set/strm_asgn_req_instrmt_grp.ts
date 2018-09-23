import { IInstrument } from './instrument'

export interface IStrmAsgnReqInstrmtGrp {
  InstrumentScopeSettlType?: string// 1557
  MDEntrySize?: number// 271
  MDStreamID?: string// 1500
  Instrument?: IInstrument
}
