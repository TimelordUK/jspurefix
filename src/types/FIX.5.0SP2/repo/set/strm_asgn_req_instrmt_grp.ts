import { IInstrument } from './instrument'

export interface IStrmAsgnReqInstrmtGrp {
  Instrument?: IInstrument
  SettlType?: string// 63
  MDEntrySize?: number// 271
  MDStreamID?: string// 1500
}
