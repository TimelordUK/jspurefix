import { IInstrument } from './instrument'

export interface IStrmAsgnRptInstrmtGrp {
  Instrument?: IInstrument
  SettlType?: string// 63
  StreamAsgnType?: number// 1617
  MDStreamID?: string// 1500
  StreamAsgnRejReason?: number// 1502
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
