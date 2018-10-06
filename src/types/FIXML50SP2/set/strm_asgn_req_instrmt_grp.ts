import { IInstrument } from './instrument'

export interface IStrmAsgnReqInstrmtGrp {
  SettlType?: string// 63
  MDEntrySize?: number// 271
  MDStreamID?: string// 1500
  Instrument?: IInstrument
}
