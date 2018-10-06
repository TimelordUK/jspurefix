import { IInstrument } from './instrument'

export interface IStrmAsgnRptInstrmtGrp {
  SettlType?: string// 63
  StreamAsgnType?: number// 1617
  MDStreamID?: string// 1500
  OrdRejReason?: number// 103
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  Instrument?: IInstrument
}
